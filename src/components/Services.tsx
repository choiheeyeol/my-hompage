import React from 'react';
import { SERVICES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
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
              key={service.id}className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              
              {/* Benefit (핵심 혜택) 강조: 배경색 제거, 깔끔한 폰트 강조로 변경 */}
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
                    {/* 아이콘 색상 유지 및 단순화 */}
                    <CheckCircle2 className="w-5 h-5 text-amber-600 mr-3 shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
            </div>
          ))}
        </div>
        
        {/* 전체 서비스 하단에 컨설팅 신청 CTA를 통합 */}
        <div className="text-center mt-12">
          <a 
            href="#contact"
            className="inline-block px-10 py-4 bg-slate-900 hover:bg-slate-700 text-white text-lg font-semibold rounded-sm transition-all duration-300 shadow-md hover:shadow-lg"
          >
            1:1 프리미엄 컨설팅 신청
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;