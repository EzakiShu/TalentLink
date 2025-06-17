import React from 'react';
import { ArrowRight, Users, Briefcase, Award, Download } from 'lucide-react';

interface HeroSectionProps {
  activeTab: 'client' | 'freelancer';
}

const HeroSection: React.FC<HeroSectionProps> = ({ activeTab }) => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                {activeTab === 'client' ? (
                  <>
                    優秀な<br />
                    <span className="text-yellow-300">エンジニア</span>と<br />
                    プロジェクトを成功させよう
                  </>
                ) : (
                  <>
                    あなたのスキルで<br />
                    <span className="text-yellow-300">理想的な</span><br />
                    プロジェクトを見つけよう
                  </>
                )}
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                {activeTab === 'client'
                  ? 'Talent Linkは、厳選された認定エンジニアとプロジェクトを繋げる、信頼性の高いアウトソーシングプラットフォームです。'
                  : 'Talent Linkで、あなたのスキルと経験を活かせる最適なプロジェクトを見つけて、キャリアを次のレベルへ。'}
              </p>
            </div>

            {/* Stylish Buttons - Main Page White Outline Transparent */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                <Download className="w-5 h-5" />
                まずは資料をダウンロード
              </button>
              <button className="border-2 border-white text-white bg-transparent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl">
                お問い合わせ
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center space-y-2">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8" />
                  </div>
                  <div className="text-2xl font-bold">10,000+</div>
                  <div className="text-sm text-blue-100">登録エンジニア</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <Briefcase className="w-8 h-8" />
                  </div>
                  <div className="text-2xl font-bold">5,000+</div>
                  <div className="text-sm text-blue-100">完了プロジェクト</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-8 h-8" />
                  </div>
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm text-blue-100">満足度</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div className="text-2xl font-bold">24h</div>
                  <div className="text-sm text-blue-100">平均マッチング時間</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;