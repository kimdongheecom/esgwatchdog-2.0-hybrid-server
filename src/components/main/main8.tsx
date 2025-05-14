import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDatabase,
  faRss,
  faFileAlt,
  faBrain,
  faSmile,
  faTags,
  faExclamationTriangle,
  faBalanceScale,
  faLeaf,
  faCheckCircle,
  faClipboardList,
  faFilePdf,
  faRobot,
  faSearchPlus,
  faFileExport,
  faTachometerAlt,
  faCommentDots,
  faBell,
  faChartLine,
  faArrowRight,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

// 클라이언트 사이드에서만 mermaid 동작하도록 변경
let mermaid: any;
if (typeof window !== 'undefined') {
  import('mermaid').then((m) => {
    mermaid = m.default;
  });
}

interface CoreFeaturesProps {
  isActive?: boolean;
}

interface FeatureItem {
  icon: any;
  title: string;
  subtitle?: string;
  label?: string;
}

const dataCollectionFeatures: FeatureItem[] = [
  {
    icon: faRss,
    title: "뉴스/공시 크롤러",
    subtitle: "RSS + 스크래핑, 하루 4회 배치"
  },
  {
    icon: faFileAlt,
    title: "PDF → 텍스트",
    subtitle: "OCR(Tesseract) 보강, 도표 부분 태그링"
  }
];

const aiAnalysisFeatures: FeatureItem[] = [
  {
    icon: faSmile,
    title: "감성 분석",
    subtitle: "KoBERT Fine-Tuned",
    label: "F1 ≥ 85%"
  },
  {
    icon: faTags,
    title: "ESG 영역 분류",
    subtitle: "BERT Multi-Label",
    label: "F1 ≥ 80%"
  },
  {
    icon: faExclamationTriangle,
    title: "위험도 점수화",
    subtitle: "룰 + ML 하이브리드 (상위 10% 이슈 재현)"
  }
];

const regulatoryFeatures: FeatureItem[] = [
  {
    icon: faLeaf,
    title: "EU Taxonomy 6대 환경 목표 매핑"
  },
  {
    icon: faCheckCircle,
    title: "DNSH(Do No Significant Harm) 룰 엔진"
  },
  {
    icon: faClipboardList,
    title: "부족·누락 항목 체크리스트 자동 생성"
  }
];

const reportFeatures: FeatureItem[] = [
  {
    icon: faRobot,
    title: "템플릿 기반 GPT 프롬프트",
    subtitle: "회사 명세·KPI 삽입"
  },
  {
    icon: faSearchPlus,
    title: "RAG(검색-생성 혼합) 파이프라인",
    subtitle: "데이터 사실성 강화"
  },
  {
    icon: faFileExport,
    title: "결과물: PDF, Web HTML, 이메일 요약"
  }
];

const dashboardFeatures: FeatureItem[] = [
  {
    icon: faCommentDots,
    title: "Next.js IFrame 구조 챗봇(Dify)"
  },
  {
    icon: faBell,
    title: "Slack/Email/API 이벤트 알림",
    subtitle: "위험도 4 이상"
  },
  {
    icon: faChartLine,
    title: "KPI 카드, 차트, 벤치마크 뷰"
  }
];

const FeatureCard: React.FC<{
  icon: any;
  title: string;
  items: FeatureItem[];
  fullWidth?: boolean;
}> = ({ icon, title, items, fullWidth }) => (
  <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${fullWidth ? 'w-full' : ''}`}>
    <div className="flex items-center mb-6">
      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
        <FontAwesomeIcon 
          icon={icon} 
          className="text-2xl text-blue-500 dark:text-blue-300"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
        {title}
      </h3>
    </div>
    
    <ul className={`space-y-4 ${fullWidth ? 'flex flex-wrap gap-4' : ''}`}>
      {items.map((item, index) => (
        <li key={index} className={`flex items-start ${fullWidth ? 'flex-1 min-w-[150px] sm:min-w-[200px]' : ''}`}>
          <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mr-3">
            <FontAwesomeIcon 
              icon={item.icon} 
              className="text-gray-600 dark:text-gray-300"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-medium text-gray-800 dark:text-gray-200">
                {item.title}
              </span>
              {item.label && (
                <span className="text-xs font-medium text-blue-500 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 px-2 py-0.5 rounded">
                  {item.label}
                </span>
              )}
            </div>
            {item.subtitle && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.subtitle}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const CoreFeatures: React.FC<CoreFeaturesProps> = ({ isActive = false }) => {
  useEffect(() => {
    if (isActive && typeof window !== 'undefined') {
      // mermaid가 로딩된 후에만 초기화 수행
      if (mermaid) {
        mermaid.initialize({
          startOnLoad: true,
          theme: 'neutral',
          flowchart: {
            curve: 'basis'
          }
        });
      } else {
        // mermaid가 아직 로딩되지 않았다면 로딩 후 초기화
        import('mermaid').then((m) => {
          mermaid = m.default;
          mermaid.initialize({
            startOnLoad: true,
            theme: 'neutral',
            flowchart: {
              curve: 'basis'
            }
          });
        });
      }
    }
  }, [isActive]);

  return (
    <section 
      id="slide8" 
      className={`min-h-screen w-full ${isActive ? 'block' : 'hidden'}`}
    >
      <div className="p-4 sm:p-8 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-center text-gray-800 dark:text-gray-100">
          핵심 기능 요구사항
        </h2>
        
        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          <FeatureCard 
            icon={faDatabase}
            title="1. 데이터 수집·전처리"
            items={dataCollectionFeatures}
            fullWidth
          />
          <FeatureCard 
            icon={faBrain}
            title="2. AI 분석"
            items={aiAnalysisFeatures}
            fullWidth
          />
          <FeatureCard 
            icon={faBalanceScale}
            title="3. 규제 정합성 평가"
            items={regulatoryFeatures}
            fullWidth
          />
          <FeatureCard 
            icon={faFilePdf}
            title="4. 보고서 자동 생성"
            items={reportFeatures}
            fullWidth
          />
          <FeatureCard 
            icon={faTachometerAlt}
            title="5. 대시보드 & 알림"
            items={dashboardFeatures}
            fullWidth
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-center mt-8 sm:mt-12 space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/main/main7/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium flex items-center justify-center shadow-md transition-colors duration-300 w-full sm:w-auto">
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              이전 슬라이드로 돌아가기
            </button>
          </Link>
          <Link href="/main/main9/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium flex items-center justify-center shadow-md transition-colors duration-300 w-full sm:w-auto">
              다음 슬라이드로 이동
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
      
      <div className="mt-8 sm:mt-16 text-right text-gray-500 dark:text-gray-400 pr-4">
        8 / 16
      </div>
    </section>
  );
};

export default CoreFeatures;

