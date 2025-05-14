"use client";

import { useEffect } from "react";
import Link from "next/link";

interface Main14Props {
  isActive?: boolean;
}

const Main14: React.FC<Main14Props> = ({ isActive = false }) => {
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
    <section id="slide14" className={`min-h-screen flex flex-col justify-center items-center p-4 bg-white dark:bg-gray-900 ${isActive ? 'block' : 'hidden'}`}>
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-bold mb-10 text-center text-black dark:text-white">성공 지표 (KPI)</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 이슈 탐지 정확도 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <i className="fas fa-bullseye text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">이슈 탐지 정확도 (F1)</h3>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-4">
                {/* 원형 게이지 배경 */}
                <div className="absolute inset-0 rounded-full border-8 border-gray-200 dark:border-gray-700"></div>
                {/* 원형 게이지 채워진 부분 (85% 부분) */}
                <div className="absolute inset-0 rounded-full border-8 border-blue-500" style={{ 
                  clipPath: 'polygon(50% 50%, 0 0, 0 50%, 0 100%, 50% 100%, 100% 100%, 100% 50%, 100% 0, 75% 0)' 
                }}></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-blue-500">85%</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">목표</span>
                </div>
              </div>
              
              <p className="text-center text-gray-600 dark:text-gray-300 mt-2">
                머신러닝 모델 성능 평가 지표<br />높을수록 탐지 정확도 향상
              </p>
            </div>
          </div>
          
          {/* 보고서 초안 완성 시간 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <i className="fas fa-clock text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">보고서 초안 완성 시간</h3>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold text-blue-500 mb-1">≤ 10분</div>
              <p className="text-gray-500 dark:text-gray-400 mb-6">(PDF 30페이지 기준)</p>
              
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-6 mb-2">
                <div className="bg-blue-500 h-6 rounded-full" style={{ width: '85%' }}></div>
              </div>
              
              <div className="flex justify-between w-full text-sm">
                <span className="text-gray-600 dark:text-gray-300">0분</span>
                <span className="text-blue-500 font-bold">10분</span>
                <span className="text-gray-600 dark:text-gray-300">20분</span>
              </div>
            </div>
          </div>
          
          {/* 사용자 만족도 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <i className="fas fa-smile text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">사용자 만족도</h3>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold text-blue-500 mb-1">≥ 4.5/5</div>
              <p className="text-gray-500 dark:text-gray-400 mb-6">(분기 NPS 기준)</p>
              
              <div className="flex space-x-2">
                <i className="fas fa-star text-blue-500 text-3xl"></i>
                <i className="fas fa-star text-blue-500 text-3xl"></i>
                <i className="fas fa-star text-blue-500 text-3xl"></i>
                <i className="fas fa-star text-blue-500 text-3xl"></i>
                <i className="fas fa-star-half-alt text-blue-500 text-3xl"></i>
              </div>
            </div>
          </div>
          
          {/* 규제 누락 Rate */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <i className="fas fa-check-circle text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">규제 누락 Rate</h3>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold text-blue-500 mb-1">0%</div>
              <p className="text-gray-500 dark:text-gray-400 mb-6">(사내 QA 통과 기준)</p>
              
              <div className="w-32 h-32 rounded-full border-8 border-green-500 flex items-center justify-center">
                <i className="fas fa-check text-green-500 text-4xl"></i>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-12 space-x-4">
          <Link href="/main/main13/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center shadow-md transition-colors duration-300">
              이전 슬라이드로 돌아가기
              <i className="fas fa-arrow-left ml-2"></i>
            </button>
          </Link>
          <Link href="/main/main15/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center shadow-md transition-colors duration-300">
              다음 슬라이드로 이동
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </Link>
        </div>
        
        <div className="mt-12 text-right text-gray-500 dark:text-gray-400">
          14 / 16
        </div>
      </div>
    </section>
  );
};

export default Main14;
