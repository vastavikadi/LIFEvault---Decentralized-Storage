import React, { useState } from "react";
import { BiChevronUp } from 'react-icons/bi';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [faqCount, setFaqCount] = useState(5);

  const faqs = [
    {
        question: "What is LifeVault?",
        answer: "LifeVault is a secure platform that allows users to store and manage important personal documents and memories using blockchain technology, ensuring privacy and data integrity."
    },
    {
        question: "How does LifeVault ensure data security?",
        answer: "LifeVault employs blockchain technology for secure data storage, along with encryption protocols to protect user information from unauthorized access."
    },
    {
        question: "Can I store various types of documents in LifeVault?",
        answer: "Yes, LifeVault allows users to store a variety of documents, including images, videos, certificates, and other important files securely."
    },
    {
        question: "What AI features does LifeVault offer?",
        answer: "LifeVault includes AI-driven features that help summarize important life events, remind users of key moments, and assist in managing their document collections effectively."
    },
    {
        question: "Is there a mobile app for LifeVault?",
        answer: "Currently, LifeVault is a web-based platform, but mobile compatibility is planned for future updates to enhance accessibility."
    },
    {
        question: "How do I access my documents?",
        answer: "Users can access their documents anytime through a secure login process, ensuring that they have full control over their stored data."
    },
    {
        question: "Can I share my documents with others?",
        answer: "Yes, LifeVault allows users to share specific documents with family and friends securely, providing controlled access to important information."
    },
    {
        question: "What happens if I forget my password?",
        answer: "LifeVault uses Hive-Keychain/Signer for login process, so store your HIVE Blockchain Account Password safe."
    },
    {
        question: "How do I get started with LifeVault?",
        answer: "To get started, sign up on the LifeVault platform, complete the onboarding process, and begin uploading your documents and memories."
    },
    {
        question: "Is LifeVault free to use?",
        answer: "LifeVault offers a freemium model, allowing users to access basic features for free, with additional premium features like unlimited storage available through subscription plans."
    }
];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const loadMoreFAQs = () => {
    setFaqCount(prevCount => Math.min(prevCount + 3, faqs.length));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl mb-10 font-bold text-blue-600 text-center">
          Frequently Asked Questions
        </h2>
        <dl className="space-y-4">
          {faqs.slice(0, faqCount).map((faq, index) => (
            <div key={index} className="transition-transform duration-300 group">
              <div className="rounded-lg border-2 border-blue-200 bg-white shadow hover:shadow-lg transition-shadow duration-300">
                <button
                  onClick={() => handleToggle(index)}
                  className="flex justify-between items-center w-full p-4 text-lg font-medium text-blue-700 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg text-white transition-all duration-300 hover:bg-gradient-to-l"
                >
                  <span>{faq.question}</span>
                  <BiChevronUp className={`w-5 h-5 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {activeIndex === index && (
                <div className="mt-2 p-2 rounded-lg bg-blue-50 text-blue-800">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </dl>
        {faqCount < faqs.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMoreFAQs}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-300 hover:bg-blue-700"
            >
              Load More FAQs
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
