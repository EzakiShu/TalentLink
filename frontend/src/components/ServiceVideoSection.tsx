import React from 'react';

const ServiceVideoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#000080] via-[#000080]/90 to-[#000080] relative overflow-hidden">
      {/* Minimal Tech Line Background Pattern - Corner Only */}
      <div className="absolute inset-0 opacity-10">
        {/* Corner Lines Only */}
        <div className="absolute top-0 left-0 w-16 h-px bg-white"></div>
        <div className="absolute top-0 left-0 w-px h-16 bg-white"></div>
        <div className="absolute top-0 right-0 w-16 h-px bg-white"></div>
        <div className="absolute top-0 right-0 w-px h-16 bg-white"></div>
        <div className="absolute bottom-0 left-0 w-16 h-px bg-white"></div>
        <div className="absolute bottom-0 left-0 w-px h-16 bg-white"></div>
        <div className="absolute bottom-0 right-0 w-16 h-px bg-white"></div>
        <div className="absolute bottom-0 right-0 w-px h-16 bg-white"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* YouTube Video Container - Clean Design */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-700 relative">
          {/* Corner Frame Lines Only */}
          <div className="absolute -top-2 -left-2 w-8 h-px bg-white opacity-50"></div>
          <div className="absolute -top-2 -left-2 w-px h-8 bg-white opacity-50"></div>
          <div className="absolute -top-2 -right-2 w-8 h-px bg-white opacity-50"></div>
          <div className="absolute -top-2 -right-2 w-px h-8 bg-white opacity-50"></div>
          <div className="absolute -bottom-2 -left-2 w-8 h-px bg-white opacity-50"></div>
          <div className="absolute -bottom-2 -left-2 w-px h-8 bg-white opacity-50"></div>
          <div className="absolute -bottom-2 -right-2 w-8 h-px bg-white opacity-50"></div>
          <div className="absolute -bottom-2 -right-2 w-px h-8 bg-white opacity-50"></div>
          
          <div className="relative aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Talent Link サービス説明動画"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceVideoSection;