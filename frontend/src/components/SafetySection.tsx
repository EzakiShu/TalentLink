import React from 'react';
import { Shield, FileText, TrendingUp, Users, Lock, MessageSquare, Award, CheckCircle } from 'lucide-react';

const SafetySection = () => {
  const safetyFeatures = [
    {
      title: 'タレントリンク認定エンジニア',
      description: '厳しい選考基準をクリアした優秀なエンジニアのみが登録。技術力と実績を徹底的に審査しています。',
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: '請負契約',
      description: '明確な契約条件のもと、責任を持ってプロジェクトを完遂。法的な保護も万全です。',
      icon: <FileText className="w-8 h-8" />
    },
    {
      title: '進捗管理',
      description: '専任のプロジェクトマネージャーが進捗を管理し、品質とスケジュールを保証します。',
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: '秘密保持を徹底（NDA契約&本人確認済み）',
      description: 'すべてのエンジニアは本人確認済み。NDA契約により機密情報を厳重に保護します。',
      icon: <Lock className="w-8 h-8" />
    },
    {
      title: '適正価格の取引促進',
      description: '市場価格に基づいた適正な料金設定で、透明性の高い取引を実現しています。',
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: 'オンライン会議・電話連絡も',
      description: 'チャットだけでなく、オンライン会議や電話でのコミュニケーションも可能です。',
      icon: <MessageSquare className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - 3D English Background Design - Fixed Position and Rotation */}
        <div className="text-center mb-20 relative">
          {/* Background English Text - Straight and Higher Position and Blue Tinted */}
          <div className="absolute inset-0 flex items-center justify-center opacity-15 -mt-8">
            <span className="text-7xl font-bold text-blue-400 tracking-widest">SAFETY & SECURITY</span>
          </div>
          
          {/* Decorative Lines */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-[#000080] to-transparent w-32"></div>
            <div className="mx-6 w-2 h-2 bg-[#000080] rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#000080] to-transparent w-32"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4 relative z-10">
            安心・安全にご利用できる取り組み
          </h2>
          
          {/* English Subtitle */}
          <p className="text-lg text-gray-500 font-medium tracking-wide uppercase">
            Safety & Security
          </p>
          
          {/* Bottom Line */}
          <div className="mt-8 flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-64"></div>
          </div>
        </div>

        {/* Safety Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safetyFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 group"
            >
              <div className="space-y-6">
                <div className="bg-[#000080]/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto group-hover:bg-[#000080]/20 transition-colors duration-300">
                  <div className="text-[#000080]">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold leading-tight text-gray-900 group-hover:text-[#000080] transition-colors">
                  {feature.title}
                </h3>
                
                <div className="bg-[#000080]/10 rounded-lg p-3 border border-[#000080]/10">
                  <div className="text-sm font-medium text-[#000080] mb-2 flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    説明
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Feature Badge */}
                <div className="inline-flex items-center gap-2 bg-[#000080]/10 px-4 py-2 rounded-lg text-xs font-medium text-[#000080] border border-[#000080]/10">
                  <Award className="w-3 h-3" />
                  <span>認定済み</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetySection;