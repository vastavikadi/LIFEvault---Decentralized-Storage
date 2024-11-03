import React from 'react';
import { motion } from 'framer-motion';
import dataCollectionImg from '../assets/data_ownership.jpg';
import decentralizedStorageImg from '../assets/organization.jpg'; 
import blockchainSecurityImg from '../assets/blockchain.jpg'; 
import privacyControlImg from '../assets/security.jpg'; 

const lifeVaultPractices = [
    {
      title: 'Best Practices for Secure Data Collection',
      description: 'Secure data collection ensures that all information gathered from devices is protected and only accessible by you. LifeVault utilizes advanced encryption and secure channels to guarantee data privacy and integrity.',
      img: dataCollectionImg,
      subtopics: [
        {
          subtitle: '1. End-to-End Encryption',
          details: 'Data is encrypted both during transmission and storage, ensuring that only you can access it. LifeVault employs robust encryption algorithms to prevent unauthorized access.',
        },
        {
          subtitle: '2. Secure Access Points',
          details: 'Only verified devices and users can collect or access data, reducing risks of unauthorized access. Multi-factor authentication further strengthens access points.',
        },
        {
          subtitle: '3. Data Minimization',
          details: 'Collect only essential data to enhance privacy. By minimizing data collected, LifeVault reduces exposure to potential threats while focusing on valuable information.',
        },
        {
          subtitle: '4. User-Controlled Data Access',
          details: 'LifeVault allows you to decide who has access to your data, providing fine-grained control over what is shared and ensuring full ownership.',
        },
      ],
    },
    {
      title: 'Decentralized Storage Techniques',
      description: 'LifeVault leverages decentralized storage to distribute data across a secure network, minimizing risks of centralized failures and unauthorized access.',
      img: decentralizedStorageImg,
      subtopics: [
        {
          subtitle: '1. Distributed Storage Nodes',
          details: 'Data is stored across multiple nodes, each with redundant copies, ensuring data availability and reducing dependence on a single storage source.',
        },
        {
          subtitle: '2. Redundant Backup Systems',
          details: 'LifeVault employs redundant backups, storing multiple copies across locations. This protects against data loss due to node failures or physical damage.',
        },
        {
          subtitle: '3. Controlled Access to Nodes',
          details: 'Only authorized users can retrieve data from nodes, with encryption preventing data tampering during transfer and storage.',
        },
        {
          subtitle: '4. Data Sharding and Hashing',
          details: 'Data is divided into smaller shards and assigned unique hashes, enhancing privacy by ensuring no single node has the entire dataset.',
        },
      ],
    },
    {
      title: 'Blockchain Security Enhancements',
      description: 'Blockchain technology adds a layer of security and transparency to data transactions. Every data action is verified across the network, ensuring tamper-proof records.',
      img: blockchainSecurityImg,
      subtopics: [
        {
          subtitle: '1. Immutable Ledger',
          details: 'All actions are permanently recorded on the blockchain, ensuring transparency and making it impossible to alter data without detection.',
        },
        {
          subtitle: '2. Node Verification',
          details: 'Transactions are validated by multiple nodes, adding an extra layer of security against fraudulent activities or unauthorized modifications.',
        },
        {
          subtitle: '3. Decentralized Ownership',
          details: 'Data ownership is decentralized, ensuring that no single entity controls all data, thereby reducing risks of misuse or unauthorized access.',
        },
        {
          subtitle: '4. Enhanced Auditing Capabilities',
          details: 'Blockchain’s transparent ledger allows users to audit their data history, ensuring a clear record of access and modifications.',
        },
      ],
    },
    {
      title: 'Privacy and Data Control',
      description: 'Privacy is central to LifeVault’s mission. Through advanced data control features, you have complete autonomy over what is collected, stored, and shared.',
      img: privacyControlImg,
      subtopics: [
        {
          subtitle: '1. Personal Data Vault',
          details: 'LifeVault provides a personal data vault where only the owner has access, ensuring absolute privacy and control over sensitive information.',
        },
        {
          subtitle: '2. Consent-Based Sharing',
          details: 'Users can manage data-sharing preferences, ensuring no data is shared without explicit consent, enhancing privacy and user control.',
        },
        {
          subtitle: '3. Access Logs and Monitoring',
          details: 'Monitor and log access requests to your data, keeping a clear record of who accessed what and when, further strengthening data control.',
        },
        {
          subtitle: '4. Regular Security Audits',
          details: 'LifeVault performs regular audits and updates to its security protocols to stay ahead of emerging threats, maintaining the highest level of privacy protection.',
        },
      ],
    },
];

const LifeVaultPractices = () => {
  return (
    <div className="p-14 mx-auto mt-12 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200">
      <motion.h2 
        className="text-5xl font-extrabold text-blue-700 mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        🔐 Best Practices for Secure Data Management in LifeVault 🔐
      </motion.h2>

      <p className="text-lg text-blue-600 font-medium mb-12 text-center">
        LifeVault combines advanced data encryption, decentralized storage, and blockchain verification to provide unparalleled privacy and data control. Explore the best practices that ensure your information remains secure and fully controlled by you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {lifeVaultPractices.map((practice, index) => (
          <motion.div 
            key={index} 
            className="bg-white shadow-xl rounded-lg p-8 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2, ease: "easeOut" }}
          >
            <motion.img 
              src={practice.img} 
              alt={practice.title} 
              className="h-64 w-full rounded-lg mb-4 hover:opacity-80 transition-opacity duration-500"
              whileHover={{ scale: 1 }}
            />
            <h3 className="text-3xl font-semibold text-blue-700 mb-4">{practice.title}</h3>
            <p className="text-lg text-gray-600 mb-4">{practice.description}</p>
            
            <motion.div 
              className="space-y-6" 
              initial="hidden" 
              animate="visible" 
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ staggerChildren: 0.2 }}
            >
              {practice.subtopics.map((subtopic, subIndex) => (
                <motion.div 
                  key={subIndex} 
                  className="group relative"
                  whileHover={{ x: 10 }}
                  transition={{ ease: "easeOut", duration: 0.3 }}
                >
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">{subtopic.subtitle}</h4>
                  <p className="text-gray-600 group-hover:text-blue-700 transition-colors duration-300">{subtopic.details}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LifeVaultPractices;