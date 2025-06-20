import React from 'react';
import { ArrowRight, Send, MessageCircle, Package } from 'lucide-react';

const ThreeStepsSection = () => {
  const steps = [
    {
      number: 'STEP1',
      title: '仕事を発注する',
      description: 'プロジェクトの詳細を入力して、最適なエンジニアを見つけましょう。',
      icon: <Send className="w-8 h-8" />,
      color: 'from-[#000080] to-[#000080]/80'
    },
    {
      number: 'STEP2',
      title: 'お打ち合わせ',
      description: '要件定義から設計まで、詳細な打ち合わせを行います。',
      icon: <MessageCircle className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-700'
    },
    {
      number: 'STEP3',
      title: '納品を待つ',
      description: '品質チェックを経て、完成したプロダクトをお届けします。',
      icon: <Package className="w-8 h-8" />,
      color: 'from-green-500 to-green-700'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - 3D English Background Design */}
        <div className="text-center mb-20 relative">
          {/* Background English Text - Blue Tinted */}
          <div className="absolute inset-0 flex items-center justify-center opacity-15">
            <span className="text-8xl font-bold text-blue-400 tracking-widest transform -rotate-2">3 STEPS</span>
          </div>
          
          {/* Decorative Lines */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-[#000080] to-transparent w-32"></div>
            <div className="mx-6 w-2 h-2 bg-[#000080] rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#000080] to-transparent w-32"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4 relative z-10">
            登録から納品までの3ステップ
          </h2>
          
          {/* English Subtitle */}
          <p className="text-lg text-gray-500 font-medium tracking-wide uppercase">
            Simple Process
          </p>
          
          {/* Bottom Line */}
          <div className="mt-8 flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-64"></div>
          </div>
        </div>

        {/* Circular Steps Flow */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 mb-20">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Step Circle */}
              <div className="relative group">
                <div className={`w-80 h-80 bg-gradient-to-br ${step.color} rounded-full flex flex-col items-center justify-center text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full animate-pulse"></div>
                    <div className="absolute bottom-8 left-8 w-12 h-12 bg-white rounded-full animate-bounce delay-1000"></div>
                  </div>
                  
                  <div className="relative z-10 text-center space-y-4 px-6">
                    <div className="text-xl font-bold tracking-wider opacity-80">
                      {step.number}
                    </div>
                    <div className="text-xl font-bold leading-tight">
                      {step.title}
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-white/30 transition-colors">
                      {step.icon}
                    </div>
                    <div className="text-sm leading-relaxed opacity-90 px-2">
                      {step.description}
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block">
                  <div className="bg-white rounded-lg p-4 shadow-lg">
                    <ArrowRight className="w-16 h-16 text-gray-600" />
                  </div>
                </div>
              )}
              
              {/* Mobile Arrow */}
              {index < steps.length - 1 && (
                <div className="lg:hidden">
                  <div className="bg-white rounded-lg p-3 shadow-lg rotate-90">
                    <ArrowRight className="w-12 h-12 text-gray-600" />
                  </div>
                </div>
              )}
            </React.Fragment>
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

export default ThreeStepsSection;