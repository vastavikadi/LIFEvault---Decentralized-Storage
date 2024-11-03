import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Gallery.css";
import folderIcon from "../assets/icons/folder.png";
import fileIcon from "../assets/file.png";
import shareIcon from "../assets/share.png";
import editIcon from "../assets/edit.png";
import saveIcon from "../assets/diskette.png";
import delIcon from "../assets/delete.png";
import { motion } from "framer-motion";

const Gallery = () => {
  const [uploads, setUploads] = useState([]);
  const [filteredUploads, setFilteredUploads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [fileTypeFilter, setFileTypeFilter] = useState("All");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [renamingFileId, setRenamingFileId] = useState(null);
  const [newFileName, setNewFileName] = useState("");
  const [hiveAccount, setHiveAccount] = useState(null);

  const getDeletedFiles = () => {
    const deletedFiles = localStorage.getItem("deletedFiles");
    return deletedFiles ? JSON.parse(deletedFiles) : []; // Ensure it's an array
  };
  const showDeletedFiles = getDeletedFiles();

  const DeletedFilesSection = ({ uploads, deletedFiles }) => {
    return (
      <div className="mt-10">
        <h2 className="text-xl font-bold">Deleted Files</h2>
        {deletedFiles.length > 0 ? (
          <table className="min-w-full border-collapse border border-gray-200 mt-4">
            <thead>
              <tr>
                <th className="border border-gray-200 px-4 py-2">File Name</th>
                <th className="border border-gray-200 px-4 py-2">IPFS Hash</th>
              </tr>
            </thead>
            <tbody>
              {deletedFiles.map((ipfsHash) => {
                const upload = uploads.find(
                  (upload) => upload.jsonData.ipfsHash === ipfsHash
                );
                return (
                  <tr key={ipfsHash}>
                    <td className="border border-gray-200 px-4 py-2">
                      {upload ? upload.jsonData.fileName : "Unknown"}
                    </td>
                    <td className="border flex justify-center border-gray-200 px-4 py-2">
                      {ipfsHash}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p>No deleted files found.</p>
        )}
      </div>
    );
  };

  const getFileType = (fileName) => {
    const extension = fileName.split(".").pop().toLowerCase();
    if (["jpg", "jpeg", "png", "gif", "bmp", "svg"].includes(extension)) {
      return "Image";
    } else if (extension === "pdf") {
      return "PDF";
    } else if (
      ["doc", "docx", "txt", "odt", "rtf", "pptx"].includes(extension)
    ) {
      return "Document";
    } else {
      return "Other";
    }
  };

  useEffect(() => {
    const fetchUploads = async () => {
      try {
        const token = localStorage.getItem("token");
        const hiveUsername = localStorage.getItem("hiveUsername");
        if (hiveUsername) {
          const response = await axios.get(
            `https://backend-lifevault.vercel.app/api/gallery/${hiveUsername}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          if (response.data.success) {
            const deletedFiles = getDeletedFiles();
            const uploadsWithTypes = response.data.uploads.map((upload) => ({
              ...upload,
              fileType: getFileType(upload.jsonData.fileName),
            }));

            const filteredUploads = uploadsWithTypes.filter(
              (upload) => !deletedFiles.includes(upload.jsonData.ipfsHash)
            );

            setUploads(uploadsWithTypes);
            setFilteredUploads(filteredUploads);
          } else {
            console.warn("Failed to fetch uploads");
            setError("Failed to fetch uploads");
          }
        } else {
          console.warn("Hive username is missing. Please authenticate.");
          setError("Hive username not found. Please authenticate.");
        }
      } catch (err) {
        setError("Failed to fetch uploads");
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUploads();
  }, []);

  useEffect(() => {
    let filtered = uploads;

    if (fileTypeFilter !== "All") {
      filtered = filtered.filter(
        (upload) => upload.fileType === fileTypeFilter
      );
    }

    if (dateRange.start && dateRange.end) {
      const startDate = new Date(dateRange.start);
      const endDate = new Date(dateRange.end);

      filtered = filtered.filter((upload) => {
        const uploadDate = new Date(upload.jsonData.uploadedDate);
        return uploadDate >= startDate && uploadDate <= endDate;
      });
    }

    if (searchTerm) {
      filtered = filtered.filter((upload) =>
        upload.jsonData.fileName
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }

    setFilteredUploads(filtered);
  }, [fileTypeFilter, dateRange, searchTerm, uploads]);

  const handleDownload = (hash, fileName) => {
    const link = document.createElement("a");
    link.href = `https://ipfs.io/ipfs/${hash}`;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = (hash) => {
    const shareUrl = `https://ipfs.io/ipfs/${hash}`;
    navigator.clipboard.writeText(shareUrl);
    alert("Link copied to clipboard!");
  };

  const handleRename = async (ipfsHash, newFileName) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `https://backend-lifevault.vercel.app/gallery/rename/${encodeURIComponent(ipfsHash)}`,
        { newFileName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
  
      if (response.data.success) {
        const { updatedMetadata } = response.data;
  
        const jsonPayload = JSON.stringify({
          fileName: updatedMetadata.fileName,
          fileType: updatedMetadata.fileType,
          fileExtension: updatedMetadata.fileExtension,
          ipfsHash: updatedMetadata.ipfsHash,
          uploadedDate: updatedMetadata.uploadedDate,
        });
  
        const hiveAccount = localStorage.getItem("hiveusername");
  
        if (window.hive_keychain) {
          window.hive_keychain.requestCustomJson(
            hiveAccount,
            "ipfs_upload",
            "Posting",
            jsonPayload,
            "Updating file metadata on Hive",
            (keychainResponse) => {
              if (keychainResponse.success) {
                alert("File metadata updated on Hive successfully!");
              } else {
                alert("Hive broadcast failed.");
                console.error(keychainResponse.error);
              }
            }
          );
        } else {
          alert("Hive Keychain is not available.");
        }
      } else {
        alert("Rename failed");
      }
    } catch (err) {
      console.error("Error renaming file:", err);
      alert("An error occurred while renaming the file.");
    }
  };  

  const handleDelete = async (ipfsHash) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(
        `https://backend-lifevault.vercel.app/api/gallery/delete/${encodeURIComponent(
          ipfsHash
        )}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        const deletedFiles = getDeletedFiles();
        deletedFiles.push(ipfsHash);
        // deletedFiles[ipfsHash] = deletedDate;
        localStorage.setItem("deletedFiles", JSON.stringify(deletedFiles));
        setHiveAccount(response.data.username);

        const updatedUploads = uploads.filter(
          (upload) => upload.jsonData.ipfsHash !== ipfsHash
        );
        setUploads(updatedUploads);
        setFilteredUploads(updatedUploads);

        const jsonPayload = JSON.stringify({
          ipfsHash: ipfsHash,
          deletedDate: new Date().toISOString(),
          status: "deleted",
        });

        if (window.hive_keychain) {
          window.hive_keychain.requestCustomJson(
            hiveAccount,
            "ipfs_upload_delete",
            "Posting",
            jsonPayload,
            "Broadcasting IPFS hash deletion on Hive",
            (keychainResponse) => {
              if (keychainResponse.success) {
                alert("File marked as deleted on Hive successfully!");
              } else {
                alert("Hive broadcast failed.");
                console.error(keychainResponse.error);
              }
            }
          );
        } else {
          alert("Hive Keychain is not available.");
        }
      } else {
        const errorMessage =
          response.data.message || "Delete failed due to an unknown error.";
        alert(`Error: ${errorMessage}`);
      }
    } catch (err) {
      console.error("Error deleting file:", err);
      alert("An error occurred while deleting the file.");
    }
  };

  if (loading) return <div>Loading your uploads... Please wait.</div>;

  if (error) return <div>Error loading uploads: {error}</div>;

  return (
    <div className="min-h-screen px-6 py-12 bg-white">
      <div className="pb-10 text-center mt-10">
        <h1 className="pb-4 text-3xl font-bold gradient-text bg-gradient-to-r from-yellow-600 via-pink-600 to-orange-400 bg-clip-text text-transparent">
          Gallery
        </h1>
        <p className="text-base text-slate-600">
          These are your uploads to LifeVault.
        </p>
      </div>

      <div className="mb-8 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search by file name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded-md"
        />
        <select
          value={fileTypeFilter}
          onChange={(e) => setFileTypeFilter(e.target.value)}
          className="px-4 py-2 border rounded-md"
        >
          <option value="All">All File Types</option>
          <option value="Image">Images</option>
          <option value="PDF">PDFs</option>
          <option value="Document">Documents</option>
          <option value="Other">Other</option>
        </select>
        <div>
          <input
            type="date"
            onChange={(e) =>
              setDateRange({ ...dateRange, start: e.target.value })
            }
            className="px-4 py-2 border rounded-md"
          />
          <input
            type="date"
            onChange={(e) =>
              setDateRange({ ...dateRange, end: e.target.value })
            }
            className="px-4 py-2 border rounded-md ml-2"
          />
        </div>
      </div>

      <div className="z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredUploads.length > 0 ? (
          filteredUploads.map((upload) => (
            <div key={upload.trx_id} className="gallery-item">
              <div className="relative bg-white rounded-lg shadow-lg border border-gray-200">
                <img
                  src={
                    upload.fileType === "Image"
                      ? `https://ipfs.io/ipfs/${upload.jsonData.ipfsHash}`
                      : folderIcon
                  }
                  alt="Upload"
                  className="object-cover h-40 w-full rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    {upload.jsonData.fileName}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {new Date(upload.jsonData.uploadedDate).toLocaleString()}
                  </p>
                  <div className="mt-2 flex space-x-2">
                    <button
                      className="flex-1 flex items-center justify-center bg-blue-500 text-white py-2 rounded-md"
                      onClick={() =>
                        handleDownload(
                          upload.jsonData.ipfsHash,
                          upload.jsonData.fileName
                        )
                      }
                    >
                      <img
                        src={fileIcon}
                        alt="Download"
                        className="w-4 h-4 mr-2"
                      />
                    </button>
                    <button
                      className="flex-1 flex items-center justify-center bg-green-500 text-white py-2 rounded-md"
                      onClick={() => handleShare(upload.jsonData.ipfsHash)}
                    >
                      <img
                        src={shareIcon}
                        alt="Share"
                        className="w-4 h-4 mr-2"
                      />
                    </button>
                    {renamingFileId === upload.jsonData.ipfsHash ? (
                      <>
                        <input
                          type="text"
                          value={newFileName}
                          onChange={(e) => setNewFileName(e.target.value)}
                          className="flex-1 border rounded-md px-2 py-1"
                        />
                        <button
                          className="flex-1 bg-yellow-500 text-white py-2 rounded-md"
                          onClick={() =>
                            handleRename(upload.jsonData.ipfsHash, newFileName)
                          }
                        >
                          <img src={saveIcon} alt="Save" className="w-4 h-4" />
                        </button>
                      </>
                    ) : (
                      <button
                        className="flex-1 flex items-center justify-center bg-yellow-500 text-white py-2 rounded-md"
                        onClick={() => {
                          setRenamingFileId(upload.jsonData.ipfsHash);
                          setNewFileName(upload.jsonData.fileName);
                        }}
                      >
                        <img
                          src={editIcon}
                          alt="Rename"
                          className="w-4 h-4 mr-2"
                        />
                      </button>
                    )}
                    <button
                      className="flex-1 flex items-center justify-center bg-red-500 text-white py-2 rounded-md"
                      onClick={() => handleDelete(upload.jsonData.ipfsHash)}
                    >
                      <img
                        src={delIcon}
                        alt="Delete"
                        className="w-4 h-4 mr-2"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No uploads found.
          </div>
        )}
      </div>
      <div className="mt-10">
        <DeletedFilesSection
          uploads={uploads}
          deletedFiles={showDeletedFiles}
        />
      </div>
      <div className="mt-20 mb-20">
        <motion.h2
          className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-blue-700 mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Instructions
        </motion.h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-600 text-center px-4 md:px-8 lg:px-12">
          Please note that files deleted here are removed entirely from IPFS
          storage. However, due to IPFS's decentralized nature, some deleted
          files may still reload or appear on other nodes temporarily. Also, as
          file deletion details are broadcasted on the blockchain, a record of
          the deletion will remain permanently accessible on the blockchain
          ledger.
        </p>
      </div>
    </div>
  );
};

export default Gallery;
