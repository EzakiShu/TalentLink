import React, { useState, useEffect } from 'react';
import { ArrowLeft, Star, MapPin, Shield, CheckCircle, Award, Calendar, Clock, User, FileText } from 'lucide-react';
import Header from './Header';
import QASection from './QASection';
import Footer from './Footer';

interface EngineerDetailPageProps {
  engineerId: number;
  onNavigateBack?: () => void;
}

const EngineerDetailPage: React.FC<EngineerDetailPageProps> = ({ engineerId, onNavigateBack }) => {
  const [activeTab, setActiveTab] = useState<'client' | 'freelancer'>('client');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Sample engineer data - in real app, this would be fetched based on engineerId
  const engineer = {
    id: engineerId,
    name: '田中 太郎',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    title: 'フルスタックエンジニア',
    age: 32,
    location: '東京都',
    rating: 4.9,
    reviews: 127,
    hourlyRate: '¥8,000',
    experience: '5年',
    projects: 89,
    verified: true,
    ndaSigned: true,
    skills: [
      { name: 'JavaScript', level: 'A' },
      { name: 'React', level: 'A' },
      { name: 'Node.js', level: 'B' },
      { name: 'Python', level: 'B' },
      { name: 'AWS', level: 'C' },
      { name: 'Docker', level: 'B' }
    ],
    qualifications: [
      'AWS認定ソリューションアーキテクト',
      '基本情報技術者試験',
      'TOEIC 850点',
      'Google Cloud Professional'
    ],
    portfolio: [
      {
        title: 'ECサイト構築プロジェクト',
        description: 'React + Node.jsを使用したフルスタック開発',
        image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        link: '#'
      },
      {
        title: 'モバイルアプリ開発',
        description: 'React Nativeによるクロスプラットフォーム開発',
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        link: '#'
      },
      {
        title: 'データ分析ダッシュボード',
        description: 'Python + Djangoによるデータ可視化システム',
        image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        link: '#'
      }
    ],
    introduction: `スケーラブルなWebアプリケーション構築が得意です。5年以上の経験を持ち、多数のプロジェクトを成功に導いてきました。

【経歴】
• ナレーション（2020年7月〜）
長期案件を中心に、スカッとする話や感動する話などを担当
→2025年現在は、作業スケジュールの関係上、
単発・短期案件を中心に承っております。

【稼働時間】
基本的に平日の午前〜夕方までの時間に業務を行っております。`,
    workingHours: '平日 9:00-18:00（応相談）'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        onNavigateToSearch={() => {}} // Not used on detail page
      />
      
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-[#000080] to-purple-600 py-12">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-6">
            <button
              onClick={onNavigateBack}
              className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              エンジニア一覧に戻る
            </button>
          </div>
          
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">認定エンジニア プロフィール</h1>
            <p className="text-xl opacity-90">詳細情報とポートフォリオ</p>
          </div>
        </div>
      </section>

      {/* Main Profile Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Header */}
          <div className="bg-gray-100 rounded-lg p-8 mb-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={engineer.avatar}
                    alt={engineer.name}
                    className="w-40 h-40 rounded-lg object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white"></div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{engineer.name}</h2>
                    <p className="text-xl text-gray-600 mb-4">{engineer.title}</p>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex items-center gap-2">
                        <User className="w-5 h-5 text-gray-500" />
                        <span>{engineer.age}歳・{engineer.location}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Shield className="w-5 h-5 text-green-600" />
                          <span className="text-green-600 font-medium">本人確認済み</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FileText className="w-5 h-5 text-blue-600" />
                          <span className="text-blue-600 font-medium">NDA契約済み</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex-shrink-0">
                    <button className="bg-[#000080] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#000080]/80 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                      この人に仕事を相談する
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-lg font-bold text-gray-900">{engineer.rating}</span>
                    </div>
                    <div className="text-sm text-gray-600">評価 ({engineer.reviews}件)</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                    <div className="text-lg font-bold text-[#000080] mb-1">{engineer.hourlyRate}</div>
                    <div className="text-sm text-gray-600">時給</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                    <div className="text-lg font-bold text-gray-900 mb-1">{engineer.experience}</div>
                    <div className="text-sm text-gray-600">経験年数</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                    <div className="text-lg font-bold text-gray-900 mb-1">{engineer.projects}</div>
                    <div className="text-sm text-gray-600">完了プロジェクト</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Self Introduction */}
          <div className="bg-gray-100 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">自己紹介</h3>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                {engineer.introduction}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-gray-100 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">スキル</h3>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <p className="text-center text-gray-600 mb-6">言語：スキルレベル（A〜D）</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {engineer.skills.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <span className="font-medium text-gray-900">{skill.name}</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      skill.level === 'A' ? 'bg-green-100 text-green-800' :
                      skill.level === 'B' ? 'bg-blue-100 text-blue-800' :
                      skill.level === 'C' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Qualifications Section */}
          <div className="bg-gray-100 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">資格</h3>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-4">
                {engineer.qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <Award className="w-5 h-5 text-[#000080]" />
                    <span className="text-gray-900">{qualification}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Portfolio Section */}
          <div className="bg-gray-100 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">ポートフォリオ</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {engineer.portfolio.map((item, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                    <button className="text-[#000080] hover:text-[#000080]/80 font-medium text-sm">
                      ポートフォリオリンク<br />
                      <span className="text-xs text-gray-500">（どう表示するかは別途相談）</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <QASection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EngineerDetailPage;