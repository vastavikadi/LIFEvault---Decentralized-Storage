import React, { useState } from "react";
import axios from "axios";
import hive from "@hiveio/dhive";

export default function DocumentManagement() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [isHiveAuthenticated, setIsHiveAuthenticated] = useState(false);
  const [hiveAccount, setHiveAccount] = useState(null);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const authenticateWithHive = () => {
    const message =
      "Please sign this message to authenticate and authorize uploads with Hive.";
    if (window.hive_keychain) {
      window.hive_keychain.requestSignBuffer(
        null,
        message,
        "Posting",
        (response) => {
          if (response.success) {
            setIsHiveAuthenticated(true);
            setHiveAccount(response.data.username);
            localStorage.setItem("hiveUsername", response.data.username);
            alert("Hive authentication successful!");
          } else {
            alert("Hive authentication failed. Please try again.");
          }
        }
      );
    } else {
      alert("Hive Keychain extension is not installed.");
    }
  };

  const handleUploadFiles = async () => {
    if (uploadedFiles.length === 0 || !isHiveAuthenticated) return;

    setUploading(true);

    const formData = new FormData();
    uploadedFiles.forEach((file) => {
      formData.append("file", file);
    });

    try {
      const ipfsResponse = await axios.post(
        "https://backend-lifevault.vercel.app/api/upload",
        formData,
        {
          headers: {
            "Hive-Account": hiveAccount,
          },
        }
      );

      const ipfsHash = ipfsResponse.data.IpfsHash;

      const jsonPayload = JSON.stringify({
        message: "Document upload",
        ipfsHash: ipfsHash,
        fileName: uploadedFiles[0].name,
        uploadedDate: new Date().toISOString(),
      });

      if (window.hive_keychain) {
        window.hive_keychain.requestCustomJson(
          hiveAccount,
          "ipfs_upload",
          "Posting",
          jsonPayload,
          "Broadcasting IPFS hash to Hive",
          (response) => {
            if (response.success) {
              alert("File metadata broadcasted to Hive successfully!");
              setUploadedFiles([]);
            } else {
              alert("Hive broadcast failed.");
              console.error(response.error);
            }
          }
        );
      } else {
        alert("Hive Keychain extension is not installed.");
      }
    } catch (error) {
      console.error("IPFS upload or Hive broadcast error:", error);
      alert("File upload or broadcast failed.");
    }

    setUploading(false);
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen py-12">
      <div className="text-center mt-10 mb-16">
        <h1 className="text-4xl font-extrabold text-blue-900">
          Document Management
        </h1>
        <p className="text-lg text-blue-700 mt-4">
          Organize and secure your important files effortlessly.
        </p>

        {!isHiveAuthenticated && (
          <button
            className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            onClick={authenticateWithHive}
          >
            Authenticate with Hive Keychain
          </button>
        )}

        {isHiveAuthenticated && (
          <button
            className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            onClick={handleUploadFiles}
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Start Uploading"}
          </button>
        )}
      </div>

      {isHiveAuthenticated && (
        <div className="upload-section max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-semibold text-blue-800">
            Upload Your Documents
          </h2>
          <div className="upload-area mt-4 p-4 border-2 border-dashed border-blue-300 rounded-lg">
            <input
              type="file"
              multiple
              onChange={handleFileUpload}
              className="w-full text-center cursor-pointer"
            />
          </div>
          <div className="uploaded-files-list mt-6">
            {uploadedFiles.map((file, index) => (
              <div
                key={index}
                className="file-item flex items-center justify-between p-2 bg-blue-100 rounded-md mb-2"
              >
                <span className="text-blue-600">{file.name}</span>
                <button
                  className="text-red-500"
                  onClick={() =>
                    setUploadedFiles(
                      uploadedFiles.filter((_, i) => i !== index)
                    )
                  }
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export { DocumentManagement };
