import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, Phone, ArrowRight } from 'lucide-react';

const QASection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'タレントリンクとは何ですか？',
      answer: 'タレントリンクは、厳選された認定エンジニアとプロジェクトを繋ぐ開発アウトソーシングプラットフォームです。高品質な開発サービスを安心してご利用いただけます。'
    },
    {
      question: '料金体系はどのようになっていますか？',
      answer: 'プロジェクトの規模や複雑さに応じて料金が決まります。事前に詳細な見積もりを提供し、追加費用が発生する場合は必ず事前にご相談いたします。'
    },
    {
      question: 'エンジニアの品質はどのように保証されていますか？',
      answer: '全てのエンジニアは厳しい技術審査と実績審査を通過した認定エンジニアです。また、プロジェクト進行中も専任スタッフがサポートいたします。'
    },
    {
      question: 'プロジェクトの進捗はどのように管理されますか？',
      answer: '専任のプロジェクトマネージャーが進捗管理を行い、定期的な報告とコミュニケーションを通じて、スケジュール通りの納品を保証します。'
    },
    {
      question: '機密情報の取り扱いは大丈夫ですか？',
      answer: '全てのエンジニアは本人確認済みで、NDA（秘密保持契約）を締結しています。お客様の機密情報は厳重に保護されます。'
    },
    {
      question: 'サポート体制はどうなっていますか？',
      answer: '平日9:00-18:00でサポートを提供しています。チャット、メール、電話でのお問い合わせに対応しており、迅速にサポートいたします。'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - 3D English Background Design */}
        <div className="text-center mb-16 relative">
          {/* Background English Text - Blue Tinted */}
          <div className="absolute inset-0 flex items-center justify-center opacity-15">
            <span className="text-9xl font-bold text-blue-400 tracking-widest transform -rotate-1">FAQ</span>
          </div>
          
          {/* Decorative Lines */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-[#000080] to-transparent w-32"></div>
            <div className="mx-6 w-2 h-2 bg-[#000080] rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#000080] to-transparent w-32"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4 relative z-10">
            よくある質問
          </h2>
          
          {/* English Subtitle */}
          <p className="text-lg text-gray-500 font-medium tracking-wide uppercase">
            Frequently Asked Questions
          </p>
          
          {/* Bottom Line */}
          <div className="mt-8 flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-64"></div>
          </div>
        </div>

        {/* Q&A Content */}
        <div className="space-y-4 mb-20">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-[#000080]/30 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-[#000080]/5 transition-colors group"
              >
                <span className="text-gray-800 font-medium text-lg pr-4">{faq.question}</span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-[#000080] group-hover:text-[#000080]/80 transition-colors" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#000080] group-hover:text-[#000080]/80 transition-colors" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="bg-[#000080]/5 rounded-lg p-6 border border-[#000080]/10">
                    <p className="text-gray-700 leading-relaxed text-lg">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mb-20">
          <button className="border-2 border-[#000080] text-[#000080] bg-transparent px-16 py-6 rounded-lg font-bold text-xl hover:bg-[#000080] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            <span className="flex items-center gap-4">
              まずは無料で会員登録
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-[#000080] text-white text-center py-8">
            <h3 className="text-3xl font-bold">発注に関しては、専任アドバイザーにご相談ください</h3>
            <p className="text-[#000080]/20 mt-2 text-lg">お気軽にお問い合わせください</p>
          </div>

          {/* Content */}
          <div className="p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Form Contact */}
              <div className="text-center">
                <div className="bg-gray-50 rounded-lg p-8 hover:bg-gray-100 transition-colors duration-300 group mb-6 border border-gray-200">
                  <div className="space-y-6">
                    <div className="bg-[#000080]/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto group-hover:bg-[#000080]/20 transition-colors">
                      <MessageCircle className="w-10 h-10 text-[#000080]" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">フォームで相談する</h4>
                    <p className="text-gray-600 text-lg">
                      翌営業日までにご連絡させていただきます。
                    </p>
                    <div className="bg-[#000080]/5 rounded-lg p-4 border border-[#000080]/10">
                      <div className="text-sm text-[#000080] font-medium">平均回答時間: 24時間以内</div>
                    </div>
                  </div>
                </div>
                <button className="bg-[#000080] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#000080]/80 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  相談フォームへ
                </button>
              </div>

              {/* LINE Contact */}
              <div className="text-center">
                <div className="bg-gray-50 rounded-lg p-8 hover:bg-gray-100 transition-colors duration-300 group mb-6 border border-gray-200">
                  <div className="space-y-6">
                    <div className="bg-green-100 w-20 h-20 rounded-lg flex items-center justify-center mx-auto group-hover:bg-green-200 transition-colors">
                      <Phone className="w-10 h-10 text-green-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">LINEで相談する</h4>
                    <p className="text-gray-600 text-lg">
                      友達追加してご相談ください。
                    </p>
                    <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                      <div className="text-sm text-green-600 font-medium">リアルタイム対応可能</div>
                    </div>
                  </div>
                </div>
                <button className="bg-green-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  LINE友達追加
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QASection;