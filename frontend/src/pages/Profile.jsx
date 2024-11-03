import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TransactionHistory from "../components/TransactionHistory.jsx";

const ProfilePage = () => {
  const email = localStorage.getItem("userEmail");
  const hiveUsername = localStorage.getItem("hiveUsername");
  const [accountDetails, setAccountDetails] = useState(null);

  const lookupAccountNames = async (accounts) => {
    const redirectUrl = `https://hiveblocks.com/@${accounts}`;
    window.location.href = redirectUrl;
  };

  const handleLookupAccounts = () => {
    if (hiveUsername) {
      lookupAccountNames([hiveUsername]);
    } else {
      console.warn("Hive username is not available.");
    }
  };

  return (
    <div className="p-14 mx-auto mt-12 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200">
      <motion.h2
        className="text-5xl font-extrabold text-blue-700 mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        🧑‍💼 User Profile 🧑‍💼
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          className="bg-white shadow-xl rounded-lg p-8 relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h3 className="text-3xl font-semibold text-blue-700 mb-4">Email</h3>
          <p className="text-lg text-gray-600">{email || "No email found"}</p>
        </motion.div>

        <motion.div
          className="bg-white shadow-xl rounded-lg p-8 relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
        >
          <h3 className="text-3xl font-semibold text-blue-700 mb-4">
            Hive Username
          </h3>
          <p className="text-lg text-gray-600">
            {hiveUsername || "No Hive username found"}
          </p>
        </motion.div>
      </div>

      <div className="m-20">
        <button
          onClick={handleLookupAccounts}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Lookup Accounts
        </button>
      </div>

      {accountDetails && (
        <div className="mt-8">
          <h3 className="text-3xl font-semibold text-blue-700 mb-4">
            Account Details
          </h3>
          <pre>{JSON.stringify(accountDetails, null, 2)}</pre>{" "}
          {/* Display account details */}
        </div>
      )}

      {hiveUsername && <TransactionHistory hiveUsername={hiveUsername} />}
    </div>
  );
};

export default ProfilePage;
