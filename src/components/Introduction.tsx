import React from 'react';
import { CAREER_HISTORY } from '../constants';
import { BadgeCheck } from 'lucide-react';

const Introduction: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start lg:items-center">
          <div>
            <div className="flex items-center mb-8">
              <div className="w-24 h-24 sm:w-28 sm:h-28 mr-5 flex items-center justify-center flex-shrink-0 bg-amber-500/10 rounded-full border-2 border-amber-500/30">
                <img 
                  src="/logo.png" 
                  alt="SB Tax Logo" 
                  className="w-full h-full object-contain p-2"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.fallback-text')) {
                      const span = document.createElement('span');
                      span.className = 'fallback-text text-3xl sm:text-4xl font-bold text-amber-500';
                      span.textContent = 'SB';
                      parent.appendChild(span);
                    }
                  }}
                />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-amber-400">대표 세무사 최희열</h2>
                <p className="text-sm sm:text-base text-slate-400 mt-2">최희열세무회계사무소</p>
              </div>
            </div>
            
            <h3 className="text-xl text-slate-300 mb-8 font-light pl-1 border-l-4 border-amber-500">
              <span className="block">"위기 소상공인 지원과 사업 정리,</span>
              <span className="block">성장의 길을 함께하는 파트너"</span>
            </h3>
            
            <p className="text-slate-400 leading-relaxed mb-8 text-lg">
              {/* 수정된 소개 문구: 2004년 합격 및 컨설팅 경험 강조 */}
              <strong>전문서비스 개시 이후</strong>, 오랜 기간 실무 경험을 쌓았습니다. <br className="hidden md:block"/>
              단순히 세금을 계산하는 것을 넘어, **정부 기관 위탁 컨설팅 노하우**를 바탕으로<br className="hidden md:block"/>
              사업의 시작부터 경영 개선, 그리고 사업 정리까지 <br className="hidden md:block"/>
              **전 생애주기**에 걸쳐 귀하의 재무 건전성과 성장을 지키는 전략적 파트너가 되겠습니다.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
               <div className="flex items-center text-slate-100 bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
                  <BadgeCheck className="w-5 h-5 mr-2 text-amber-500" />
                  <span className="font-medium">세무사 자격 보유</span>
               </div>
               {/* 경력 배지 수정: 실제 경력인 '정부 기관 자문' 강조 */}
               <div className="flex items-center text-slate-100 bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
                  <BadgeCheck className="w-5 h-5 mr-2 text-amber-500" />
                  <span className="font-medium">정부 기관 자문 활동</span>
               </div>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl relative overflow-hidden group hover:border-amber-500/50 transition-colors duration-500">
             <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all duration-500"></div>
             
             <h4 className="text-xl font-bold text-white mb-8 border-b border-slate-700 pb-4 flex justify-between items-center">
                <span>주요 약력</span>
                <span className="text-xs text-amber-500 font-normal px-2 py-1 bg-amber-500/10 rounded-full border border-amber-500/20">Certified</span>
             </h4>
             
             <div className="space-y-6 relative">
                {/* Timeline Line */}
               <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-slate-700"></div>

               {/* CAREER_HISTORY 상수 사용 */}
               {CAREER_HISTORY.map((item) => (
                  <div key={item.id} className="relative pl-8 group/item">
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-slate-600 bg-slate-900 group-hover/item:border-amber-500 group-hover/item:bg-amber-500 transition-colors duration-300"></div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-baseline">
                      <span className="font-bold text-amber-400 w-28 shrink-0 mb-1 sm:mb-0 text-sm">{item.period}</span>
                      <span className="text-slate-300 group-hover/item:text-white transition-colors">{item.description}</span>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;