import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage from '../assets/hero.png';
import Features from '../components/Features';
import About from './About';
import Showcase from '../components/Showcase';
import TestimonialSlider from '../components/TestimonialSlider';
import FAQ from '../components/FAQ';
import AdvantagesDisadvantages from '../components/AdvDis';
import { FaComment } from "react-icons/fa";
import "../styles/ChatbotButton.css";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-r from-blue-50 to-blue-100">
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-4 md:py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 -mt-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-blue-900 sm:text-5xl md:text-6xl pt-48">
            <span className="block">Welcome to LIFEvault</span>
            <span className="block text-blue-600">Extra Layer of Protection</span>
          </h1>
          <p className="max-w-md mx-auto mt-3 text-base text-blue-800 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Unlock the Future: Empower Yourself with Hive Blockchain and Decentralized Storage. Take back control, one secure step at a time. 🚀💼
          </p>
          <div className="mt-10 sm:flex sm:justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-md shadow"
            >
              <Link
                to="#"
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
              >
                Explore Now
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Fixed message icon with tooltip */}
        <div className="relative">
          <Link to="/chatbot" className="group fixed bottom-4 right-20 bg-blue-500 rounded-full p-3 shadow-lg transition-transform transform hover:scale-110">
            <FaComment className="text-white text-3xl" />
            <span className="absolute -top-10 -right-4 bg-white text-blue-500 text-sm rounded-md px-2 py-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Try Our ChatBot
            </span>
          </Link>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20"
        >
          <img
            src={heroImage}
            alt="Lifevault Hero"
            width={600}
            height={400}
            className="object-cover rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-blue-700 text-center">How It Works ?</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-b from-blue-100 to-blue-200 p-6 rounded-lg text-center z-10 shadow-2xl"
            >
              <h3 className="text-xl font-semibold text-blue-700">Data Collection & Control</h3>
              <p className="mt-4 text-blue-600">
              Your data is first encrypted and collected securely from your devices. You can access your data anytime, anywhere. Hive Blockchain ensures that you are the sole owner of your information, providing you with unparalleled control and privacy.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-b from-blue-100 to-blue-200 p-6 rounded-lg text-center z-10 shadow-2xl"
            >
              <h3 className="text-xl font-semibold text-blue-700">Blockchain Integration</h3>
              <p className="mt-4 text-blue-600">
              Using Hive Blockchain, each transaction is verified by a network of nodes, ensuring that every piece of information is tamper-proof.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-b from-blue-100 to-blue-200 p-6 rounded-lg text-center z-10 shadow-2xl"
            >
              <h3 className="text-xl font-semibold text-blue-700">Decentralized Storage</h3>
              <p className="mt-4 text-blue-600">
              Instead of relying on centralized servers, your data is distributed across a network of secure, decentralized storage locations. This guarantees that only you have access, significantly reducing the risk of data breaches.
              </p>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Additional Components */}
      <Features />
      <About />
      <Showcase />
      {/* Advantages and Disadvantages of AI in Agriculture */}
      <AdvantagesDisadvantages />
      <TestimonialSlider />
      <FAQ />
    </div>
  );
}
