import React from "react";
import { motion } from "framer-motion";

export default function AIAssistant() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-blue-900">AI Assistant</h1>
        <p className="text-lg text-blue-700 mt-4">
          Get smart event summaries and insights with our AI.
        </p>
        <a href="/chatbot" alt="aisupport">
          <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
            Try AI Chatbot
          </button>
        </a>
      </div>

      {/* Event Summarization Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Event Summarization
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-blue-600">
            Our AI provides concise summaries of your events and important
            moments.
          </p>
          <a href="https://lifevault.streamlit.app/event-summarization" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Learn More
          </a>
        </div>
      </div>

      {/* Sentiment Analysis Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Sentiment Analysis
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-blue-600">
            Analyze the sentiments in your notes and documents for insights.
          </p>
          <a href="https://lifevault.streamlit.app/sentiment-analysis" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Learn More
          </a>
        </div>
      </div>

      {/* Redirect Links to Other Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Other Features</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
          <p className="text-blue-600">
            Explore functionalities of LifeVault to manage your data effectively.
          </p>
          <div className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            File Management
          </div>
          <div className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Data Security
          </div>
          <div className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Data Integrations
          </div>
        </div>
      </div>
    </div>
  );
}

export { AIAssistant };