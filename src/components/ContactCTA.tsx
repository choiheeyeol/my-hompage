import React, { useState, useEffect } from 'react';
import { Send, Phone, Clock, ChevronRight, RotateCcw } from 'lucide-react';

const ContactCTA: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: '기장 대리 및 세무 신고',
  });

  // 구글 설문지 설정
  const GOOGLE_FORM_BASE_URL = "https://docs.google.com/forms/d/e/1FAIpQLScGHwnt6SUrNvP-oKE9Wo6_AL_xPBzdCHYQ-XY8_zEniT1bTQ/viewform?embedded=true";
  const ENTRY_IDS = {
    name: "entry.2005620554",
    phone: "entry.1045781291",
    category: "entry.1404194098"
  };

  // 연락처 자동 하이픈 기능
  const formatPhoneNumber = (value: string) => {
    const number = value.replace(/[^\d]/g, '');
    if (number.length < 4) return number;
    if (number.length < 7) return `${number.slice(0, 3)}-${number.slice(3)}`;
    if (number.length < 11) return `${number.slice(0, 3)}-${number.slice(3, 6)}-${number.slice(6)}`;
    return `${number.slice(0, 3)}-${number.slice(3, 7)}-${number.slice(7, 11)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    if (id === 'phone') {
      setFormData(prev => ({ ...prev, phone: formatPhoneNumber(value) }));
    } else {
      setFormData(prev => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  // 홈페이지 메인으로 돌아가는 함수
  const handleGoHome = () => {
    window.location.href = "/";
  };

  const getPrefilledUrl = () => {
    const params = new URLSearchParams();
    params.append(ENTRY_IDS.name, formData.name);
    params.append(ENTRY_IDS.phone, formData.phone);
    params.append(ENTRY_IDS.category, formData.category);
    return `${GOOGLE_FORM_BASE_URL}&${params.toString()}`;
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* [디자인 유지] 왼쪽 안내 영역 */}
          <div className="lg:w-1/3 p-10 md:p-14 flex flex-col justify-center bg-slate-800 text-white relative">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">전문 기초 진단</h2> 
              <p className="text-slate-300 mb-10 text-lg">
                정확한 데이터 작성이 <strong>최적의 절세 결과</strong>를 만듭니다.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center text-amber-400 border border-amber-500/30">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">문의</p>
                    <p className="text-xl font-bold">0507-1407-2553</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* [디자인 유지] 오른쪽 영역 */}
          <div className="lg:w-2/3 p-6 md:p-10 bg-white">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">1:1 맞춤 컨설팅 신청서</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">성함 / 회사명</label>
                    <input type="text" id="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none" placeholder="홍길동" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">연락처</label>
                    <input type="tel" id="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none" placeholder="010-0000-0000" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">상담 희망 분야</label>
                  <select id="category" value={formData.category} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none bg-white font-bold text-amber-700">
                    <option value="기장 대리 및 세무 신고">기장 대리 및 세무 신고</option>
                    <option value="세무 조정 및 기업 재무 진단">세무 조정 및 기업 재무 진단</option>
                    <option value="재산세제 (양도·상속·증여)">재산세제 (양도·상속·증여)</option>
                    <option value="사업 생애주기 및 위기 관리 컨설팅">사업 생애주기 및 위기 관리 컨설팅</option>
                    <option value="기타 문의">기타 문의</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center space-x-2">
                  <span>기초 데이터 분석 시작하기</span>
                  <ChevronRight size={20} />
                </button>
              </form>
            ) : (
              <div className="w-full animate-in fade-in duration-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-amber-700 italic">InOn.Tax 정밀 진단 진행 중...</h3>
                  <button 
                    onClick={handleGoHome}
                    className="flex items-center space-x-1 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors bg-slate-100 px-3 py-2 rounded-full"
                  >
                    <RotateCcw size={14} />
                    <span>설문 완료/메인으로 이동</span>
                  </button>
                </div>
                <iframe
                  src={getPrefilledUrl()}
                  width="100%"
                  height="700"
                  frameBorder="0"
                  className="rounded-xl border border-slate-200 shadow-inner"
                >
                  로드 중…
                </iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;