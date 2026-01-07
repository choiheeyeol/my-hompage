import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { CheckCircle2, X, FileText, ClipboardCheck } from 'lucide-react';

const Services: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'business' | 'assets'>('business');

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ... 기존 헤더 내용 동일 ... */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
             // ... 기존 서비스 카드 맵핑 동일 ...
             <div key={service.id} className="...">
               {/* 카드 내용 */}
             </div>
          ))}
        </div>

        {/* CTA 영역: 버튼 두 개를 나란히 배치 */}
        <div className="text-center mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center px-8 py-4 bg-white border-2 border-slate-900 text-slate-900 text-lg font-semibold rounded-sm hover:bg-slate-50 transition-all duration-300"
          >
            <ClipboardCheck className="w-5 h-5 mr-2" />
            신청 시 준비서류 확인
          </button>

          <a 
            href="#contact"
            className="inline-block px-10 py-4 bg-slate-900 hover:bg-slate-700 text-white text-lg font-semibold rounded-sm transition-all duration-300 shadow-md"
          >
            1:1 프리미엄 컨설팅 신청
          </a>
        </div>
      </div>

      {/* 모달 레이아웃 */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
            {/* 모달 헤더 */}
            <div className="p-6 border-b flex justify-between items-center bg-slate-900 text-white">
              <h3 className="text-xl font-bold">세무 신고별 준비서류 체크리스트</h3>
              <button onClick={() => setIsModalOpen(false)} className="hover:text-amber-400 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* 탭 메뉴 */}
            <div className="flex border-b">
              <button 
                onClick={() => setActiveTab('business')}
                className={`flex-1 py-4 text-center font-bold ${activeTab === 'business' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-slate-500'}`}
              >
                정부지원사업
              </button>
              <button 
                onClick={() => setActiveTab('assets')}
                className={`flex-1 py-4 text-center font-bold ${activeTab === 'assets' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-slate-500'}`}
              >
                양도·증여·상속
              </button>
            </div>

            {/* 탭 콘텐츠 (스크롤 가능 영역) */}
            <div className="p-6 overflow-y-auto bg-white">
              {activeTab === 'business' ? (
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 border-l-4 border-amber-500 pl-2">사업자 기본 서류</h4>
                    <ul className="text-sm text-slate-600 space-y-1 ml-4 list-disc">
                      <li>사실증명(총사업자등록내역) [국세청 홈택스] [cite: 12, 13]</li>
                      <li>사업자등록증명 [국세청 홈택스, 정부24] [cite: 16, 18, 19]</li>
                      <li>재무제표(표준재무제표증명) [국세청 홈택스] [cite: 29, 30]</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 border-l-4 border-amber-500 pl-2">기업 및 기술 인증</h4>
                    <ul className="text-sm text-slate-600 space-y-1 ml-4 list-disc">
                      <li>창업기업확인서 [중소벤처기업부] [cite: 17, 20]</li>
                      <li>벤처기업 이노비즈 인증서 [이노비즈] [cite: 36, 37]</li>
                      <li>특허·상표·디자인 등록증 [특허로] [cite: 31, 32]</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 border-l-4 border-amber-500 pl-2">인력 및 실적 증빙</h4>
                    <ul className="text-sm text-slate-600 space-y-1 ml-4 list-disc">
                      <li>4대보험 가입자 명부 [4대사회보험 정보연계센터] [cite: 27, 28]</li>
                      <li>건강보험 자격득실확인서 [정부24] [cite: 25, 26]</li>
                      <li>수출실적 증명 [한국무역협회] [cite: 38, 39]</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 border-l-4 border-amber-500 pl-2">양도소득세</h4>
                    <ul className="text-sm text-slate-600 space-y-1 ml-4 list-disc">
                      <li>매매계약서 원본 (양도/취득 시)</li>
                      <li>등기사항전부증명서 [인터넷등기소] [cite: 21, 22]</li>
                      <li>자본적 지출 증빙 (수리비, 샷시 등 영수증)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 border-l-4 border-amber-500 pl-2">증여세 / 상속세</h4>
                    <ul className="text-sm text-slate-600 space-y-1 ml-4 list-disc">
                      <li>가족관계증명서 및 주민등록등본 [정부24] [cite: 23, 24]</li>
                      <li>재산 가액 증빙 서류 (감정평가서 등)</li>
                      <li>피상속인 폐쇄가족관계증명서 및 부채증명서</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;