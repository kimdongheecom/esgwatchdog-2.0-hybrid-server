"use client";

import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';

interface TitleSlideProps {
  isActive?: boolean;
}

const TitleSlide: React.FC<TitleSlideProps> = ({ isActive = true }) => {
  useEffect(() => {
    console.log("Hero 컴포넌트가 마운트되었습니다.");
  }, []);

  return (
    <section 
      id="slide1" 
      className={`min-h-screen w-full ${isActive ? 'block' : 'hidden'}`}
    >
      <div className="flex flex-col items-center justify-center py-16">
        <div className="text-4xl text-blue-400 mb-6">
          <FontAwesomeIcon icon={faShieldAlt} />
        </div>
        
        <h1 className="text-6xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          ESG Watchdog &amp; Report Generator
        </h1>
        
        <h2 className="text-3xl font-medium mb-12 text-blue-500 opacity-90">
          ESG 보고서 생성 자동화 시스템
        </h2>
        
        <div className="mt-8 flex items-center justify-center">
          <div className="bg-gray-100 dark:bg-gray-800 px-8 py-4 rounded-lg shadow-md">
            <p className="mb-2 text-xl text-gray-800 dark:text-gray-200">
              지속가능경영팀
            </p>
            <p className="text-gray-500 dark:text-gray-400 flex items-center">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              2025년 5월 13일
            </p>
          </div>
        </div>
        
        <div className="mt-12">
          <Link href="/main/main2/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center shadow-md transition-colors duration-300">
              다음 슬라이드로 이동
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-4 right-4 text-gray-500 dark:text-gray-400">
        1 / 16
      </div>
    </section>
  );
};

export default TitleSlide;

