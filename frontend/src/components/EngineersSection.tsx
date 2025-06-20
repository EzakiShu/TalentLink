import React from 'react';
import { Star, MapPin, Code, Database, Smartphone, Palette, Award, Users } from 'lucide-react';

const EngineersSection = () => {
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
      specialty: 'スケーラブルなWebアプリケーション構築が得意',
      icon: <Code className="w-5 h-5" />,
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
      specialty: 'ユーザビリティの高いモバイルアプリ開発',
      icon: <Smartphone className="w-5 h-5" />,
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
      specialty: 'ビッグデータから価値ある洞察を抽出',
      icon: <Database className="w-5 h-5" />,
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
      specialty: 'ユーザー中心設計による直感的なUI作成',
      icon: <Palette className="w-5 h-5" />,
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
      specialty: '自動化とCI/CDパイプライン構築のエキスパート',
      icon: <Code className="w-5 h-5" />,
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
      specialty: 'モダンなフロントエンド技術で高速なWebサイト構築',
      icon: <Code className="w-5 h-5" />,
      experience: '4年',
      projects: 78
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - 3D English Background Design - Fixed Position Higher */}
        <div className="text-center mb-12 relative">
          {/* Background English Text - Much Higher Position and Blue Tinted */}
          <div className="absolute inset-0 flex items-center justify-center opacity-15 -mt-16">
            <span className="text-9xl font-bold text-blue-400 tracking-widest">ENGINEERS</span>
          </div>
          
          {/* Decorative Lines */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-[#000080] to-transparent w-32"></div>
            <div className="mx-6 w-2 h-2 bg-[#000080] rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#000080] to-transparent w-32"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4 relative z-10">
            認定エンジニア一覧
          </h2>
          
          {/* English Subtitle */}
          <p className="text-lg text-gray-500 font-medium tracking-wide uppercase">
            Certified Engineers
          </p>
          
          {/* Bottom Line */}
          <div className="mt-8 flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-64"></div>
          </div>
          
          {/* Description Text - Same Style as Other Sections */}
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mt-6">
            厳しい選考基準を突破した、幅広い知識と豊富な経験を持つ<br />
            <span className="font-bold text-[#000080]">「タレントリンク認定エンジニア」</span>が登録しています。
          </p>
        </div>

        {/* Engineers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {engineers.map((engineer) => (
            <div
              key={engineer.id}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
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
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    {engineer.icon}
                    <span>{engineer.speciality}</span>
                  </div>
                  <div className="text-lg font-bold text-[#000080]">{engineer.hourlyRate}/時</div>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{engineer.location}</span>
                  </div>
                  <div>経験年数: {engineer.experience}</div>
                </div>

                {/* Specialty - 得意なこと */}
                <div className="bg-gradient-to-r from-[#000080]/10 to-purple-50 p-4 rounded-lg border border-[#000080]/10">
                  <div className="text-xs text-[#000080] font-medium mb-2 flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    得意なこと（一言）
                  </div>
                  <div className="text-sm text-[#000080]/80 font-medium leading-relaxed">{engineer.specialty}</div>
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
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-gradient-to-r from-[#000080] to-[#000080]/80 text-white py-2 px-4 rounded-lg hover:from-[#000080]/80 hover:to-[#000080] transition-all duration-200 font-medium text-sm shadow-md hover:shadow-lg transform hover:scale-105">
                  詳細を見る
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-[#000080] to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-[#000080]/80 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
            もっと見る
          </button>
        </div>
      </div>
    </section>
  );
};

export default EngineersSection;