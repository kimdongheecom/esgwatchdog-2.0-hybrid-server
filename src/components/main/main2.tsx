"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faProjectDiagram,
  faBullseye,
  faExclamationTriangle,
  faUsers,
  faBorderAll,
  faCogs,
  faServer,
  faDatabase,
  faPuzzlePiece,
  faMap,
  faShieldAlt,
  faChartLine,
  faFileContract,
  faBook,
  faArrowRight,
  faArrowLeft,
  faHome
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface TableOfContentsProps {
  isActive?: boolean;
}

interface TocItem {
  icon: any;
  number: string;
  text: string;
}

const tocItems: TocItem[] = [
  { icon: faProjectDiagram, number: "1", text: "프로젝트 개요" },
  { icon: faBullseye, number: "2", text: "비즈니스 목표" },
  { icon: faExclamationTriangle, number: "3", text: "현행 문제점 요약" },
  { icon: faUsers, number: "4", text: "이해관계자·사용자 요구" },
  { icon: faBorderAll, number: "5", text: "시스템 범위" },
  { icon: faCogs, number: "6", text: "핵심 기능 요구사항" },
  { icon: faServer, number: "7", text: "기술·아키텍처 요구사항" },
  { icon: faDatabase, number: "8", text: "데이터 요구사항" },
  { icon: faPuzzlePiece, number: "9", text: "비기능 요구사항" },
  { icon: faMap, number: "10", text: "MVP 로드맵 및 일정" },
  { icon: faShieldAlt, number: "11", text: "위험 요소 및 완화 전략" },
  { icon: faChartLine, number: "12", text: "성공 지표(KPI)" },
  { icon: faFileContract, number: "13", text: "CTO 요청 PRD 범위" },
  { icon: faBook, number: "14", text: "용어 정리" }
];

const TableOfContents: React.FC<TableOfContentsProps> = ({ isActive = false }) => {
  return (
    <section 
      id="slide2" 
      className={`min-h-screen w-full ${isActive ? 'block' : 'hidden'}`}
    >
      <div className="p-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">
          목차
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tocItems.map((item, index) => (
            <div 
              key={index}
              className="flex items-center space-x-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <FontAwesomeIcon 
                  icon={item.icon} 
                  className="text-blue-500 dark:text-blue-300 text-xl"
                />
              </div>
              <span className="text-gray-600 dark:text-gray-400 font-medium min-w-[2rem]">
                {item.number}.
              </span>
              <span className="text-gray-800 dark:text-gray-200 font-medium">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 space-x-4">
          <Link href="/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center shadow-md transition-colors duration-300">
              타이틀 슬라이드로 돌아가기
              <FontAwesomeIcon icon={faArrowLeft} className="ml-2" />
            </button>
          </Link>
          <Link href="/main/main3/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center shadow-md transition-colors duration-300">
              다음 슬라이드로 이동
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
      
      <div className="mt-16 text-right text-gray-500 dark:text-gray-400">
        2 / 16
      </div>
    </section>
  );
};

export default TableOfContents;

