import express from "express";
import axios from "axios";
import FormData from "form-data";
// import { Client, PrivateKey } from "@hiveio/dhive";
import multer from "multer";
import dotenv from "dotenv";
import { PinataSDK } from "pinata-web3";
import hive from "@hiveio/hive-js";
import pkg from "@hiveio/hive-js";
const { PrivateKey } = pkg;

dotenv.config();
hive.api.setOptions({ url: "https://api.hive.blog" });
const pinata = new PinataSDK({ pinataJwt: process.env.PINATA_JWT });

const app = express();
const upload = multer();

// Backend: IPFS Upload Route
app.post("/upload", upload.array("file"), async (req, res) => {
  try {
    const files = req.files;

    if (!files || files.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "No files uploaded." });
    }

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("file", file.buffer, { filename: file.originalname });
    });

    const response = await axios.post(
      `https://api.pinata.cloud/pinning/pinFileToIPFS`,
      formData,
      {
        maxBodyLength: "Infinity",
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
          Authorization: `Bearer ${process.env.PINATA_JWT}`,
        },
      }
    );

    const ipfsHash = response.data.IpfsHash;
    res.json({ success: true, IpfsHash: ipfsHash });
  } catch (error) {
    console.error("IPFS upload error:", error.message);
    res.status(500).json({ success: false, message: "IPFS upload failed." });
  }
});

// Delete File Route
app.delete("/gallery/delete/:ipfsHash", async (req, res) => {
  try {
    const { ipfsHash } = req.params;
    console.log(`Request received to delete file with IPFS Hash: ${ipfsHash}`);

    if (!ipfsHash || ipfsHash.length !== 46 || !ipfsHash.startsWith("Qm")) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid IPFS hash" });
    }
    
    const unpinResponse = await pinata.unpin([ipfsHash]);
    console.log("Pinata unpin response:", unpinResponse);

    if (unpinResponse.error) {
      throw new Error(`Pinata unpin failed: ${unpinResponse.error}`);
    }

    res.json({
      success: true,
      message: "File unpinned successfully from Pinata",
      ipfsHash: ipfsHash,
    });
  } catch (error) {
    console.error("Error deleting file:", error.message);
    res.status(500).json({
      success: false,
      message: "File deletion failed",
      error: error.message,
    });
  }
});

export default app;
