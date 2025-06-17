import React from 'react';
import { Calculator, TrendingUp, Clock, DollarSign, Zap, Target, BarChart } from 'lucide-react';

const EstimateIntroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-gray-800 to-gray-700 text-white px-16 py-6 rounded-2xl shadow-2xl">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Calculator className="w-8 h-8 text-blue-400" />
              簡単見積もり機能
              <Calculator className="w-8 h-8 text-blue-400" />
            </h2>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Image */}
          <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-gray-600">
            <img
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
              alt="見積もり機能のスクリーンショット"
              className="w-full h-80 object-cover"
            />
          </div>

          {/* Description */}
          <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl p-12 text-white shadow-2xl border border-gray-600">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-6 flex items-center justify-center gap-3">
                <Zap className="w-8 h-8 text-yellow-400" />
                説明
                <Zap className="w-8 h-8 text-yellow-400" />
              </h3>
              <p className="text-xl leading-relaxed text-gray-200 max-w-3xl mx-auto">
                プロジェクトの詳細を入力するだけで、即座に概算費用を算出できます。
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm rounded-2xl p-8 text-center border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 transform hover:scale-105">
                <div className="bg-blue-500/20 p-4 rounded-full inline-block mb-4">
                  <Clock className="w-12 h-12 text-blue-300" />
                </div>
                <div className="text-xl font-bold mb-2">即座に算出</div>
                <div className="text-sm text-gray-300 mb-4">リアルタイム見積もり</div>
                <div className="text-xs text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full">
                  最短30秒
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-sm rounded-2xl p-8 text-center border border-green-500/20 hover:border-green-400/40 transition-all duration-300 transform hover:scale-105">
                <div className="bg-green-500/20 p-4 rounded-full inline-block mb-4">
                  <TrendingUp className="w-12 h-12 text-green-300" />
                </div>
                <div className="text-xl font-bold mb-2">精度の高い予算</div>
                <div className="text-sm text-gray-300 mb-4">市場価格に基づく算出</div>
                <div className="text-xs text-green-300 bg-green-500/10 px-3 py-1 rounded-full">
                  95%の精度
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 backdrop-blur-sm rounded-2xl p-8 text-center border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300 transform hover:scale-105">
                <div className="bg-yellow-500/20 p-4 rounded-full inline-block mb-4">
                  <DollarSign className="w-12 h-12 text-yellow-300" />
                </div>
                <div className="text-xl font-bold mb-2">透明な料金体系</div>
                <div className="text-sm text-gray-300 mb-4">隠れた費用なし</div>
                <div className="text-xs text-yellow-300 bg-yellow-500/10 px-3 py-1 rounded-full">
                  完全透明
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-20 py-6 rounded-2xl font-bold text-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:scale-105">
            <span className="flex items-center gap-4">
              <Calculator className="w-6 h-6" />
              見積もりをする
              <TrendingUp className="w-6 h-6" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EstimateIntroSection;