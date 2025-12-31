import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, MapPin, Printer, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-white text-2xl font-bold mb-4">최희열 세무회계사무소</h2>
            <p className="text-sm leading-relaxed mb-4 max-w-sm">
              고객의 성공이 곧 우리의 성공입니다.<br/>
              정직하고 투명한 세무 서비스로 보답하겠습니다.
            </p>
          </div>
          
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
             <h3 className="text-white font-semibold mb-4">Contact Us</h3>
             <ul className="space-y-3 text-sm">
               <li className="flex items-start">
                 <MapPin className="w-4 h-4 mr-2 mt-0.5 text-amber-500 flex-shrink-0" />
                 <a 
                   href="https://map.kakao.com/?urlX=438823.0000000013&urlY=1119971.000000001&urlLevel=3&itemId=8114559&q=%EC%B5%9C%ED%9D%AC%EC%97%B4%EC%84%B8%EB%AC%B4%ED%9A%8C%EA%B3%84%EC%82%AC%EB%AC%B4%EC%86%8C&srcid=8114559&map_type=TYPE_MAP"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="hover:text-white transition-colors"
                 >
                   {CONTACT_INFO.address}
                 </a>
               </li>
               <li className="flex items-center">
                 <Phone className="w-4 h-4 mr-2 text-amber-500" />
                 <a 
                   href={`tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`}
                   className="hover:text-white transition-colors"
                 >
                   {CONTACT_INFO.phone}
                 </a>
               </li>
               <li className="flex items-center">
                 <Printer className="w-4 h-4 mr-2 text-amber-500" />
                 {CONTACT_INFO.fax}
               </li>
               <li className="flex items-center">
                 <Mail className="w-4 h-4 mr-2 text-amber-500" />
                 <a 
                   href={`mailto:${CONTACT_INFO.email}`}
                   className="hover:text-white transition-colors"
                 >
                   {CONTACT_INFO.email}
                 </a>
               </li>
             </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 mt-8 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} 최희열 세무회계사무소. All rights reserved.</p>
          <div className="flex items-center justify-center md:justify-start text-slate-500">
              <Sparkles className="w-3 h-3 mr-1 text-amber-600/60" />
              <span>This website was crafted with the assistance of AI.</span>
            </div>
          </div>

          <div className="mt-4 md:mt-0 space-x-4">
             <a href="/privacy.html" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">개인정보처리방침</a>
             <a href="/terms.html" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;