import React, { useState } from 'react'; // useEffect는 미사용으로 제거
import { Send, Phone, Clock, ChevronRight } from 'lucide-react';

const ContactCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: '기장 대리 및 세무 신고',
    businessType: '',
    taxType: '',
    hasEmployee: '',
    propertyAction: '', 
    lifecycleStage: '',
    crisisType: '',
    message: ''
  });

  // 여기에 구글 설문지 [보내기] -> [링크] 주소를 붙여넣으세요
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScGHwnt6SUrNvP-oKE9Wo6_AL_xPBzdCHYQ-XY8_zEniT1bTQ/viewform?usp=dialog";

  const serviceOptions = [
    "기장 대리 및 세무 신고",
    "세무 조정 및 기업 재무 진단",
    "재산세제 (양도·상속·증여)",
    "사업 생애주기 및 위기 관리 컨설팅",
    "기타 문의",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value, name } = e.target;
    const fieldId = id || name;
    setFormData(prev => ({ ...prev, [fieldId]: value }));
  };

  // 상황별 동적 설문 렌더링 함수 (기존 로직 유지)
  const renderDynamicFields = () => {
    if (formData.category === "사업 생애주기 및 위기 관리 컨설팅") {
      return (
        <div className="space-y-5 animate-in fade-in slide-in-from-top-2 duration-500">
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <label className="block text-sm font-bold text-slate-700 mb-3">현재 사업 단계</label>
            <div className="space-y-2">
              {['창업 준비 단계', '사업 운영 중 (구조 전환 고려)', '폐업 또는 사업 정리 예정'].map(stage => (
                <label key={stage} className={`flex items-center p-3 border rounded-md cursor-pointer text-sm transition-all ${formData.lifecycleStage === stage ? 'bg-amber-500 border-amber-500 text-white' : 'bg-white text-slate-600 hover:border-amber-300'}`}>
                  <input type="radio" name="lifecycleStage" value={stage} onChange={handleChange} className="hidden" />
                  <ChevronRight size={16} className="mr-2" /> {stage}
                </label>
              ))}
            </div>
          </div>
          {/* 생애주기별 세부 필드는 동일하게 유지됩니다 */}
        </div>
      );
    }

    if (formData.category === "기장 대리 및 세무 신고" || formData.category === "세무 조정 및 기업 재무 진단") {
      return (
        <div className="space-y-5 animate-in fade-in slide-in-from-top-2 duration-500">
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <label className="block text-sm font-bold text-slate-700 mb-3">사업의 형태</label>
            <div className="grid grid-cols-3 gap-2">
              {['개인사업자', '법인사업자', '비사업자'].map(type => (
                <label key={type} className={`flex items-center justify-center p-2 border rounded-md cursor-pointer text-sm transition-all ${formData.businessType === type ? 'bg-amber-500 border-amber-500 text-white' : 'bg-white text-slate-600 hover:border-amber-300'}`}>
                  <input type="radio" name="businessType" value={type} onChange={handleChange} className="hidden" />
                  {type}
                </label>
              ))}
            </div>
          </div>
          {/* 과세 유형 및 근로자 유무 동일 유지 */}
        </div>
      );
    }

    if (formData.category === "재산세제 (양도·상속·증여)") {
      return (
        <div className="space-y-5 animate-in fade-in slide-in-from-top-2 duration-500">
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <label className="block text-sm font-bold text-slate-700 mb-3">진행 상황 (선택)</label>
            <div className="space-y-2">
              {['계약/사망 전 (사전 절세 플랜)', '계약 완료 / 등기 이전 전', '등기 완료 / 신고 대행'].map(status => (
                <label key={status} className={`flex items-center p-3 border rounded-md cursor-pointer text-sm transition-all ${formData.propertyAction === status ? 'bg-amber-500 border-amber-500 text-white' : 'bg-white text-slate-600 hover:border-amber-300'}`}>
                  <input type="radio" name="propertyAction" value={status} onChange={handleChange} className="hidden" />
                  <ChevronRight size={16} className="mr-2" /> {status}
                </label>
              ))}
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Left Side: Info (기존 동일) */}
          <div className="lg:w-1/2 p-10 md:p-14 flex flex-col justify-center bg-slate-800 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">전문가를 통해 귀하의 사업을 진단하세요</h2> 
              <p className="text-slate-300 mb-10 text-lg leading-relaxed">
                정확한 데이터 작성이 <strong>최적의 절세 결과</strong>를 만듭니다.<br/>
                상담 분야에 맞춰 정보를 입력해주시면 더욱 상세한 진단이 가능합니다.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center text-amber-400 border border-amber-500/30"><Phone className="w-6 h-6" /></div>
                  <div>
                    <p className="text-sm text-slate-400">긴급 문의 전화</p>
                    <p className="text-xl font-bold tracking-wide">0507-1407-2553</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center text-amber-400 border border-amber-500/30"><Clock className="w-6 h-6" /></div>
                  <div>
                    <p className="text-sm text-slate-400">상담 가능 시간</p>
                    <p className="text-lg">평일 10:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form & Link Button */}
          <div className="lg:w-1/2 p-10 md:p-14 bg-white">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">1:1 맞춤 컨설팅 신청서</h3> 
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">성함 / 회사명</label>
                  <input type="text" id="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none" placeholder="홍길동" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">연락처</label>
                  <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none" placeholder="010-0000-0000" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">상담 희망 분야</label>
                <select id="category" value={formData.category} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none bg-white font-bold text-amber-700">
                  {serviceOptions.map(option => <option key={option} value={option}>{option}</option>)}
                </select>
              </div>

              {renderDynamicFields()}

              <div className="p-4 bg-slate-50 rounded-xl border border-dashed border-slate-300 mb-6">
                <p className="text-sm text-slate-600 text-center">
                  전문적인 기초 진단을 위해<br/>
                  <strong>구글 설문 페이지로 이동하여 접수를 완료</strong>해주세요.
                </p>
              </div>

              {/* 폼 제출 버튼 대신 구글 설문지 링크 버튼으로 변경 */}
              <a 
                href={GOOGLE_FORM_URL}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-lg transition-all shadow-md transform active:scale-[0.98] flex items-center justify-center space-x-2"
              >
                <span>상담 데이터 분석 및 컨설팅 신청</span>
                <ChevronRight size={20} />
              </a>
              <p className="text-center text-xs text-slate-400 mt-2">※ 클릭 시 안전한 구글 설문지 페이지로 연결됩니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;