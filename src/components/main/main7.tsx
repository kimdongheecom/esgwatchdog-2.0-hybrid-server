import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faTimesCircle,
  faSpider,
  faBrain,
  faAlignLeft,
  faFilePdf,
  faChartBar,
  faPlug,
  faSignature,
  faBox,
  faArrowRight,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface SystemScopeProps {
  isActive?: boolean;
}

interface ScopeItem {
  icon: any;
  title: string;
  subtitle?: string;
}

const includedItems: ScopeItem[] = [
  {
    icon: faSpider,
    title: "뉴스/공시 크롤링 및 데이터 파이프라인"
  },
  {
    icon: faBrain,
    title: "AI 기반 감성·ESG 영역 분류, 위험도 스코어링"
  },
  {
    icon: faAlignLeft,
    title: "EU Taxonomy 정렬도·DNSH 자동 평가"
  },
  {
    icon: faFilePdf,
    title: "GPT‑API 보고서 요약·PDF/웹 출력"
  },
  {
    icon: faChartBar,
    title: "대시보드(React + Next.js) 시각화"
  }
];

const excludedItems: ScopeItem[] = [
  {
    icon: faPlug,
    title: "내부 BI 시스템과의 완전 통합",
    subtitle: "(차기 단계)"
  },
  {
    icon: faSignature,
    title: "외부 감사용 인증 기능",
    subtitle: "(파일 서명 등)"
  }
];

const ScopeSection: React.FC<{
  title: string;
  items: ScopeItem[];
  type: 'include' | 'exclude';
}> = ({ title, items, type }) => {
  const isInclude = type === 'include';
  const icon = isInclude ? faCheckCircle : faTimesCircle;
  const bgColor = isInclude ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-gray-50 dark:bg-gray-800';
  const iconColor = isInclude ? 'text-blue-500 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400';

  return (
    <div className={`p-6 rounded-lg ${bgColor}`}>
      <div className="flex items-center mb-6">
        <FontAwesomeIcon 
          icon={icon} 
          className={`text-2xl mr-3 ${iconColor}`}
        />
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          {title}
        </h3>
      </div>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-start">
            <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center mr-4 shadow-sm">
              <FontAwesomeIcon 
                icon={item.icon} 
                className="text-xl text-gray-600 dark:text-gray-300"
              />
            </div>
            <div>
              <p className="font-medium text-gray-800 dark:text-gray-200">
                {item.title}
              </p>
              {item.subtitle && (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.subtitle}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SystemScope: React.FC<SystemScopeProps> = ({ isActive = false }) => {
  return (
    <section 
      id="slide7" 
      className={`min-h-screen w-full ${isActive ? 'block' : 'hidden'}`}
    >
      <div className="p-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
          시스템 범위
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScopeSection 
            title="포함" 
            items={includedItems} 
            type="include"
          />
          <ScopeSection 
            title="제외" 
            items={excludedItems} 
            type="exclude"
          />
        </div>

        <div className="flex justify-center mt-12 space-x-4">
          <Link href="/main/main6/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center shadow-md transition-colors duration-300">
              이전 슬라이드로 돌아가기
              <FontAwesomeIcon icon={faArrowLeft} className="ml-2" />
            </button>
          </Link>
          <Link href="/main/main8/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center shadow-md transition-colors duration-300">
              다음 슬라이드로 이동
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
      
      <div className="mt-16 text-right text-gray-500 dark:text-gray-400">
        7 / 16
      </div>
    </section>
  );
};

export default SystemScope;

