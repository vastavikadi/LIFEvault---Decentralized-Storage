import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer';
import GoTop from './components/GoTop';
import NotFound from './NotFound';
import AboutUs from "./components/AboutUs";
import UseScrollToTop from './components/UseScrollToTop';
import Article from './pages/Article';
import TaskReminder from './components/help/TaskReminder';
import ChatBot from './pages/ChatBot';
import Preloader from "./components/PreLoader";
import ProgressScrollDown from "./components/ProgressScrollDown";
import React, { useState, useEffect } from "react";
import Climate from './components/help/Climate';
import AuthPage from './components/AuthPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import { AuthProvider } from './context/AuthContext';
import TermsAndConditions from './components/TermsAndConditions';
import CookiePolicy from './components/CookiePolicy';
import WhyLifeVault from './pages/WhyLifeVault';
import AIPage from './pages/AIPage';
import DocumentManagement from './pages/DocumentPage';
import Gallery from './pages/Gallery';
import PrivacyPolicy from './pages/Privacy';
import LifeVaultPractices from './pages/BestPractices';
import NewsForum from './components/NewsForum';
import ProfilePage from './pages/Profile';
import { useParams } from 'react-router-dom';

const MainContent = () => {
  UseScrollToTop();
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreloaderVisible(false);
    }, 5000); // Consider replacing with actual loading state if necessary
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isPreloaderVisible ? (
        <Preloader />
      ) : (
        <div>
          <AuthProvider>
            <GoTop />
            <ProgressScrollDown />
            <div>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chatbot" element={<ChatBot />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/article" element={<Article />} />
                <Route path="/taskreminder" element={<TaskReminder />} />
                <Route path="/climate" element={<Climate />} />
                <Route path="/auth-page" element={<AuthPage />} />
                <Route path="/whylifevault" element={<WhyLifeVault />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/practices" element={<LifeVaultPractices />} />
                <Route path="/news" element={<NewsForum />} />
                <Route path="/aipage" element={<AIPage />} />
                <Route path="/documentmanagement" element={<DocumentManagement />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/terms" element={<TermsAndConditions />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </div>
          </AuthProvider>
        </div>
      )}
    </>
  );
};

export default MainContent;