import React, { useState } from 'react';
import { Send, Phone, Clock, ChevronRight, RotateCcw } from 'lucide-react';

// GTM dataLayer 타입을 위한 선언
declare global {
  interface Window {
    dataLayer: any[];
  }
}

const ContactCTA: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const serviceOptions = [
    "기장 대리 및 세무 신고",
    "세무 조정 및 기업 재무 진단",
    "재산세제 (양도·상속·증여)",
    "사업 생애주기 및 위기 관리 컨설팅",
    "기타 문의",
  ];

  const GOOGLE_FORM_BASE_URL = "https://docs.google.com/forms/d/e/1FAIpQLScGHwnt6SUrNvP-oKE9Wo6_AL_xPBzdCHYQ-XY8_zEniT1bTQ/viewform?embedded=true";
  const ENTRY_IDS = {
    name: "entry.2005620554",
    phone: "entry.1045781291",
    category: "entry.1404194098",
    message: "entry.812510821" 
  };

  const formatPhoneNumber = (value: string) => {
    const number = value.replace(/[^\d]/g, '');
    if (number.length < 4) return number;
    if (number.length < 7) return `${number.slice(0, 3)}-${number.slice(3)}`;
    if (number.length < 11) return `${number.slice(0, 3)}-${number.slice(3, 6)}-${number.slice(6)}`;
    return `${number.slice(0, 3)}-${number.slice(3, 7)}-${number.slice(7, 11)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value, name } = e.target;
    const fieldId = id || name;
    
    if (fieldId === 'phone') {
      setFormData(prev => ({ ...prev, phone: formatPhoneNumber(value) }));
    } else {
      setFormData(prev => ({ ...prev, [fieldId]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // [구글 연동 핵심] GTM 데이터 전송
    if (window.dataLayer) {
      window.dataLayer.push({
        'event': 'form_submission',
        'ga4_id': 'G-CMZRDGY4K0',
        'consult_category': formData.category,
        'user_name': formData.name
      });
    }

    setIsSubmitted(true);
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  const getPrefilledUrl = () => {
    const params = new URLSearchParams();
    params.append(ENTRY_IDS.name, formData.name);
    params.append(ENTRY_IDS.phone, formData.phone);
    params.append(ENTRY_IDS.category, formData.category);
    
    // 추가 정보를 메시지란에 함께 전송
    const extraInfo = `\n\n[추가 정보]\n사업형태: ${formData.businessType}\n직원유무: ${formData.hasEmployee}\n진행단계: ${formData.lifecycleStage || formData.propertyAction || '기본'}`;
    params.append(ENTRY_IDS.message, formData.message + extraInfo); 
    
    return `${GOOGLE_FORM_BASE_URL}&${params.toString()}`;
  };

  const renderDynamicFields = () => {
    // 1. 사업 생애주기 컨설팅 (모든 세부 옵션 복구)
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

          {formData.lifecycleStage === '폐업 또는 사업 정리 예정' && (
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <label className="block text-sm font-bold text-slate-700 mb-3">폐업 관련 지원 필요 사항</label>
              <div className="space-y-2">
                {['폐업 세무 신고 및 정리', '소상공인 폐업 지원사업 안내', '잔여 자산 처리 및 부채 정리', '재기 지원 및 재창업 컨설팅'].map(type => (
                  <label key={type} className={`flex items-center p-2.5 border rounded-md cursor-pointer text-xs transition-all ${formData.crisisType === type ? 'bg-amber-600 border-amber-600 text-white' : 'bg-white text-slate-600 hover:border-amber-300'}`}>
                    <input type="radio" name="crisisType" value={type} onChange={handleChange} className="hidden" />
                    <ChevronRight size={14} className="mr-2" /> {type}
                  </label>
                ))}
              </div>
            </div>
          )}

          {formData.lifecycleStage === '창업 준비 단계' && (
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <label className="block text-sm font-bold text-slate-700 mb-3">창업 컨설팅 필요 사항</label>
              <div className="grid grid-cols-2 gap-2">
                {['개인 vs 법인 사업 구조 선택', '초기 세무 설계', '사업자 등록 지원', '창업 지원사업 연계'].map(type => (
                  <label key={type} className={`flex items-center justify-center p-2 border rounded-md cursor-pointer text-xs transition-all ${formData.crisisType === type ? 'bg-blue-500 border-blue-500 text-white' : 'bg-white text-slate-600 hover:border-blue-300'}`}>
                    <input type="radio" name="crisisType" value={type} onChange={handleChange} className="hidden" />
                    {type}
                  </label>
                ))}
              </div>
            </div>
          )}

          {formData.lifecycleStage === '사업 운영 중 (구조 전환 고려)' && (
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <label className="block text-sm font-bold text-slate-700 mb-3">구조 전환 컨설팅 필요 사항</label>
              <div className="grid grid-cols-2 gap-2">
                {['개인→법인 전환', '법인→개인 전환', '사업 확장 전략', '세무 최적화 구조 설계'].map(type => (
                  <label key={type} className={`flex items-center justify-center p-2 border rounded-md cursor-pointer text-xs transition-all ${formData.crisisType === type ? 'bg-green-500 border-green-500 text-white' : 'bg-white text-slate-600 hover:border-green-300'}`}>
                    <input type="radio" name="crisisType" value={type} onChange={handleChange} className="hidden" />
                    {type}
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }

    // 2. 기장 대리 / 세무 조정 (모든 필드 복구)
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
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">근로자(4대보험) 유무</label>
            <select id="hasEmployee" value={formData.hasEmployee} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 outline-none focus:ring-2 focus:ring-amber-500 bg-white">
              <option value="">선택해주세요</option>
              <option value="있음">근로자 있음 (4대보험 가입)</option>
              <option value="없음">근로자 없음 (대표자 1인)</option>
            </select>
          </div>
        </div>
      );
    }

    // 3. 재산세제 (모든 필드 복구)
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
          
          <div className="lg:w-1/2 p-10 md:p-14 flex flex-col justify-center bg-slate-800 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">전문가를 통해 귀하의 사업을 진단하세요</h2> 
              <p className="text-slate-300 mb-10 text-lg">
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
                    <p className="text-lg mb-1 font-semibold">평일 10:00 - 17:00</p>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">※ 부재 시 메시지를 남겨주시면 확인 후 연락드립니다.</p> 
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 p-10 md:p-14 bg-white overflow-y-auto max-h-[850px]">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">1:1 맞춤 컨설팅 신청서</h3>
                <div className="grid grid-cols-2 gap-4">
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
                    {serviceOptions.map(option => <option key={option} value={option}>{option}</option>)}
                  </select>
                </div>

                {renderDynamicFields()}

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">상세 문의 내용</label>
                  <textarea id="message" name="message" rows={3} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none resize-none" placeholder="문의하실 내용을 적어주세요."></textarea>
                </div>

                <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-lg transition-all shadow-md transform active:scale-[0.98]">
                  상담 데이터 분석 및 컨설팅 신청
                </button>
              </form>
            ) : (
              <div className="w-full animate-in fade-in duration-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-amber-700 italic">정밀 진단 진행 중...</h3>
                  <button onClick={handleGoHome} className="flex items-center space-x-1 text-xs font-bold text-slate-500 hover:text-slate-800 bg-slate-100 px-3 py-2 rounded-full transition-all border border-slate-200">
                    <RotateCcw size={14} />
                    <span>메인으로 이동</span>
                  </button>
                </div>
                <iframe
                  src={getPrefilledUrl()}
                  width="100%"
                  height="650"
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