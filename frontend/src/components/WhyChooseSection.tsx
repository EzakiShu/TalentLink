import React from 'react';
import { Shield, Users, DollarSign, Award, TrendingUp, ArrowRight } from 'lucide-react';

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#000080] via-[#000080]/90 to-purple-700 relative overflow-hidden">
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
        {/* Section Header - Clean Design */}
        <div className="text-center mb-16 relative">
          {/* Background English Text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <span className="text-8xl font-bold text-white tracking-widest">WHY CHOOSE US</span>
          </div>
          
          {/* Simple Decorations */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent w-32"></div>
            <div className="mx-6 w-2 h-2 bg-white rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent w-32"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 relative z-10">
            タレントリンクを選ぶ理由
          </h2>
          
          {/* English Subtitle */}
          <p className="text-lg text-blue-200 font-medium tracking-wide uppercase">
            Why Choose Talent Link
          </p>
          
          {/* Bottom Line */}
          <div className="mt-8 flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent w-64"></div>
          </div>
        </div>

        {/* Non-Card Design - Flow Layout with Corner Frames Only */}
        <div className="text-center text-white space-y-20">
          {/* Reason 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="高品質なエンジニア"
                className="w-full h-80 object-cover rounded-lg shadow-2xl"
              />
              {/* Corner Frame Lines Only */}
              <div className="absolute -top-2 -left-2 w-6 h-px bg-white"></div>
              <div className="absolute -top-2 -left-2 w-px h-6 bg-white"></div>
              <div className="absolute -top-2 -right-2 w-6 h-px bg-white"></div>
              <div className="absolute -top-2 -right-2 w-px h-6 bg-white"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-px bg-white"></div>
              <div className="absolute -bottom-2 -left-2 w-px h-6 bg-white"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-px bg-white"></div>
              <div className="absolute -bottom-2 -right-2 w-px h-6 bg-white"></div>
            </div>
            <div className="lg:w-1/2 text-left lg:text-left">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-4 rounded-lg border border-white/20">
                  <Shield className="w-12 h-12 text-blue-200" />
                </div>
                <h3 className="text-4xl font-bold">高いレベルの技術者しか登録できない</h3>
              </div>
              <div className="flex items-center gap-3 text-blue-200 mb-6">
                <Award className="w-6 h-6" />
                <p className="text-2xl font-semibold">厳しい選考を受けている</p>
              </div>
              <div className="flex gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-px bg-green-400"></div>
                  <span>技術審査</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-px bg-blue-400"></div>
                  <span>実績審査</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-px bg-purple-400"></div>
                  <span>人格審査</span>
                </div>
              </div>
            </div>
          </div>

          {/* Reason 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2 relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="プロジェクト管理"
                className="w-full h-80 object-cover rounded-lg shadow-2xl"
              />
              {/* Corner Frame Lines Only */}
              <div className="absolute -top-2 -left-2 w-6 h-px bg-white"></div>
              <div className="absolute -top-2 -left-2 w-px h-6 bg-white"></div>
              <div className="absolute -top-2 -right-2 w-6 h-px bg-white"></div>
              <div className="absolute -top-2 -right-2 w-px h-6 bg-white"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-px bg-white"></div>
              <div className="absolute -bottom-2 -left-2 w-px h-6 bg-white"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-px bg-white"></div>
              <div className="absolute -bottom-2 -right-2 w-px h-6 bg-white"></div>
            </div>
            <div className="lg:w-1/2 text-left lg:text-left">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-500/20 p-4 rounded-lg border border-white/20">
                  <Users className="w-12 h-12 text-green-300" />
                </div>
                <h3 className="text-4xl font-bold leading-tight">請負開発と進捗管理を行い、納品までしっかり責任を持って対応するため安心</h3>
              </div>
              <div className="flex items-center gap-3 text-green-300 mb-6">
                <Award className="w-6 h-6" />
                <p className="text-xl font-semibold">専任マネージャーによる徹底サポート</p>
              </div>
              <div className="flex gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>進捗管理</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>品質保証</span>
                </div>
              </div>
            </div>
          </div>

          {/* Reason 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="コスト効率"
                className="w-full h-80 object-cover rounded-lg shadow-2xl"
              />
              {/* Corner Frame Lines Only */}
              <div className="absolute -top-2 -left-2 w-6 h-px bg-white"></div>
              <div className="absolute -top-2 -left-2 w-px h-6 bg-white"></div>
              <div className="absolute -top-2 -right-2 w-6 h-px bg-white"></div>
              <div className="absolute -top-2 -right-2 w-px h-6 bg-white"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-px bg-white"></div>
              <div className="absolute -bottom-2 -left-2 w-px h-6 bg-white"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-px bg-white"></div>
              <div className="absolute -bottom-2 -right-2 w-px h-6 bg-white"></div>
            </div>
            <div className="lg:w-1/2 text-left lg:text-left">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-yellow-500/20 p-4 rounded-lg border border-white/20">
                  <DollarSign className="w-12 h-12 text-yellow-300" />
                </div>
                <h3 className="text-4xl font-bold">発注価格はご予算に合わせて</h3>
              </div>
              <div className="flex items-center gap-3 text-yellow-300 mb-6">
                <Award className="w-6 h-6" />
                <p className="text-2xl font-semibold">登録に手数料もかかりません</p>
              </div>
              <div className="flex gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-px bg-green-400"></div>
                  <span>透明な料金</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-px bg-blue-400"></div>
                  <span>手数料無料</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button - White Outline Transparent */}
        <div className="text-center mt-20">
          <button className="border-2 border-white text-white bg-transparent px-16 py-6 rounded-lg font-bold text-xl hover:bg-white hover:text-[#000080] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
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

export default WhyChooseSection;