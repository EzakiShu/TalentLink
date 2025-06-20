import React, { useState } from 'react';
import { Code2, Menu, X, Download, ChevronDown } from 'lucide-react';

interface HeaderProps {
  activeTab: 'client' | 'freelancer';
  setActiveTab: (tab: 'client' | 'freelancer') => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  const categories = [
    { name: 'システム開発・運用', subcategories: ['Webアプリケーション', 'モバイルアプリ', '業務システム', 'API開発'] },
    { name: 'WEB制作・WEBデザイン', subcategories: ['コーポレートサイト', 'ECサイト', 'LP制作', 'レスポンシブ対応'] },
    { name: 'デザイン制作', subcategories: ['ロゴデザイン', 'チラシ・パンフレット', 'UI/UXデザイン', 'イラスト制作'] },
    { name: '動画編集・制作', subcategories: ['プロモーション動画', '商品紹介動画', 'YouTube編集', 'アニメーション'] }
  ];

  return (
    <>
      {/* Fixed Download Button - Perfect Right Slide Animation with Icon Hide */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="group relative">
          {/* Download Icon Tab - Fades Out on Hover */}
          <div className="bg-[#000080] text-white p-4 rounded-l-lg shadow-lg cursor-pointer transition-all duration-500 group-hover:shadow-xl group-hover:opacity-0">
            <Download className="w-6 h-6" />
          </div>
          
          {/* Sliding Panel - Slides from Right */}
          <div className="absolute right-0 top-0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out">
            <div className="bg-white border border-[#000080]/20 rounded-l-lg shadow-2xl ml-0">
              <div className="p-6 w-64">
                <div className="text-center space-y-4">
                  <div className="bg-[#000080]/10 p-4 rounded-lg">
                    <h3 className="text-lg font-bold text-[#000080] mb-2">資料ダウンロード</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      サービス詳細資料を<br />
                      無料でダウンロード
                    </p>
                  </div>
                  
                  <div className="space-y-2 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>サービス概要</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#000080] rounded-full"></div>
                      <span>料金体系</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>導入事例</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-[#000080] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#000080]/80 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
                    今すぐダウンロード
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-[#000080] to-purple-600 p-2 rounded-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Talent Link</h1>
                <p className="text-xs text-gray-500">タレントリンク</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {/* Tab Navigation */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('client')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === 'client'
                      ? 'bg-white text-[#000080] shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  仕事を依頼したい
                </button>
                <button
                  onClick={() => setActiveTab('freelancer')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === 'freelancer'
                      ? 'bg-white text-[#000080] shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  仕事を受けたい
                </button>
              </div>

              {/* Auth Buttons - Header Blue Style with Increased Spacing */}
              <div className="flex items-center gap-6">
                <button className="text-gray-700 hover:text-[#000080] font-medium transition-colors">
                  ログイン
                </button>
                <button className="bg-[#000080] text-white px-6 py-3 rounded-lg hover:bg-[#000080]/80 transition-all duration-200 font-medium shadow-md hover:shadow-lg">
                  お問い合わせ
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-4 py-4 space-y-4">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => {
                    setActiveTab('client');
                    setIsMenuOpen(false);
                  }}
                  className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === 'client'
                      ? 'bg-white text-[#000080] shadow-sm'
                      : 'text-gray-600'
                  }`}
                >
                  仕事を依頼したい
                </button>
                <button
                  onClick={() => {
                    setActiveTab('freelancer');
                    setIsMenuOpen(false);
                  }}
                  className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === 'freelancer'
                      ? 'bg-white text-[#000080] shadow-sm'
                      : 'text-gray-600'
                  }`}
                >
                  仕事を受けたい
                </button>
              </div>
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-2 text-gray-700 hover:text-[#000080] font-medium">
                  ログイン
                </button>
                <button className="w-full bg-[#000080] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#000080]/80 transition-colors">
                  お問い合わせ
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Secondary Navigation */}
      <div className="bg-white border-b sticky top-16 z-30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 py-3 overflow-x-auto">
            {activeTab === 'client' ? (
              <>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#000080] bg-[#000080]/10 rounded-lg whitespace-nowrap hover:bg-[#000080]/20 transition-colors">
                  認定エンジニア一覧
                </button>
                <div className="relative">
                  <button 
                    onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#000080] whitespace-nowrap transition-colors"
                  >
                    登録案件一覧
                    <ChevronDown className={`w-4 h-4 transition-transform ${isCategoryDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#000080] whitespace-nowrap transition-colors">
                  はじめての方へ
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#000080] whitespace-nowrap transition-colors">
                  簡易見積もり
                </button>
              </>
            ) : (
              <>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#000080] bg-[#000080]/10 rounded-lg whitespace-nowrap hover:bg-[#000080]/20 transition-colors">
                  登録案件一覧
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#000080] whitespace-nowrap transition-colors">
                  はじめての方へ
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#000080] whitespace-nowrap transition-colors">
                  スキル登録
                </button>
              </>
            )}
          </div>
        </div>

        {/* Compact Dropdown Menu with Scroll */}
        {isCategoryDropdownOpen && (
          <div className="absolute top-full left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative">
                <div className="absolute top-2 left-20 bg-white rounded-lg shadow-2xl border border-gray-200 w-80">
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">業種から案件を探す</h3>
                    {/* Scrollable Content */}
                    <div className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                      <div className="space-y-2 pr-2">
                        {categories.map((category, index) => (
                          <div key={index} className="group">
                            <button className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#000080] hover:bg-[#000080]/10 rounded-md transition-colors border border-gray-100 hover:border-[#000080]/20">
                              {category.name}
                            </button>
                            <div className="ml-4 mt-1 space-y-1">
                              {category.subcategories.map((sub, subIndex) => (
                                <button 
                                  key={subIndex}
                                  className="block w-full text-left px-3 py-1 text-xs text-gray-600 hover:text-[#000080] hover:bg-[#000080]/5 rounded-md transition-colors"
                                >
                                  • {sub}
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-200">
                      <button className="w-full bg-[#000080] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#000080]/80 transition-all duration-200 text-sm">
                        すべての案件を見る
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Backdrop for dropdown */}
      {isCategoryDropdownOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black/10"
          onClick={() => setIsCategoryDropdownOpen(false)}
        />
      )}
    </>
  );
};

export default Header;