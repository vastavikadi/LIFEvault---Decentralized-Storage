import React from 'react';
import securityImg from '../assets/security.jpg';
import aiInsightsImg from '../assets/ai_insights.jpg';
import dataOwnershipImg from '../assets/data_ownership.jpg';
import blockchainImg from '../assets/blockchain.jpg';
import integrationImg from '../assets/integration.jpg';
import organizationImg from '../assets/organization.jpg';

const features = [
  {
    title: 'Unmatched Security',
    description: 'Store your sensitive documents with top-tier blockchain technology, ensuring that your data is protected and accessible only to you.',
    img: securityImg,
  },
  {
    title: 'AI-Driven Insights',
    description: 'Automatically categorize and summarize your important life events, making it easier to manage and navigate through your memories.',
    img: aiInsightsImg,
  },
  {
    title: 'Complete Data Ownership',
    description: 'Enjoy full control over your information with flexible privacy settings, allowing you to decide who can access or share your data.',
    img: dataOwnershipImg,
  },
  {
    title: 'Blockchain Integration',
    description: 'Seamlessly connect with the Hive blockchain for secure data handling and streamlined interactions with decentralized platforms.',
    img: blockchainImg,
  },
  {
    title: 'Seamless Integration',
    description: 'Effortlessly integrate Hive Keychain for secure login and transaction capabilities with your stored documents.',
    img: integrationImg,
  },
  {
    title: 'Effortless Organization',
    description: 'Use AI-powered tools to automatically organize your documents, helping you find and manage your files with ease.',
    img: organizationImg,
  },
];

const WhyLifeVault = () => {
  return (
    <div className="p-14 max-w-7xl mx-auto mt-12 bg-blue-100">
      <h2 className="text-4xl font-extrabold text-blue-600 mb-4 text-center">🔒 Why LifeVault? 🔒</h2>
      <p className="text-lg text-blue-700 font-extrabold mb-3 mt-7">
        LifeVault is revolutionizing the way you store, manage, and secure your important documents and memories. Our platform leverages blockchain and AI technologies to provide a comprehensive, secure, and user-friendly solution for all your data needs.
      </p>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-3xl font-semibold text-blue-600 mt-6 mb-4">Key Benefits of LifeVault</h3>
        <ul className="list-disc list-inside text-blue-600 space-y-2">
          <li>Secure Document Storage: Blockchain technology ensures your documents are stored securely and remain private.</li>
          <li>AI-Generated Insights: LifeVault's AI tools provide personalized summaries of your important events, making it easier to manage your memories.</li>
          <li>Data Ownership and Privacy: You have complete control over your data, with customizable privacy settings to manage access.</li>
          <li>Easy Integration: Effortlessly connect with decentralized platforms using Hive Keychain for secure interactions.</li>
          <li>Organized Data Management: Automatically sort and categorize your files for easier access and navigation.</li>
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-3xl font-semibold text-blue-700 mt-6 mb-4">AI and Blockchain in LifeVault</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
              <img src={feature.img} alt={feature.title} className="h-48 w-full object-cover rounded-t-lg mb-4" />
              <h4 className="text-xl font-semibold text-blue-600">{feature.title}</h4>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-3xl font-semibold text-blue-700 mt-6 mb-4">Challenges and Considerations</h3>
        <p className="text-lg text-gray-700 mb-4">
          While LifeVault provides exceptional security and AI-driven features, some challenges include:
        </p>
        <ul className="list-disc list-inside text-blue-600 space-y-2">
          <li>Data Privacy: Ensuring that user data is securely stored and managed within the blockchain network.</li>
          <li>User Adoption: Educating users about blockchain technology to maximize the platform's potential.</li>
          <li>AI Accuracy: Continuously improving AI algorithms to provide precise document categorization and event summaries.</li>
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-3xl font-semibold text-blue-700 mt-6 mb-4">Future Enhancements in LifeVault</h3>
        <p className="text-lg text-gray-700 mb-4">
          We are constantly innovating to provide the best experience for our users. Here's what's in the pipeline:
        </p>
        <ul className="list-disc list-inside text-blue-600 space-y-2">
          <li>Integration with More Blockchains: Expanding our reach to include multiple blockchain networks for enhanced security.</li>
          <li>Advanced AI Capabilities: Implementing machine learning techniques to generate even more personalized insights.</li>
          <li>User-Friendly Enhancements: Continuous improvements to the user interface for an even more seamless experience.</li>
          <li>Data Transparency: Increased transparency for users to track document history and blockchain interactions.</li>
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-3xl font-semibold text-blue-700 mt-6 mb-4">Conclusion</h3>
        <p className="text-lg text-gray-700 mb-4">
          LifeVault is redefining data security and management by integrating the latest blockchain and AI technologies. Our mission is to provide a secure, private, and personalized way to store and organize your essential documents, making sure they are always accessible and protected.
        </p>
      </div>
    </div>
  );
};

export default WhyLifeVault;
