import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDatabase,
  faNewspaper,
  faFileAlt,
  faGavel,
  faIndustry,
  faCogs,
  faClock,
  faFilter,
  faShieldAlt,
  faCheckCircle,
  faArrowRight,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface DataRequirementsProps {
  isActive?: boolean;
}

interface DataSource {
  icon: any;
  title: string;
  description: string;
  tags: string[];
}

interface ProcessingItem {
  icon: any;
  title: string;
  details: React.ReactNode[];
}

interface QualityMetric {
  name: string;
  value: number;
}

const dataSources: DataSource[] = [
  {
    icon: faNewspaper,
    title: "뉴스 아티클",
    description: "주요 경제지, 일간지",
    tags: ["실시간", "HTML"]
  },
  {
    icon: faFileAlt,
    title: "기업 공시",
    description: "DART, SEC",
    tags: ["정기", "PDF"]
  },
  {
    icon: faGavel,
    title: "정부 규제",
    description: "EU Taxonomy, CSRD 등",
    tags: ["분기", "PDF/HTML"]
  },
  {
    icon: faIndustry,
    title: "산업별 지표",
    description: "카본 푸트프린트 등",
    tags: ["월간", "CSV"]
  }
];

const processingItems: ProcessingItem[] = [
  {
    icon: faClock,
    title: "수집 주기",
    details: [
      <>뉴스: <strong>15분</strong> 간격</>,
      <>공시: <strong>1시간</strong> 간격</>,
      <>규제: <strong>일 1회</strong> 업데이트</>
    ]
  },
  {
    icon: faDatabase,
    title: "저장소",
    details: [
      <>정형: <strong>PostgreSQL</strong></>,
      <>비정형: <strong>Elasticsearch</strong></>,
      <>임베딩: <strong>Pinecone</strong></>
    ]
  },
  {
    icon: faFilter,
    title: "전처리",
    details: [
      "PDF → 텍스트 추출",
      "HTML 정제",
      "중복 제거 및 필터링"
    ]
  },
  {
    icon: faShieldAlt,
    title: "보안",
    details: [
      "데이터 암호화 (AES-256)",
      "접근 통제 및 감사 로깅",
      <>데이터 저장 기간: <strong>3년</strong></>
    ]
  }
];

const qualityMetrics: QualityMetric[] = [
  { name: "정확성", value: 95 },
  { name: "완전성", value: 92 },
  { name: "시의성", value: 99 },
  { name: "일관성", value: 97 }
];

const DataSourceCard: React.FC<{ source: DataSource }> = ({ source }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
    <div className="flex items-start">
      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3">
        <FontAwesomeIcon 
          icon={source.icon} 
          className="text-blue-500 dark:text-blue-300"
        />
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 dark:text-gray-200">
          {source.title}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {source.description}
        </p>
        <div className="flex gap-2 mt-2">
          {source.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ProcessingCard: React.FC<{ item: ProcessingItem }> = ({ item }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
    <div className="flex items-start">
      <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3">
        <FontAwesomeIcon 
          icon={item.icon} 
          className="text-green-500 dark:text-green-300"
        />
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 dark:text-gray-200">
          {item.title}
        </h4>
        <div className="mt-2 space-y-1">
          {item.details.map((detail, index) => (
            <p 
              key={index}
              className="text-sm text-gray-600 dark:text-gray-400"
            >
              {detail}
            </p>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const QualityMetricCard: React.FC<{ metric: QualityMetric }> = ({ metric }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
        {metric.name}
      </span>
      <span className="text-lg font-semibold text-blue-500 dark:text-blue-400">
        {metric.value}%
      </span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
      <div 
        className="bg-blue-500 dark:bg-blue-400 h-2 rounded-full transition-all duration-500"
        style={{ width: `${metric.value}%` }}
      />
    </div>
  </div>
);

const DataRequirements: React.FC<DataRequirementsProps> = ({ isActive = false }) => {
  return (
    <section 
      id="slide10" 
      className={`min-h-screen w-full ${isActive ? 'block' : 'hidden'}`}
    >
      <div className="p-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
          데이터 요구사항
        </h2>
        
        <div className="space-y-8">
          {/* 데이터 원천 */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-800 dark:text-gray-200">
              <FontAwesomeIcon icon={faDatabase} className="mr-2" />
              데이터 원천
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {dataSources.map((source, index) => (
                <DataSourceCard key={index} source={source} />
              ))}
            </div>
          </div>
          
          {/* 데이터 처리 */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-800 dark:text-gray-200">
              <FontAwesomeIcon icon={faCogs} className="mr-2" />
              데이터 처리 요구사항
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {processingItems.map((item, index) => (
                <ProcessingCard key={index} item={item} />
              ))}
            </div>
          </div>
          
          {/* 데이터 품질 관리 */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-800 dark:text-gray-200">
              <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
              데이터 품질 관리
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {qualityMetrics.map((metric, index) => (
                <QualityMetricCard key={index} metric={metric} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12 space-x-4">
          <Link href="/main/main9/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center shadow-md transition-colors duration-300">
              이전 슬라이드로 돌아가기
              <FontAwesomeIcon icon={faArrowLeft} className="ml-2" />
            </button>
          </Link>
          <Link href="/main/main11/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center shadow-md transition-colors duration-300">
              다음 슬라이드로 이동
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
      
      <div className="mt-16 text-right text-gray-500 dark:text-gray-400">
        10 / 16
      </div>
    </section>
  );
};

export default DataRequirements;
