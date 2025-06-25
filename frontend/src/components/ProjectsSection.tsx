import React from 'react';
import { Calendar, DollarSign, Users, Clock, MapPin, Tag } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'ECサイトのフロントエンド開発',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      company: '株式会社テックコマース',
      budget: '¥800,000 - ¥1,200,000',
      duration: '3-4ヶ月',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
      type: '長期',
      remote: 'リモート可',
      posted: '2日前',
      applicants: 12,
      description: 'BtoC向けECサイトのフロントエンド全面リニューアルプロジェクト。ユーザビリティとパフォーマンスの向上を目指します。',
      urgent: false
    },
    {
      id: 2,
      title: 'AIチャットボット開発',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      company: '株式会社スマートソリューション',
      budget: '¥1,500,000 - ¥2,000,000',
      duration: '4-6ヶ月',
      skills: ['Python', 'TensorFlow', 'NLP', 'FastAPI'],
      type: '長期',
      remote: 'フルリモート',
      posted: '1日前',
      applicants: 8,
      description: 'カスタマーサポート向けAIチャットボットの開発。自然言語処理技術を活用した高度な対話システムを構築します。',
      urgent: true
    },
    {
      id: 3,
      title: 'モバイルアプリUI/UXリデザイン',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      company: 'デジタルクリエイト株式会社',
      budget: '¥500,000 - ¥700,000',
      duration: '2-3ヶ月',
      skills: ['Figma', 'Adobe XD', 'UI/UX', 'プロトタイピング'],
      type: '中期',
      remote: 'ハイブリッド',
      posted: '3日前',
      applicants: 15,
      description: 'フィットネスアプリのUI/UXを全面的にリデザイン。ユーザーエンゲージメント向上を目指したモダンなデザインを求めます。',
      urgent: false
    },
    {
      id: 4,
      title: 'データ分析基盤構築',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      company: '株式会社データドリブン',
      budget: '¥1,200,000 - ¥1,800,000',
      duration: '3-5ヶ月',
      skills: ['Python', 'SQL', 'AWS', 'Tableau'],
      type: '長期',
      remote: 'リモート可',
      posted: '5日前',
      applicants: 6,
      description: 'ビッグデータ処理とリアルタイム分析を可能にするデータ基盤の構築。スケーラブルなアーキテクチャ設計が求められます。',
      urgent: false
    },
    {
      id: 5,
      title: 'ブロックチェーンDApp開発',
      image: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=800',
      company: '株式会社クリプトイノベーション',
      budget: '¥2,000,000 - ¥3,000,000',
      duration: '6-8ヶ月',
      skills: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      type: '長期',
      remote: 'フルリモート',
      posted: '1週間前',
      applicants: 4,
      description: 'DeFiプロトコルのフロントエンドとスマートコントラクト開発。最新のブロックチェーン技術を活用したプロジェクトです。',
      urgent: true
    },
    {
      id: 6,
      title: 'レガシーシステム刷新',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      company: '製造業コンサルティング株式会社',
      budget: '¥1,000,000 - ¥1,500,000',
      duration: '4-6ヶ月',
      skills: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
      type: '長期',
      remote: '一部出社',
      posted: '4日前',
      applicants: 9,
      description: '製造業向け基幹システムのモダナイゼーション。既存システムからの段階的移行を計画しています。',
      urgent: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - 3D English Background Design */}
        <div className="text-center mb-16 relative">
          {/* Background English Text - Blue Tinted */}
          <div className="absolute inset-0 flex items-center justify-center opacity-15">
            <span className="text-8xl font-bold text-blue-400 tracking-widest transform rotate-2">PROJECTS</span>
          </div>
          
          {/* Decorative Lines */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-[#000080] to-transparent w-32"></div>
            <div className="mx-6 w-2 h-2 bg-[#000080] rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#000080] to-transparent w-32"></div>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 relative z-10">
            最新プロジェクト案件
          </h2>
          
          {/* English Subtitle */}
          <p className="text-lg text-gray-500 font-medium tracking-wide uppercase mb-4">
            Latest Projects
          </p>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            あなたのスキルを活かせる多様なプロジェクトが見つかります。理想的な案件で次のキャリアステップを踏み出しましょう。
          </p>
          
          {/* Bottom Line */}
          <div className="mt-8 flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-64"></div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                    project.urgent 
                      ? 'bg-red-100 text-red-600' 
                      : 'bg-[#000080]/10 text-[#000080]'
                  }`}>
                    {project.urgent ? '急募' : project.type}
                  </span>
                  <span className="px-3 py-1 bg-white/90 text-gray-700 rounded-lg text-xs font-medium">
                    {project.remote}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#000080] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{project.company}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <DollarSign className="w-4 h-4" />
                      <span className="font-medium text-green-600">{project.budget}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded-md font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{project.posted}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{project.applicants}人応募</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-[#000080] text-white py-3 px-4 rounded-lg hover:bg-[#000080]/80 transition-colors duration-200 font-medium">
                    詳細を見る
                  </button>
                  <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium">
                    保存
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-[#000080] to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-[#000080]/80 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
            すべての案件を見る
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;