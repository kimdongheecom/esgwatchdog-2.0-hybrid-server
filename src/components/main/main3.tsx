import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTag,
  faSearch,
  faClipboardCheck,
  faFileAlt,
  faRocket,
  faLeaf,
  faBullhorn,
  faUserTie,
  faChartLine,
  faGavel,
  faArrowRight,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface ProjectOverviewProps {
  isActive?: boolean;
}

interface GoalItem {
  icon: any;
  text: string;
  subtext?: string;
  fullWidth?: boolean;
}

interface StakeholderItem {
  icon: any;
  text: string;
}

const goals: GoalItem[] = [
  {
    icon: faSearch,
    text: "실시간 ESG 이슈 감지·분류·위험도 평가"
  },
  {
    icon: faClipboardCheck,
    text: "자동화된 규제 정합성 분석",
    subtext: "(EU Taxonomy 등)"
  },
  {
    icon: faFileAlt,
    text: "GPT 기반 자연어 요약으로 보고서 초안(PDF/웹) 자동 생성",
    fullWidth: true
  }
];

const stakeholders: StakeholderItem[] = [
  { icon: faLeaf, text: "지속가능경영팀" },
  { icon: faBullhorn, text: "전략·홍보팀" },
  { icon: faUserTie, text: "임원" },
  { icon: faChartLine, text: "투자자" },
  { icon: faGavel, text: "정책 담당자" }
];

const ProjectOverview: React.FC<ProjectOverviewProps> = ({ isActive = false }) => {
  return (
    <section 
      id="slide3" 
      className={`min-h-screen w-full ${isActive ? 'block' : 'hidden'}`}
    >
      <div className="p-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
          프로젝트 개요
        </h2>
        
        {/* 프로젝트 명칭 */}
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon 
              icon={faTag} 
              className="text-2xl mr-3 text-blue-500"
            />
            <h3 className="text-xl font-semibold">
              프로젝트 명칭: {' '}
              <span className="text-blue-500">ESG Watchdog & Report Generator</span>
            </h3>
          </div>
        </div>
        
        {/* 목표 섹션 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">목표</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {goals.map((goal, index) => (
              <div 
                key={index}
                className={`bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md
                  ${goal.fullWidth ? 'md:col-span-2' : ''}`}
              >
                <div className="flex items-start">
                  <div className="mr-3">
                    <FontAwesomeIcon 
                      icon={goal.icon} 
                      className="text-2xl text-blue-500"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">{goal.text}</p>
                    {goal.subtext && (
                      <p className="text-sm text-gray-500 dark:text-gray-400">{goal.subtext}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 가치 제안 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">가치 제안</h3>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <FontAwesomeIcon 
                icon={faRocket} 
                className="text-3xl mr-4 text-blue-500"
              />
              <p className="font-medium text-gray-800 dark:text-gray-200">
                기존 평가사 대비 {' '}
                <span className="font-bold text-blue-500">데이터 반영 속도</span>
                (실시간), {' '}
                <span className="font-bold text-blue-500">행동 지향 인사이트</span> 
                {' '}제공
              </p>
            </div>
          </div>
        </div>
        
        {/* 이해관계자 */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            주요 이해관계자
          </h3>
          <div className="flex flex-wrap gap-4">
            {stakeholders.map((stakeholder, index) => (
              <div 
                key={index}
                className="flex items-center bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-md"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 mr-3">
                  <FontAwesomeIcon 
                    icon={stakeholder.icon} 
                    className="text-blue-500 dark:text-blue-300"
                  />
                </div>
                <span className="text-gray-800 dark:text-gray-200">
                  {stakeholder.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12 space-x-4">
          <Link href="/main/main2/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center shadow-md transition-colors duration-300">
              이전 슬라이드로 돌아가기
              <FontAwesomeIcon icon={faArrowLeft} className="ml-2" />
            </button>
          </Link>
          <Link href="/main/main4/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center shadow-md transition-colors duration-300">
              다음 슬라이드로 이동
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
      
      <div className="mt-16 text-right text-gray-500 dark:text-gray-400">
        3 / 16
      </div>
    </section>
  );
};

export default ProjectOverview;

