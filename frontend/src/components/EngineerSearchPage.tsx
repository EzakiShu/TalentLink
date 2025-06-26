import React, { useState, useEffect, useRef } from 'react';
import { Search, Filter, MapPin, Star, Code, Database, Smartphone, Palette, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import Header from './Header';
import WhyChooseSection from './WhyChooseSection';
import QASection from './QASection';
import Footer from './Footer';

interface EngineerSearchPageProps {
  onNavigateToHome?: () => void;
  onNavigateToEngineerDetail?: (engineerId: number) => void;
}

const EngineerSearchPage: React.FC<EngineerSearchPageProps> = ({ onNavigateToHome, onNavigateToEngineerDetail }) => {
  const [activeTab, setActiveTab] = useState<'client' | 'freelancer'>('client');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  // エンジニアグリッドの参照を作成
  const engineersGridRef = useRef<HTMLDivElement>(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const categories = [
    { name: 'エンジニア', icon: <Code className="w-6 h-6" />, count: 245 },
    { name: 'デザイナー', icon: <Palette className="w-6 h-6" />, count: 89 },
    { name: 'WEB制作', icon: <Database className="w-6 h-6" />, count: 156 },
    { name: 'モバイル開発', icon: <Smartphone className="w-6 h-6" />, count: 78 },
  ];

  const skills = [
    'Java', 'React', 'Python', 'Node.js', 'Vue.js', 'Angular', 'PHP', 'Ruby',
    'Swift', 'Kotlin', 'Flutter', 'React Native', 'AWS', 'Docker', 'Kubernetes'
  ];

  const engineers = [
    {
      id: 1,
      name: '田中 太郎',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      title: 'フルスタックエンジニア',
      rating: 4.9,
      reviews: 127,
      hourlyRate: '¥8,000',
      location: '東京都',
      skills: ['React', 'Node.js', 'Python', 'AWS'],
      speciality: 'Web開発',
      description: 'スケーラブルなWebアプリケーション構築が得意です。5年以上の経験を持ち、多数のプロジェクトを成功に導いてきました。',
      experience: '5年',
      projects: 89
    },
    {
      id: 2,
      name: '佐藤 花子',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      title: 'モバイルアプリ開発者',
      rating: 4.8,
      reviews: 95,
      hourlyRate: '¥7,500',
      location: '大阪府',
      skills: ['Flutter', 'React Native', 'iOS', 'Android'],
      speciality: 'モバイル開発',
      description: 'ユーザビリティの高いモバイルアプリ開発を専門としています。直感的なUIと優れたUXの提供を心がけています。',
      experience: '4年',
      projects: 67
    },
    {
      id: 3,
      name: '山田 次郎',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      title: 'データサイエンティスト',
      rating: 5.0,
      reviews: 73,
      hourlyRate: '¥9,500',
      location: '神奈川県',
      skills: ['Python', 'Machine Learning', 'SQL', 'Tableau'],
      speciality: 'データ分析',
      description: 'ビッグデータから価値ある洞察を抽出し、ビジネスの意思決定をサポートします。統計学とAIの専門知識を活用します。',
      experience: '6年',
      projects: 42
    },
    {
      id: 4,
      name: '鈴木 美咲',
      avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      title: 'UI/UXデザイナー',
      rating: 4.9,
      reviews: 156,
      hourlyRate: '¥6,500',
      location: '京都府',
      skills: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator'],
      speciality: 'デザイン',
      description: 'ユーザー中心設計による直感的なUI作成を得意としています。美しさと機能性を両立したデザインを提供します。',
      experience: '7年',
      projects: 134
    },
    {
      id: 5,
      name: '高橋 隆',
      avatar: 'https://images.pexels.com/photos/2182863/pexels-photo-2182863.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      title: 'DevOpsエンジニア',
      rating: 4.8,
      reviews: 84,
      hourlyRate: '¥8,800',
      location: '愛知県',
      skills: ['Docker', 'Kubernetes', 'AWS', 'Jenkins'],
      speciality: 'インフラ',
      description: '自動化とCI/CDパイプライン構築のエキスパートです。効率的な開発環境の構築と運用を支援します。',
      experience: '5年',
      projects: 56
    },
    {
      id: 6,
      name: '中村 恵',
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      title: 'フロントエンドエンジニア',
      rating: 4.9,
      reviews: 112,
      hourlyRate: '¥7,200',
      location: '福岡県',
      skills: ['Vue.js', 'TypeScript', 'SCSS', 'Webpack'],
      speciality: 'フロントエンド',
      description: 'モダンなフロントエンド技術で高速なWebサイト構築を行います。パフォーマンスとユーザビリティを重視します。',
      experience: '4年',
      projects: 78
    },
    {
      id: 7,
      name: '伊藤 健一',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      title: 'バックエンドエンジニア',
      rating: 4.7,
      reviews: 91,
      hourlyRate: '¥8,200',
      location: '北海道',
      skills: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis'],
      speciality: 'サーバーサイド',
      description: '堅牢で拡張性の高いバックエンドシステムの構築を専門としています。大規模システムの設計経験が豊富です。',
      experience: '6年',
      projects: 103
    },
    {
      id: 8,
      name: '渡辺 麻衣',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      title: 'プロダクトデザイナー',
      rating: 4.8,
      reviews: 68,
      hourlyRate: '¥7,800',
      location: '沖縄県',
      skills: ['Sketch', 'Principle', 'InVision', 'Zeplin'],
      speciality: 'プロダクトデザイン',
      description: 'ユーザーのニーズを深く理解し、使いやすく魅力的なプロダクトデザインを提供します。',
      experience: '5年',
      projects: 85
    }
  ];

  const totalPages = Math.ceil(engineers.length / 6);
  const startIndex = (currentPage - 1) * 6;
  const displayedEngineers = engineers.slice(startIndex, startIndex + 6);

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  // ページ変更時の即座スクロール処理
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    
    // エンジニアグリッドの位置に即座にスクロール
    if (engineersGridRef.current) {
      const elementTop = engineersGridRef.current.offsetTop;
      const offset = 120; // ヘッダーの高さ + 余白
      window.scrollTo({
        top: elementTop - offset,
        behavior: 'auto' // 即座にスクロール
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        onNavigateToSearch={() => {}} // Already on search page
      />
      
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-[#000080] to-purple-600 py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-6">
            <button
              onClick={onNavigateToHome}
              className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              トップページに戻る
            </button>
          </div>
          
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">認定エンジニアを探す</h1>
            <p className="text-xl opacity-90">あなたのプロジェクトに最適なエンジニアを見つけましょう</p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">検索フィールド（フリー）</h2>
            
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="スキル、職種、キーワードで検索..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#000080] focus:border-[#000080] text-lg"
              />
            </div>

            {/* Skills Filter */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">スキルで絞り込み</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => toggleSkill(skill)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedSkills.includes(skill)
                        ? 'bg-[#000080] text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:border-[#000080] hover:text-[#000080]'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <button className="bg-[#000080] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#000080]/80 transition-colors flex items-center gap-2">
                <Filter className="w-5 h-5" />
                検索する
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {/* Sidebar - Categories */}
            <div className="w-80 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">職種で探す</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full flex items-center gap-3 p-4 rounded-lg text-left transition-all duration-200 ${
                        selectedCategory === category.name
                          ? 'bg-[#000080] text-white'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className={selectedCategory === category.name ? 'text-white' : 'text-[#000080]'}>
                        {category.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{category.name}</div>
                        <div className={`text-sm ${selectedCategory === category.name ? 'text-blue-200' : 'text-gray-500'}`}>
                          {category.count}人
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Engineers Grid */}
            <div className="flex-1">
              {/* エンジニアグリッドの参照を設定 */}
              <div ref={engineersGridRef} className="grid md:grid-cols-2 gap-6 mb-8">
                {displayedEngineers.map((engineer) => (
                  <div
                    key={engineer.id}
                    className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
                  >
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="relative">
                          <img
                            src={engineer.avatar}
                            alt={engineer.name}
                            className="w-16 h-16 rounded-lg object-cover border-4 border-gray-100 group-hover:border-[#000080]/20 transition-colors duration-300"
                          />
                          <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{engineer.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{engineer.title}</p>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="text-sm font-medium text-gray-700">{engineer.rating}</span>
                              <span className="text-sm text-gray-500">({engineer.reviews})</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-[#000080]">{engineer.hourlyRate}/時</div>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <MapPin className="w-4 h-4" />
                            <span>{engineer.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-gradient-to-r from-[#000080]/10 to-purple-50 p-4 rounded-lg border border-[#000080]/10">
                          <div className="text-sm font-medium text-[#000080] mb-2">自己紹介</div>
                          <p className="text-sm text-gray-700 leading-relaxed mb-2">{engineer.description}</p>
                          <button 
                            onClick={() => onNavigateToEngineerDetail?.(engineer.id)}
                            className="text-sm text-[#000080] font-medium hover:underline"
                          >
                            続きを読む（リンク）→詳細ページに遷移する
                          </button>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {engineer.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-[#000080]/10 text-[#000080] text-xs rounded-md font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        <button 
                          onClick={() => onNavigateToEngineerDetail?.(engineer.id)}
                          className="w-full bg-[#000080] text-white py-3 px-4 rounded-lg hover:bg-[#000080]/80 transition-colors duration-200 font-medium"
                        >
                          この人に仕事を相談する
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mb-8">
                <button
                  onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      currentPage === page
                        ? 'bg-[#000080] text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Results Info */}
              <div className="text-center text-gray-600 mb-8">
                <p className="text-lg">1画面で「5人〜10人分」表示予定</p>
                <p className="text-sm">現在 {startIndex + 1}-{Math.min(startIndex + 6, engineers.length)} 人目を表示中（全 {engineers.length} 人）</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <WhyChooseSection />

      {/* Q&A Section */}
      <QASection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EngineerSearchPage;