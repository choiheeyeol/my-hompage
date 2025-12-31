import React from 'react';
import { CORE_VALUES } from '../constants';

const CoreValues: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">핵심 가치</h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600">고객의 신뢰를 최우선으로 생각하는 3가지 약속</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_VALUES.map((value) => (
            <div key={value.id}className="group bg-slate-50 p-8 rounded-xl border border-slate-100 hover:border-amber-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-slate-200 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                <value.icon className="w-8 h-8 text-slate-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;