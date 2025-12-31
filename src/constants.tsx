import { Shield, TrendingUp, Handshake, Calculator, FileText, Scale, Building2 } from 'lucide-react';
import { CoreValue, CareerItem, ServiceItem } from './types';

export const CORE_VALUES: CoreValue[] = [
  {
    id: 'customized',  // 추가
    title: "맞춤형 솔루션",
    description: "고객의 업종과 상황을 정밀 분석하여 최적의 절세 전략을 수립합니다. 획일화된 처리가 아닌 1:1 맞춤 컨설팅을 제공합니다.",
    icon: Calculator,
  },
  {
    id: 'crisis-management',  // 추가
    title: "위기 극복 컨설팅 전문",
    description: "소상공인 선제 지원, 사업 정리 및 창업 멘토링 등 다년간의 정부 사업 컨설팅 노하우로 고객의 위기를 기회로 만듭니다.",
    icon: Shield,
  },
  {
    id: 'partnership',  // 추가
    title: "신뢰의 파트너십",
    description: "단순한 세무 대리를 넘어 사업의 시작부터 성장, 그리고 정리까지 함께하는 든든한 비즈니스 파트너가 되어드립니다.",
    icon: Handshake,
  },
];

export const CAREER_HISTORY: CareerItem[] = [
  { 
    id: 'current',  // 추가
    period: "2020 - 현재", 
    description: "최희열세무회계사무소 대표 세무사 (사업 생애주기별 컨설팅 전문)" },
  // 통합: 2018년 이후의 주요 기관 컨설팅 경력 통합 및 강조
  { 
    id: 'government',  // 추가
    period: "2018 - 현재", 
    description: "서울신용보증재단, 소상공인시장진흥공단 등 위기 소상공인 선제 지원 및 사업 정리 컨설팅 수행 다수" },
  // 기존의 2015-2017년 경력 유지
  { 
    id: 'mentor',  // 추가
    period: "2015 - 2017", 
    description: "창업진흥원 예비창업패키지 멘토, 기술개발진흥원 등 정부/기술 개발 평가위원 활동" }, 
  { 
    id: 'cert',  // 추가
    period: "2004 - 2005", 
    description: "세무사 자격 취득 및 전문 세무 서비스 개시" },
];

export const SERVICES: ServiceItem[] = [
  // 1. 기장 대리 및 세무 신고 (유지)
  {
    id: 'bookkeeping',  // 추가
    title: "기장 대리 및 세무 신고",
    benefit: "불필요한 가산세 없이 시간과 비용을 절약하며 사업에만 집중하세요.",
    description: "정확한 장부 작성을 통해 불필요한 가산세를 예방하고, 법인세·소득세 등 각종 세금을 기한 내 완벽하게 신고합니다.",
    features: ["복식부기 장부 작성", "부가가치세 신고", "원천세 신고 및 지급명세서 제출"],
  },
  // 2. 세무 조정 및 기업 재무 진단 (내용 최종 대체)
  {
    id: 'tax-adjustment',  // 추가
    title: "세무 조정 및 기업 재무 진단",
    benefit: "합법적인 절세 방안을 제시하고, 결산 및 조정 과정을 통해 기업의 재무 건전성을 확보합니다.",
    description: "기업의 재무 상태를 분석하여 세무 리스크를 사전에 진단하며, 세법에 근거한 조정 및 신고를 통해 최적의 세금 결과를 도출합니다.",
    features: [
      "법인세/소득세 세무조정 및 신고",
      "창업 중소기업 세액감면 검토 및 신청 대리",
      // 최종 대체: 4대 보험 및 인건비 관리 항목 추가
      "4대 보험 및 인건비 관리 최적화 컨설팅 (대표자 급여, 상여, 퇴직금 등 포함)" 
    ],
  },
  // 3. 재산세제 (양도·상속·증여) (유지)
  {
    id: 'property-tax',  // 추가
    title: "재산세제 (양도·상속·증여)",
    benefit: "자산 이동 시 발생하는 세금을 합법적으로 최소화하는 맞춤형 플랜을 수립하고 실행합니다.",
    description: "부동산, 주식 등 자산 이동과 승계 시 발생하는 복잡한 세금을 사전에 정확히 진단하고, 고객 맞춤형 절세 방안을 수립하여 실행합니다.",
    features: [
      "[양도] 양도소득세 비과세/감면 요건 검토 및 최적화 전략 수립",
      "[증여] 증여세 신고 및 공제/감면 전략 수립 및 사전 계획 수립",
      "[상속] 상속세 절세 플랜 수립, 재산 평가 및 상속세 준비 절차 관리"
    ],
  },
  // 4. 사업 생애주기 및 위기 관리 컨설팅 (유지)
  {
    id: 'lifecycle',  // 추가
    title: "사업 생애주기 및 위기 관리 컨설팅",
    benefit: "사업의 시작과 위기 관리 전반에 걸쳐 컨설팅 전문 노하우를 제공하며, 안정적인 경영 환경을 구축합니다.",
    description: "사업 운영 전반의 재무 상태를 진단하여 최적의 세무 전략을 수립하고, 위기 상황에 대한 맞춤형 해결 방안을 제공합니다.",
    features: [
      "창업 및 사업 구조(개인/법인 전환) 컨설팅", 
      "소상공인 사업 정리 컨설팅 다수 수행 및 폐업 관련 세무 컨설팅",
      "서울신용보증재단 위탁 사업 연계를 통한 경영 안정화 지원", 
    ],
  },
];

export const CONTACT_INFO = {
  phone: "0507-1407-2553",
  email: "ctao.choi@gmail.com",
  address: "인천광역시 계양구 계양대로 82, 201호(작전동.덕영빌딩)",
  fax: "032-555-2597"
};
