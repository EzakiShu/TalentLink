import React from 'react';

interface FeaturesSectionProps {
  activeTab: 'client' | 'freelancer';
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ activeTab }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Message - Enhanced with English and Lines */}
        <div className="text-center mb-16 relative">
          {/* Background English Text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <span className="text-8xl font-bold text-gray-300 tracking-widest">TALENT LINK</span>
          </div>
          
          {/* Decorative Lines */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-32"></div>
            <div className="mx-6 w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-32"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight relative z-10">
            タレントリンクなら
          </h2>
          
          {/* English Subtitle */}
          <p className="text-lg text-gray-500 font-medium tracking-wide uppercase mb-6">
            Beyond Crowdsourcing
          </p>
          
          {/* Subtitle */}
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            クラウドソーシングでは、<br />
            カバーできなかったことが可能になる
          </p>
          
          {/* Bottom Line */}
          <div className="mt-8 flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-64"></div>
          </div>
        </div>

        {/* Service Overview - Image Only */}
        <div className="text-center mb-16">
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-xl border border-gray-200">
            <img
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
              alt="Talent Link サービス図解"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;