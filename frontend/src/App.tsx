import React, { useState } from 'react';
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

function App() {
  const [activeTab, setActiveTab] = useState<'client' | 'freelancer'>('client');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <HeroSection activeTab={activeTab} />
      <ServiceTypesSection />
      <FeaturesSection activeTab={activeTab} />
      {activeTab === 'client' ? (
        <>
          <EngineersSection />
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