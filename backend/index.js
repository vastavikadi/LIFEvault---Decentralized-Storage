import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import multer from "multer";
import uploadRoutes from "./routes/uploadRoutes.js";
import { Client, PrivateKey } from "@hiveio/dhive";
import axios from "axios";
import FormData from "form-data";
import User from "./models/user.js";
import { PinataSDK } from "pinata-web3";
import { connectDB } from "./config/database.js";
import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contact.js";
import taskRoutes from "./routes/task.js";
import ratingRoutes from "./routes/rating.js";

dotenv.config();

connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api", uploadRoutes);
app.use("/", contactRoutes);
app.use("/", taskRoutes);
app.use("/apl/ratings", ratingRoutes);

const PORT = process.env.PORT || 8090;

const storage = multer.memoryStorage();
const upload = multer({ storage });

const hiveClient = new Client(["https://api.hive.blog"]);
const pinata = new PinataSDK({
  pinataJwt: process.env.PINATA_JWT,
  pinataGateway: "example-gateway.mypinata.cloud",
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

app.get("/api/gallery/:account", async (req, res) => {
  try {
    const account = req.params.account;

    const history = await hiveClient.database.getAccountHistory(
      account,
      -1,
      100
    );

    const ipfsUploads = history
      .filter(
        (tx) =>
          tx[1].op &&
          tx[1].op.length > 1 &&
          tx[1].op[0] === "custom_json" &&
          tx[1].op[1].id === "ipfs_upload"
      )
      .map((tx) => {
        return {
          trx_id: tx[1].trx_id,
          jsonData: JSON.parse(tx[1].op[1].json),
        };
      });

    res.json({ success: true, uploads: ipfsUploads });
  } catch (error) {
    console.error("Error fetching uploads:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching uploads",
      error: error.message,
    });
  }
});

// Rename File Route
app.put("/gallery/rename/:ipfsHash", async (req, res) => {
  try {
    const ipfsHash = decodeURIComponent(req.params.ipfsHash);
    const { newFileName } = req.body;

    if (!newFileName) {
      return res
        .status(400)
        .json({ success: false, message: "New file name is required." });
    }

    const fileMetadata = await hiveClient.database
      .getAccountHistory(process.env.HIVE_ACCOUNT, -1, 100)
      .then((history) =>
        history.filter(
          (tx) =>
            tx[1].op &&
            tx[1].op.length > 1 &&
            tx[1].op[0] === "custom_json" &&
            tx[1].op[1].id === "ipfs_upload" &&
            JSON.parse(tx[1].op[1].json).ipfsHash === ipfsHash
        )[0]
      );

    if (!fileMetadata) {
      return res
        .status(404)
        .json({ success: false, message: "File not found." });
    }

    const fileData = JSON.parse(fileMetadata[1].op[1].json);

    const update = await pinata.updateMetadata({
      cid: ipfsHash,
      name: newFileName,
      keyValues: {
        originalName: fileData.fileName,
      },
    });

    res.json({
      success: true,
      message: "File renamed successfully on Pinata",
      ipfsHash: fileData.ipfsHash,
      updatedMetadata: {
        fileName: newFileName,
        fileType: fileData.fileType,
        fileExtension: fileData.fileExtension,
        uploadedDate: fileData.uploadedDate,
      },
    });
  } catch (error) {
    console.error("Error renaming file:", error);
    res.status(500).json({
      success: false,
      message: "File renaming failed",
      error: error.message,
    });
  }
});


app.get("/", (req, res) => {
  res.send("Welcome to APIs of LIFEvault");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
