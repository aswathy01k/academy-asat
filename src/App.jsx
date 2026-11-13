import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import HomePage from './pages/HomePage';
import FounderPage from './pages/FounderPage';
import ProgramsPage from './pages/ProgramsPage';
import CommunityPage from './pages/CommunityPage';
import EnquiryPage from './pages/EnquiryPage';
import NotFoundPage from './pages/NotFoundPage';
import { ArrowUp } from 'lucide-react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPreselectedClass, setModalPreselectedClass] = useState('');
  const [modalPreselectedSubject, setModalPreselectedSubject] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const handleOpenEnquiry = () => {
    setModalPreselectedClass('');
    setModalPreselectedSubject('');
    setIsModalOpen(true);
  };

  const handleOpenEnquiryWithProgram = (title, classes) => {
    setModalPreselectedSubject(title);
    setModalPreselectedClass(classes.includes('6 to 8') ? 'Class 7' : classes.includes('9 and 10') ? 'Class 10' : 'Class 11');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800 antialiased selection:bg-brand-blue-500 selection:text-white">
        
        {/* Navigation Bar */}
        <Navbar onOpenEnquiry={handleOpenEnquiry} />

        {/* Main Content Body */}
        <main className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={<HomePage onOpenEnquiryWithProgram={handleOpenEnquiryWithProgram} />} 
            />
            <Route 
              path="/about" 
              element={<HomePage onOpenEnquiryWithProgram={handleOpenEnquiryWithProgram} />} 
            />
            <Route 
              path="/programs" 
              element={<ProgramsPage onOpenEnquiryWithProgram={handleOpenEnquiryWithProgram} />} 
            />
            <Route 
              path="/community" 
              element={<CommunityPage />} 
            />
            <Route 
              path="/founder" 
              element={<FounderPage />} 
            />
            <Route 
              path="/enquiry" 
              element={<EnquiryPage />} 
            />
            <Route 
              path="*" 
              element={<NotFoundPage />} 
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenEnquiry={handleOpenEnquiry} />

        {/* Global Enquiry Modal */}
        <EnquiryModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          preselectedClass={modalPreselectedClass}
          preselectedSubject={modalPreselectedSubject}
        />

        {/* Floating Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-brand-navy-950 text-white shadow-xl hover:bg-brand-blue-600 transition-all duration-200 border border-slate-700/80 hover:scale-105"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

      </div>
    </Router>
  );
}

