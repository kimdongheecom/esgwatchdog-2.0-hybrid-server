import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faBalanceScale,
  faFileAlt,
  faBook,
  faLongArrowAltRight,
  faExclamationCircle,
  faArrowRight,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface CurrentIssuesProps {
  isActive?: boolean;
}

interface IssueItem {
  icon: any;
  title: string;
  description: string;
  effect: string[];
}

const issues: IssueItem[] = [
  {
    icon: faSearch,
    title: "반복적 뉴스 수집·분류",
    description: "매년 수십 건 수동 리서치",
    effect: ["리드타임 증가", "인력 낭비"]
  },
  {
    icon: faBalanceScale,
    title: "중대성 평가 주관성",
    description: "회의·설문 의존",
    effect: ["객관성", "재현성 부족"]
  },
  {
    icon: faFileAlt,
    title: "보고서 문구 반복 작성",
    description: `"환경 리스크 관리 강화…" 등 템플릿 없음`,
    effect: ["품질", "일관성 저하"]
  },
  {
    icon: faBook,
    title: "규제 해석 부담",
    description: "EU Taxonomy·CSRD 등 상시 변동",
    effect: ["컴플라이언스 리스크"]
  }
];

const IssueRow: React.FC<{ issue: IssueItem }> = ({ issue }) => (
  <div className="flex items-center mb-6 last:mb-0">
    {/* 문제점 카드 */}
    <div className="w-[42%] bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
          <FontAwesomeIcon 
            icon={issue.icon} 
            className="text-xl text-blue-500 dark:text-blue-300"
          />
        </div>
        <div>
          <h3 className="font-semibold mb-1 text-gray-800 dark:text-gray-200">
            {issue.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {issue.description}
          </p>
        </div>
      </div>
    </div>

    {/* 화살표 */}
    <div className="mx-4 text-gray-400 dark:text-gray-500">
      <FontAwesomeIcon 
        icon={faLongArrowAltRight} 
        className="text-2xl"
      />
    </div>

    {/* 영향 박스 */}
    <div className="w-[40%] bg-red-50 dark:bg-red-900/20 rounded-lg p-3">
      <div className="flex items-center">
        <FontAwesomeIcon 
          icon={faExclamationCircle} 
          className="text-xl mr-3 text-red-500 dark:text-red-400"
        />
        <p className="text-gray-800 dark:text-gray-200">
          {issue.effect.map((item, index) => (
            <React.Fragment key={index}>
              <strong>{item}</strong>
              {index < issue.effect.length - 1 && " · "}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  </div>
);

const CurrentIssues: React.FC<CurrentIssuesProps> = ({ isActive = false }) => {
  return (
    <section 
      id="slide5" 
      className={`min-h-screen w-full ${isActive ? 'block' : 'hidden'}`}
    >
      <div className="p-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
          현행 문제점 요약
        </h2>
        
        <div className="space-y-6">
          {issues.map((issue, index) => (
            <IssueRow key={index} issue={issue} />
          ))}
        </div>

        <div className="flex justify-center mt-12 space-x-4">
          <Link href="/main/main4/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center shadow-md transition-colors duration-300">
              이전 슬라이드로 돌아가기
              <FontAwesomeIcon icon={faArrowLeft} className="ml-2" />
            </button>
          </Link>
          <Link href="/main/main6/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center shadow-md transition-colors duration-300">
              다음 슬라이드로 이동
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
      
      <div className="mt-16 text-right text-gray-500 dark:text-gray-400">
        5 / 16
      </div>
    </section>
  );
};

export default CurrentIssues;

