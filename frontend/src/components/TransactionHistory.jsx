import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TransactionHistory = ({ hiveUsername }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      const apiUrl = `https://api.hive.blog`;
      const payload = {
        jsonrpc: "2.0",
        method: "account_history_api.get_account_history",
        params: { account: hiveUsername, start: -1, limit: 1000 },
        id: 1,
      };

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!response.ok) {
          throw new Error(`Failed to fetch transactions: ${response.statusText}`);
        }
        const { result } = await response.json();
        setTransactions(result.history);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (hiveUsername) {
      fetchTransactions();
    }
  }, [hiveUsername]);

  if (loading) return <div>Loading transaction history...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!transactions.length) return <div>No transactions found for this user.</div>;

  return (
    <div className="mt-12">
      <motion.h3 className="text-3xl font-semibold text-blue-700 mb-4">
        Transaction History
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {transactions.map(([index, transaction], idx) => {
          const { trx_id, block, timestamp, op } = transaction;
          const operationType = op[0];
          const operationDetails = op[1];

          return (
            <motion.div
              key={index}
              className="bg-white shadow-xl rounded-lg p-6"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <h4 className="text-xl font-semibold text-blue-600 mb-2">{operationType}</h4>
              <p className="text-gray-600">Transaction ID: {trx_id}</p>
              <p className="text-gray-600">Block: {block}</p>
              <p className="text-gray-600">Timestamp: {new Date(timestamp).toLocaleString()}</p>

              {operationType === "custom_json" && operationDetails && (
                <>
                  <p className="text-gray-600">ID: {operationDetails.id}</p>
                  <p className="text-gray-600">
                    JSON: {JSON.stringify(JSON.parse(operationDetails.json), null, 2)}
                  </p>
                  <p className="text-gray-600">
                    Posting Auths: {operationDetails.required_posting_auths.join(", ")}
                  </p>
                </>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TransactionHistory;
