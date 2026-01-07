import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { CheckCircle2, X, FileText, ClipboardCheck } from 'lucide-react';

const Services: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'business' | 'assets'>('business');

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold tracking-wider text-sm uppercase">Our Core Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">주요 서비스 및 전문 분야</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            20년 이상의 숙련된 풍부한 경험과 정부 기관 컨설팅 노하우를 바탕으로 <br/>
            고객의 상황에 꼭 필요한 <strong>최적의 세무 전략</strong>을 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              
              <div className="mb-6 border-l-4 border-amber-500 pl-4 py-1">
                <p className="font-bold text-slate-800 text-lg leading-relaxed">
                  {service.benefit}
                </p>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed border-b border-slate-100 pb-6">
                {service.description}
              </p>
              
              <ul className="space-y-3 flex-grow">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 mr-3 shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA 영역: 신청 시 준비서류 확인 및 컨설팅 신청 버튼 */}
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

      {/* 준비서류 체크리스트 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col">
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
                className={`flex-1 py-4 text-center font-bold transition-colors ${activeTab === 'business' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-slate-500 hover:bg-slate-50'}`}
              >
                정부지원사업
              </button>
              <button 
                onClick={() => setActiveTab('assets')}
                className={`flex-1 py-4 text-center font-bold transition-colors ${activeTab === 'assets' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-slate-500 hover:bg-slate-50'}`}
              >
                양도·증여·상속
              </button>
            </div>

            {/* 탭 콘텐츠 영역 (스크롤 가능) */}
            <div className="p-8 overflow-y-auto bg-white">
              {activeTab === 'business' ? (
                <div className="space-y-8 text-left">
                  {/* 사업자 기본 서류 */}
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3 border-l-4 border-amber-500 pl-2 text-lg">사업자 기본 서류</h4>
                    <ul className="text-slate-600 space-y-3 ml-4">
                      <li>• 사실증명(총사업자등록내역) <a href="https://www.hometax.go.kr" target="_blank" rel="noreferrer" className="ml-1 text-blue-600 hover:underline font-medium">[국세청 홈택스]</a></li>
                      <li>• 사업자등록증명 <a href="https://www.hometax.go.kr" target="_blank" rel="noreferrer" className="ml-1 text-blue-600 hover:underline font-medium">[홈택스]</a>, <a href="https://www.gov.kr" target="_blank" rel="noreferrer" className="ml-1 text-blue-600 hover:underline font-medium">[정부24]</a></li>
                      <li>• 재무제표(표준재무제표증명) <a href="https://www.hometax.go.kr" target="_blank" rel="noreferrer" className="ml-1 text-blue-600 hover:underline font-medium">[국세청 홈택스]</a></li>
                    </ul>
                  </div>

                  {/* 기업 및 기술 인증 */}
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3 border-l-4 border-amber-500 pl-2 text-lg">기업 및 기술 인증</h4>
                    <ul className="text-slate-600 space-y-3 ml-4">
                      <li>• 창업기업확인서 <a href="https://cert.k-startup.go.kr" target="_blank" rel="noreferrer" className="ml-1 text-blue-600 hover:underline font-medium">[중소벤처기업부]</a></li>
                      <li>• 벤처기업 이노비즈 인증서 <a href="https://www.innobiz.net" target="_blank" rel="noreferrer" className="ml-1 text-blue-600 hover:underline font-medium">[이노비즈]</a></li>
                      <li>• 특허·상표·디자인 등록증 <a href="https://www.patent.go.kr" target="_blank" rel="noreferrer" className="ml-1 text-blue-600 hover:underline font-medium">[특허로]</a></li>
                    </ul>
                  </div>

                  {/* 인력 및 실적 증빙 */}
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3 border-l-4 border-amber-500 pl-2 text-lg">인력 및 실적 증빙</h4>
                    <ul className="text-slate-600 space-y-3 ml-4">
                      <li>• 4대보험 가입자 명부 <a href="https://www.4insure.or.kr" target="_blank" rel="noreferrer" className="ml-1 text-blue-600 hover:underline font-medium">[4대사회보험 정보연계센터]</a></li>
                      <li>• 건강보험 자격득실확인서 <a href="https://www.gov.kr" target="_blank" rel="noreferrer" className="ml-1 text-blue-600 hover:underline font-medium">[정부24]</a></li>
                      <li>• 수출실적 증명 <a href="https://www.kita.net" target="_blank" rel="noreferrer" className="ml-1 text-blue-600 hover:underline font-medium">[한국무역협회]</a></li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="space-y-8 text-left">
                  {/* 양도소득세 */}
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3 border-l-4 border-amber-500 pl-2 text-lg">양도소득세</h4>
                    <ul className="text-slate-600 space-y-3 ml-4">
                      <li>• 매매계약서 원본 (양도/취득 시)</li>
                      <li>• 등기사항전부증명서 <a href="http://www.iros.go.kr" target="_blank" rel="noreferrer" className="ml-1 text-blue-600 hover:underline font-medium">[인터넷등기소]</a></li>
                      <li>• 주민등록등본 <a href="https://www.gov.kr" target="_blank" rel="noreferrer" className="ml-1 text-blue-600 hover:underline font-medium">[정부24]</a></li>
                      <li>• 자본적 지출 증빙 (수리비, 샷시 등 영수증)</li>
                    </ul>
                  </div>

                  {/* 증여세 / 상속세 */}
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3 border-l-4 border-amber-500 pl-2 text-lg">증여세 / 상속세</h4>
                    <ul className="text-slate-600 space-y-3 ml-4">
                      <li>• 가족관계증명서 및 주민등록등본 <a href="https://www.gov.kr" target="_blank" rel="noreferrer" className="ml-1 text-blue-600 hover:underline font-medium">[정부24]</a></li>
                      <li>• 재산 가액 증빙 서류 (감정평가서 등)</li>
                      <li>• 피상속인 폐쇄가족관계증명서 및 부채증명서</li>
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