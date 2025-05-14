"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface Main12Props {
  isActive?: boolean;
}

const Main12: React.FC<Main12Props> = ({ isActive = false }) => {
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
    <section id="slide12" className={`min-h-screen flex flex-col justify-center items-center p-4 bg-white dark:bg-gray-900 ${isActive ? 'block' : 'hidden'}`}>
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-bold mb-12 text-center text-black dark:text-white">MVP 로드맵 및 일정</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {/* 1. 데이터 수집 파이프라인 */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <div className="bg-blue-500 text-white py-4 px-5 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-white text-blue-500 flex items-center justify-center font-bold mr-3">
                  1
                </div>
                <h3 className="text-xl font-bold">데이터 수집 파이프라인</h3>
              </div>
              <div className="bg-blue-400 px-3 py-1 rounded-full text-sm font-semibold">6주</div>
            </div>
            <div className="p-5">
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-500 mr-2"></i>
                  <span>크롤러 개발 (뉴스/공시)</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-500 mr-2"></i>
                  <span>DB 스키마 설계</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-500 mr-2"></i>
                  <span>Airflow 워크플로우 구성</span>
                </li>
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">주요 목표</p>
                <p className="text-center font-medium">시간당 300건 이상 수집</p>
              </div>
            </div>
          </div>
          
          {/* 2. AI 분석 모델 구축 */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <div className="bg-blue-500 text-white py-4 px-5 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-white text-blue-500 flex items-center justify-center font-bold mr-3">
                  2
                </div>
                <h3 className="text-xl font-bold">AI 분석 모델 구축</h3>
              </div>
              <div className="bg-blue-400 px-3 py-1 rounded-full text-sm font-semibold">8주</div>
            </div>
            <div className="p-5">
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-500 mr-2"></i>
                  <span>ESG 분류 모델 튜닝</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-500 mr-2"></i>
                  <span>감성 분석 모델 개발</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-500 mr-2"></i>
                  <span>위험도 계산 알고리즘</span>
                </li>
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">주요 목표</p>
                <p className="text-center font-medium">F1 스코어 80% 이상</p>
              </div>
            </div>
          </div>
          
          {/* 3. 백엔드 API */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <div className="bg-blue-500 text-white py-4 px-5 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-white text-blue-500 flex items-center justify-center font-bold mr-3">
                  3
                </div>
                <h3 className="text-xl font-bold">백엔드 API</h3>
              </div>
              <div className="bg-blue-400 px-3 py-1 rounded-full text-sm font-semibold">5주</div>
            </div>
            <div className="p-5">
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-500 mr-2"></i>
                  <span>FastAPI 엔드포인트 구축</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-500 mr-2"></i>
                  <span>비동기 작업 큐</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-500 mr-2"></i>
                  <span>인증/권한 시스템</span>
                </li>
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">주요 목표</p>
                <p className="text-center font-medium">응답시간 ≤ 500ms</p>
              </div>
            </div>
          </div>
          
          {/* 4. 프론트엔드 대시보드 */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <div className="bg-blue-500 text-white py-4 px-5 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-white text-blue-500 flex items-center justify-center font-bold mr-3">
                  4
                </div>
                <h3 className="text-xl font-bold">프론트엔드 대시보드</h3>
              </div>
              <div className="bg-blue-400 px-3 py-1 rounded-full text-sm font-semibold">7주</div>
            </div>
            <div className="p-5">
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-500 mr-2"></i>
                  <span>Next.js 컴포넌트 개발</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-500 mr-2"></i>
                  <span>데이터 시각화 차트</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-500 mr-2"></i>
                  <span>반응형 UI</span>
                </li>
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">주요 목표</p>
                <p className="text-center font-medium">사용성 테스트 80점</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* 전체 일정 */}
        <div className="mt-8 mb-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-black dark:text-white">전체 일정</h3>
            <div className="bg-blue-500 text-white px-4 py-1 rounded font-medium text-sm">총 6개월</div>
          </div>
          
          <div className="relative h-12 bg-gray-200 dark:bg-gray-700 rounded-full w-full mb-8">
            <div className="absolute left-0 top-0 h-full bg-blue-500 rounded-l-full" style={{ width: "25%" }}></div>
            
            <div className="absolute top-0 left-[10%] flex flex-col items-center">
              <div className="w-4 h-4 bg-white border-2 border-blue-500 rounded-full z-10"></div>
            </div>
            
            <div className="absolute top-0 left-[30%] flex flex-col items-center">
              <div className="w-4 h-4 bg-white border-2 border-blue-500 rounded-full z-10"></div>
            </div>
            
            <div className="absolute top-0 left-[60%] flex flex-col items-center">
              <div className="w-4 h-4 bg-white border-2 border-blue-500 rounded-full z-10"></div>
            </div>
            
            <div className="absolute top-0 left-[90%] flex flex-col items-center">
              <div className="w-4 h-4 bg-white border-2 border-blue-500 rounded-full z-10"></div>
            </div>
          </div>
          
          <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-400">
            <div className="text-center" style={{ width: "20%" }}>기획</div>
            <div className="text-center" style={{ width: "20%" }}>개발</div>
            <div className="text-center" style={{ width: "20%" }}>테스트</div>
            <div className="text-center" style={{ width: "20%" }}>배포</div>
          </div>
        </div>
        
        <div className="flex justify-center mt-12 space-x-4">
          <Link href="/main/main11/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center shadow-md transition-colors duration-300">
              이전 슬라이드로 돌아가기
              <FontAwesomeIcon icon={faArrowLeft} className="ml-2" />
            </button>
          </Link>
          <Link href="/main/main13/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center shadow-md transition-colors duration-300">
              다음 슬라이드로 이동
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
          </Link>
        </div>
        
        <div className="mt-12 text-right text-gray-500 dark:text-gray-400">
          12 / 16
        </div>
      </div>
    </section>
  );
};

export default Main12;
