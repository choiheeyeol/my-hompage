import type { LucideIcon } from 'lucide-react';

export interface CoreValue {
  id: string;  // 추가
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface CareerItem {
  id: string;  // 추가
  period: string;
  description: string;
}

export interface ServiceItem {
  id: string;  // 추가
  title: string;
  benefit: string;  // 추가
  description: string;
  features: string[];
}

export interface ContactInfo {  // 새로 추가
  phone: string;
  email: string;
  address: string;
  fax: string;
}