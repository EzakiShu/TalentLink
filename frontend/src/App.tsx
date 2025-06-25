import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServiceTypesSection from './components/ServiceTypesSection';
import FeaturesSection from './components/FeaturesSection';
import ProjectsSection from './components/ProjectsSection';
import EngineersSection from './components/EngineersSection';
import WhyChooseSection from './components/WhyChooseSection';
import ThreeStepsSection from './components/ThreeStepsSection';
import ServiceVideoSection from './components/ServiceVideoSection';
import SafetySection from './components/SafetySection';
import QASection from './components/QASection';
import Footer from './components/Footer';
import EngineerSearchPage from './components/EngineerSearchPage';
import EngineerDetailPage from './components/EngineerDetailPage';

function App() {
  const [activeTab, setActiveTab] = useState<'client' | 'freelancer'>('client');
  const [currentPage, setCurrentPage] = useState<'home' | 'engineer-search' | 'engineer-detail'>('home');
  const [selectedEngineerId, setSelectedEngineerId] = useState<number | null>(null);

  const handleNavigateToSearch = () => {
    setCurrentPage('engineer-search');
  };

  const handleNavigateToHome = () => {
    setCurrentPage('home');
  };

  const handleNavigateToEngineerDetail = (engineerId: number) => {
    setSelectedEngineerId(engineerId);
    setCurrentPage('engineer-detail');
  };

  const handleNavigateBackFromDetail = () => {
    setCurrentPage('engineer-search');
  };

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Engineer Detail Page
  if (currentPage === 'engineer-detail' && selectedEngineerId) {
    return (
      <EngineerDetailPage 
        engineerId={selectedEngineerId}
        onNavigateBack={handleNavigateBackFromDetail}
      />
    );
  }

  // Engineer Search Page
  if (currentPage === 'engineer-search') {
    return (
      <EngineerSearchPage 
        onNavigateToHome={handleNavigateToHome}
        onNavigateToEngineerDetail={handleNavigateToEngineerDetail}
      />
    );
  }

  // Home Page
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onNavigateToSearch={handleNavigateToSearch}
      />
      <HeroSection activeTab={activeTab} />
      <ServiceTypesSection />
      <FeaturesSection activeTab={activeTab} />
      {activeTab === 'client' ? (
        <>
          <EngineersSection 
            onNavigateToSearch={handleNavigateToSearch}
            onNavigateToEngineerDetail={handleNavigateToEngineerDetail}
          />
          <WhyChooseSection />
          <ThreeStepsSection />
          <ServiceVideoSection />
          <SafetySection />
          <QASection />
        </>
      ) : (
        <ProjectsSection />
      )}
      <Footer />
    </div>
  );
}

export default App;