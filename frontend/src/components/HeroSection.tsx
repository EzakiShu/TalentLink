import React from 'react';

interface HeroSectionProps {
  activeTab: 'client' | 'freelancer';
}

const HeroSection: React.FC<HeroSectionProps> = ({ activeTab }) => {
  return (
    <>
      {/* Hero Banner - Adjusted to Image Size (1517x474) */}
      <section className="relative w-full bg-cover bg-center bg-no-repeat overflow-hidden" 
               style={{
                 backgroundImage: `url('/hero-image.png')`,
                 aspectRatio: '1517/474', // Matches the image dimensions
                 minHeight: '474px'
               }}>
        {/* No overlay - clean image display */}
      </section>

      {/* Buttons Section - Below Hero Banner */}
      <section className="py-12 bg-white relative overflow-hidden">
        {/* Minimal Tech Line Background Pattern - Corner Only */}
        <div className="absolute inset-0 opacity-5">
          {/* Corner Lines Only */}
          <div className="absolute top-0 left-0 w-16 h-px bg-[#000080]"></div>
          <div className="absolute top-0 left-0 w-px h-16 bg-[#000080]"></div>
          <div className="absolute top-0 right-0 w-16 h-px bg-[#000080]"></div>
          <div className="absolute top-0 right-0 w-px h-16 bg-[#000080]"></div>
          <div className="absolute bottom-0 left-0 w-16 h-px bg-[#000080]"></div>
          <div className="absolute bottom-0 left-0 w-px h-16 bg-[#000080]"></div>
          <div className="absolute bottom-0 right-0 w-16 h-px bg-[#000080]"></div>
          <div className="absolute bottom-0 right-0 w-px h-16 bg-[#000080]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Main Buttons - Smaller and More Balanced */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-[#000080] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#000080]/80 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[240px]">
                まずは資料をダウンロード
              </button>
              <button className="border-2 border-[#000080] text-[#000080] bg-transparent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#000080] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[240px]">
                お問い合わせ
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;