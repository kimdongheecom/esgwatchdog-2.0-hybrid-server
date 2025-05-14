import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDatabase,
  faBrain,
  faServer,
  faDesktop,
  faCloud,
  faBox,
  faSyncAlt,
  faArrowRight,
  faArrowLeft,
  faArrowDown
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

// 클라이언트 사이드에서만 mermaid 동작하도록 변경
let mermaid: any;
if (typeof window !== 'undefined') {
  import('mermaid').then((m) => {
    mermaid = m.default;
  });
}

interface TechArchitectureProps {
  isActive?: boolean;
}

interface TechLayer {
  icon: any;
  title: string;
  color: string;
  technologies: string[];
  consideration: string;
}

const techLayers: TechLayer[] = [
  {
    icon: faDatabase,
    title: "데이터 수집 계층",
    color: "blue",
    technologies: ["Scrapy", "Apache Airflow", "PostgreSQL"],
    consideration: "스케줄링 안정성, 확장성"
  },
  {
    icon: faBrain,
    title: "처리·분석 계층",
    color: "green",
    technologies: ["PyTorch", "LangChain", "HuggingFace", "Scikit-Learn"],
    consideration: "GPU 최적화, 모델 성능·속도 균형"
  },
  {
    icon: faServer,
    title: "API 계층",
    color: "orange",
    technologies: ["FastAPI", "Redis", "Celery"],
    consideration: "동시성 처리, 비동기 작업 관리"
  },
  {
    icon: faDesktop,
    title: "프론트엔드 계층",
    color: "purple",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Chart.js"],
    consideration: "반응형 디자인, 성능 최적화"
  }
];

interface DeploymentStep {
  icon: any;
  title: string;
  description: string;
}

const deploymentSteps: DeploymentStep[] = [
  {
    icon: faCloud,
    title: "클라우드 인프라",
    description: "AWS ECS + Fargate"
  },
  {
    icon: faBox,
    title: "컨테이너화",
    description: "Docker + Docker Compose"
  },
  {
    icon: faSyncAlt,
    title: "CI/CD",
    description: "GitHub Actions"
  }
];

const TechCard: React.FC<{ layer: TechLayer }> = ({ layer }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full">
    <div className={`flex items-center mb-4 text-${layer.color}-500 dark:text-${layer.color}-400`}>
      <div className={`w-12 h-12 bg-${layer.color}-100 dark:bg-${layer.color}-900/30 rounded-full flex items-center justify-center mr-4`}>
        <FontAwesomeIcon 
          icon={layer.icon} 
          className="text-2xl"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
        {layer.title}
      </h3>
    </div>
    
    <div className="space-y-4">
      <div>
        <span className="text-sm text-gray-600 dark:text-gray-400">기술 선택</span>
        <div className="flex flex-wrap gap-2 mt-2">
          {layer.technologies.map((tech, index) => (
            <span 
              key={index}
              className={`px-3 py-1 rounded-full text-sm bg-${layer.color}-100 dark:bg-${layer.color}-900/30 text-${layer.color}-700 dark:text-${layer.color}-300`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div>
        <span className="text-sm text-gray-600 dark:text-gray-400">고려사항</span>
        <p className="mt-1 text-gray-700 dark:text-gray-300">
          {layer.consideration}
        </p>
      </div>
    </div>
  </div>
);

const DeploymentFlow: React.FC = () => (
  <div className="mt-8">
    <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
      배포 전략
    </h3>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      {deploymentSteps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 w-full sm:flex-1 sm:max-w-[200px]">
            <div className="flex items-center mb-2">
              <FontAwesomeIcon 
                icon={step.icon} 
                className="text-xl mr-3 text-blue-500 dark:text-blue-400"
              />
              <span className="font-medium text-gray-800 dark:text-gray-200">
                {step.title}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {step.description}
            </p>
          </div>
          {index < deploymentSteps.length - 1 && (
            <FontAwesomeIcon 
              icon={index % 2 === 0 ? faArrowRight : faArrowDown} 
              className="text-gray-400 dark:text-gray-600 hidden sm:block"
            />
          )}
          {index < deploymentSteps.length - 1 && (
            <FontAwesomeIcon 
              icon={faArrowDown} 
              className="text-gray-400 dark:text-gray-600 block sm:hidden my-2"
            />
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

const TechArchitecture: React.FC<TechArchitectureProps> = ({ isActive = false }) => {
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
      id="slide9" 
      className={`min-h-screen w-full ${isActive ? 'block' : 'hidden'}`}
    >
      <div className="p-4 sm:p-8 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-center text-gray-800 dark:text-gray-100">
          기술·아키텍처 요구사항
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {techLayers.map((layer, index) => (
            <TechCard key={index} layer={layer} />
          ))}
        </div>
        
        <DeploymentFlow />

        <div className="flex flex-col sm:flex-row justify-center mt-8 sm:mt-12 space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/main/main8/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium flex items-center justify-center shadow-md transition-colors duration-300 w-full sm:w-auto">
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              이전 슬라이드로 돌아가기
            </button>
          </Link>
          <Link href="/main/main10/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium flex items-center justify-center shadow-md transition-colors duration-300 w-full sm:w-auto">
              다음 슬라이드로 이동
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
      
      <div className="mt-8 sm:mt-16 text-right text-gray-500 dark:text-gray-400 pr-4">
        9 / 16
      </div>
    </section>
  );
};

export default TechArchitecture;

        