import React from 'react';
import { Code, Palette, Video, Globe, TrendingUp, Award, ArrowRight } from 'lucide-react';

const ServiceTypesSection = () => {
  const serviceTypes = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'システム開発・運用',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'アプリ開発など',
      price: '300,000円〜',
      features: ['Webアプリ', 'モバイルアプリ', 'API開発']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'WEB制作・WEBデザイン',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'HP作成・LP作成など',
      price: '50,000円〜',
      features: ['コーポレートサイト', 'ECサイト', 'LP制作']
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'デザイン制作',
      image: 'https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'ロゴ・チラシ・イラスト作成など',
      price: '25,000円〜',
      features: ['ロゴデザイン', 'UI/UX', 'イラスト']
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: '動画編集・制作',
      image: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: '動画編集・写真撮影など',
      price: '25,000円〜',
      features: ['プロモーション動画', 'YouTube編集', 'アニメーション']
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - 3D English Background Design - Fixed Straight */}
        <div className="text-center mb-16 relative">
          {/* Background English Text - Straight and Blue Tinted */}
          <div className="absolute inset-0 flex items-center justify-center opacity-15">
            <span className="text-9xl font-bold text-blue-400 tracking-widest">SERVICES</span>
          </div>
          
          {/* Decorative Lines */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-[#000080] to-transparent w-32"></div>
            <div className="mx-6 w-2 h-2 bg-[#000080] rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#000080] to-transparent w-32"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4 relative z-10">
            以下の仕事が受注できます
          </h2>
          
          {/* English Subtitle */}
          <p className="text-lg text-gray-500 font-medium tracking-wide uppercase">
            Available Services
          </p>
          
          {/* Bottom Line */}
          <div className="mt-8 flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-64"></div>
          </div>
        </div>

        {/* Service Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {serviceTypes.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:scale-105 border border-gray-200"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-md">
                  <div className="text-[#000080]">
                    {service.icon}
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-[#000080] text-white px-3 py-1 rounded-lg text-xs font-medium">
                  人気
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#000080] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-[#000080]">
                    {service.price}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <TrendingUp className="w-3 h-3" />
                    <span>需要高</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="border-2 border-[#000080] text-[#000080] bg-transparent px-16 py-6 rounded-lg font-bold text-xl hover:bg-[#000080] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            <span className="flex items-center gap-4">
              まずは無料で会員登録
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceTypesSection;