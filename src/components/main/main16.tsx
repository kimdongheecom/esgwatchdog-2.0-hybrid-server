"use client";

import { useEffect } from "react";
import Link from "next/link";

interface Main16Props {
  isActive?: boolean;
}

const Main16: React.FC<Main16Props> = ({ isActive = false }) => {
  useEffect(() => {
    // Font Awesome을 동적으로 로드
    const loadFontAwesome = async () => {
      const link = document.createElement("link");
      link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    };
    
    loadFontAwesome();
  }, []);

  return (
    <section id="slide16" className={`min-h-screen flex flex-col justify-center items-center p-4 bg-white dark:bg-gray-900 ${isActive ? 'block' : 'hidden'}`}>
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-bold mb-10 text-center text-black dark:text-white">요약 및 핵심 포인트</h1>
        
        <div className="space-y-6 mb-12">
          {/* 요약 포인트 1 */}
          <div className="relative border-l-4 border-blue-500 pl-10 py-4 ml-4">
            <div className="absolute -left-6 top-4 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xl">
              1
            </div>
            <p className="text-lg text-gray-800 dark:text-gray-200">
              ESG Watchdog & Report Generator는 <strong>실시간 이슈 탐지</strong>, <strong>자동 규제 정합성 평가</strong>, <strong>보고서 자동 생성</strong>을 AI로 통합한 시스템
            </p>
          </div>
          
          {/* 요약 포인트 2 */}
          <div className="relative border-l-4 border-blue-500 pl-10 py-4 ml-4">
            <div className="absolute -left-6 top-4 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xl">
              2
            </div>
            <p className="text-lg text-gray-800 dark:text-gray-200">
              이슈 탐지 시간 <strong>90% 단축</strong>, 보고서 작성 공수 <strong>70% 절감</strong>으로 운영 효율성 극대화
            </p>
          </div>
          
          {/* 요약 포인트 3 */}
          <div className="relative border-l-4 border-blue-500 pl-10 py-4 ml-4">
            <div className="absolute -left-6 top-4 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xl">
              3
            </div>
            <p className="text-lg text-gray-800 dark:text-gray-200">
              기존 평가사 대비 <strong>실시간성</strong>과 <strong>행동 지향 인사이트</strong> 제공으로 의사결정 리드타임 단축
            </p>
          </div>
          
          {/* 요약 포인트 4 */}
          <div className="relative border-l-4 border-blue-500 pl-10 py-4 ml-4">
            <div className="absolute -left-6 top-4 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xl">
              4
            </div>
            <p className="text-lg text-gray-800 dark:text-gray-200">
              BERT 기반 AI 모델과 RAG 파이프라인으로 <strong>정확도와 사실성</strong> 모두 확보
            </p>
          </div>
        </div>
        
        {/* Q&A 섹션 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-500 mb-4 text-center">질문 있으신가요?</h2>
          <p className="text-center text-gray-700 dark:text-gray-300 mb-8">
            ESG Watchdog & Report Generator에 대한 추가 질문이나 논의가 필요하신 부분을 말씀해 주세요.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <i className="fas fa-envelope text-white"></i>
              </div>
              <span className="text-gray-700 dark:text-gray-300">charmjinmean@gmail.com</span>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <i className="fas fa-comment text-white"></i>
              </div>
              <span className="text-gray-700 dark:text-gray-300">Discord : gimjinmin6531</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-12 space-x-4">
          <Link href="/main/main15/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center shadow-md transition-colors duration-300">
              이전 슬라이드로 돌아가기
              <i className="fas fa-arrow-left ml-2"></i>
            </button>
          </Link>
        </div>
        
        <div className="text-right text-gray-500 dark:text-gray-400">
          16 / 16
        </div>
      </div>
    </section>
  );
};

export default Main16;
