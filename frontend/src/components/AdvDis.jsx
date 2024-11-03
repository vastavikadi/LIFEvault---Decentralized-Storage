import React from 'react';
import { useNavigate } from 'react-router-dom';
import aiImage from '../assets/lifevault.jpg';

const AdvantagesDisadvantages = () => {
  const navigate = useNavigate();

  const points = [
    "Securely store and manage your important documents using blockchain technology",
    "AI-driven organization to automatically categorize and summarize life events",
    "Seamless Hive Keychain integration for secure blockchain interactions",
    "Complete data ownership with user-controlled privacy and access settings",
    "Real-time updates and tracking of changes to your stored documents",
    "Personalized AI-generated insights on key moments and milestones",
    "Encrypted storage to ensure the highest level of data security",
    "Organized vault for all essential documents, accessible anytime, anywhere",
    "Streamlined document sharing with secure access permissions",
  ];
  

  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-blue-100">
      <h2 className="text-4xl font-extrabold text-blue-700 text-center mb-8">Why LIFEvault?</h2>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center hover:scale-105 transition-transform duration-300">
          <img src={aiImage} alt="AI in Agriculture" className="w-2/4 h-auto rounded-lg shadow-lg" />
        </div>

        {/* Points Section */}
        <div className="md:w-1/2">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transition-shadow duration-500 ease-in-out transform hover:shadow-2xl hover:-translate-y-1">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Points To Consider</h3>
            <ul className="list-disc list-inside text-blue-600 space-y-2">
              {points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            {/* Know More Button */}
            <div className="mt-6">
              <button 
                onClick={() => navigate('/whylifevault')}
                className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesDisadvantages;
