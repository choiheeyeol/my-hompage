import React from 'react';
import { ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative bg-slate-900 text-white min-h-[600px] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-500 via-slate-900 to-black"></div>
      
      {/* Decorative Circle */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-amber-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <h2 className="text-amber-400 font-medium tracking-[0.2em] text-sm md:text-base uppercase mb-4 animate-[fadeIn_1s_ease-out]">
          {/* 변경: 경력 기간 대신 합격 연도 명시 및 컨설팅 강조 */}
          SINCE 2004, EXPERT TAX CONSULTING
        </h2>
        
        <h1 className="text-4xl md:text-6xl font-bold leading-tight font-serif tracking-tight">
          {/* 위기 관리 및 자산 안정화 강조 (유지) */}
          <span className="block mb-2 text-slate-100">위기 속에서도 흔들림 없는</span>
          <span className="block bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
            사업 안정화와 자산 보호
          </span>
        </h1>
        
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mt-6 font-light">
          정부기관 컨설팅 경험과 숙련된 세무 노하우로 복잡한 문제의 해답을 제시합니다.<br />
          오직 사업의 본질에만 집중하실 수 있도록 가장 든든한 파트너가 되겠습니다.
        </p>

        <div className="pt-8">
          <a 
            href="#contact"
            className="inline-block px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white text-lg font-semibold rounded-sm transition-all duration-300 shadow-lg hover:shadow-amber-500/30 transform hover:-translate-y-1"
          >
            1:1 프리미엄 컨설팅 신청
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce text-slate-500">
        <ChevronDown size={32} />
      </div>
    </header>
  );
};

export default Header;