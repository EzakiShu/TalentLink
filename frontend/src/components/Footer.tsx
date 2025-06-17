import React from 'react';
import { Code2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Talent Link</h3>
                <p className="text-sm text-gray-400">タレントリンク</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              優秀なエンジニアとプロジェクトを繋ぐ、信頼性の高い開発アウトソーシングプラットフォームです。
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">サービス</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">エンジニア検索</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">プロジェクト投稿</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">簡易見積もり</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">品質保証</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">プロジェクト管理</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">サポート</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">ヘルプセンター</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">よくある質問</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">利用規約</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">プライバシーポリシー</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">お問い合わせ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">support@talentlink.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">03-1234-5678</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">東京都渋谷区恵比寿1-1-1</span>
              </div>
            </div>
            <div className="mt-6">
              <h5 className="font-medium mb-2">営業時間</h5>
              <p className="text-gray-300 text-sm">平日 9:00 - 18:00</p>
              <p className="text-gray-300 text-sm">土日祝日はお休みです</p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">最新情報をお届け</h4>
              <p className="text-gray-300">新着案件やプラットフォームの最新情報をメールでお知らせします。</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="メールアドレスを入力"
                className="flex-1 md:w-64 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                登録
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Talent Link. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">プライバシーポリシー</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">利用規約</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">サイトマップ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;