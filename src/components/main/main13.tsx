"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface Main13Props {
  isActive?: boolean;
}

const Main13: React.FC<Main13Props> = ({ isActive = false }) => {
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
    <section id="slide13" className={`min-h-screen flex flex-col justify-center items-center p-4 bg-white dark:bg-gray-900 ${isActive ? 'block' : 'hidden'}`}>
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-bold mb-10 text-center text-black dark:text-white">위험 요소 및 완화 전략</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 규제 변경 빈도 */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <i className="fas fa-balance-scale text-red-500 text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">규제 변경 빈도</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">EU Taxonomy, CSRD 등 지속적 업데이트</p>
              </div>
            </div>
            
            <div className="mb-5">
              <p className="text-xs text-gray-500 uppercase mb-2 dark:text-gray-400">영향</p>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <p className="text-gray-800 dark:text-gray-200">룰 업데이트 부담 증가</p>
              </div>
            </div>
            
            <div>
              <p className="font-medium flex items-center mb-3 text-gray-800 dark:text-gray-200">
                <i className="fas fa-shield-alt text-blue-500 mr-2"></i>
                대응 전략
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 pl-5">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
                  <span>룰 엔진 모듈화 설계</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
                  <span>규제별 버전 관리 시스템 도입</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
                  <span>외부 API 연동으로 자동 업데이트</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* LLM 비용 상승 */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <i className="fas fa-chart-line text-yellow-500 text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">LLM 비용 상승</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">OpenAI 등 API 가격 정책 변동</p>
              </div>
            </div>
            
            <div className="mb-5">
              <p className="text-xs text-gray-500 uppercase mb-2 dark:text-gray-400">영향</p>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
                <p className="text-gray-800 dark:text-gray-200">운영 예산 초과 위험</p>
              </div>
            </div>
            
            <div>
              <p className="font-medium flex items-center mb-3 text-gray-800 dark:text-gray-200">
                <i className="fas fa-shield-alt text-blue-500 mr-2"></i>
                대응 전략
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 pl-5">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
                  <span>응답 캐싱 시스템 도입</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
                  <span>요약 단계 최적화로 토큰 비용 절감</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
                  <span>자체 호스팅 오픈소스 LLM 대안 검토</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* 데이터 품질 불균형 */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <i className="fas fa-database text-blue-500 text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">데이터 품질 불균형</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">E/S/G 영역별 학습 데이터 편차</p>
              </div>
            </div>
            
            <div className="mb-5">
              <p className="text-xs text-gray-500 uppercase mb-2 dark:text-gray-400">영향</p>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                <p className="text-gray-800 dark:text-gray-200">모델 결과 편향 및 성능 저하</p>
              </div>
            </div>
            
            <div>
              <p className="font-medium flex items-center mb-3 text-gray-800 dark:text-gray-200">
                <i className="fas fa-shield-alt text-blue-500 mr-2"></i>
                대응 전략
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 pl-5">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
                  <span>균형적 훈련 데이터 샘플링 기법 적용</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
                  <span>영역별 모델 앙상블 접근법 개발</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
                  <span>데이터 증강 기법으로 희소 카테고리 보강</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* GPU 자원 부족 */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <i className="fas fa-microchip text-green-500 text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">GPU 자원 부족</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">온프레미스 자원 한계 도달</p>
              </div>
            </div>
            
            <div className="mb-5">
              <p className="text-xs text-gray-500 uppercase mb-2 dark:text-gray-400">영향</p>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <p className="text-gray-800 dark:text-gray-200">처리 지연 및 서비스 병목</p>
              </div>
            </div>
            
            <div>
              <p className="font-medium flex items-center mb-3 text-gray-800 dark:text-gray-200">
                <i className="fas fa-shield-alt text-blue-500 mr-2"></i>
                대응 전략
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 pl-5">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
                  <span>CPU 기반 경량화 BERT 모델 준비</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
                  <span>자동 배치 처리 Fallback 매커니즘</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
                  <span>클라우드 GPU 하이브리드 운영 옵션</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-12 space-x-4">
          <Link href="/main/main12/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center shadow-md transition-colors duration-300">
              이전 슬라이드로 돌아가기
              <FontAwesomeIcon icon={faArrowLeft} className="ml-2" />
            </button>
          </Link>
          <Link href="/main/main14/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center shadow-md transition-colors duration-300">
              다음 슬라이드로 이동
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
          </Link>
        </div>
        
        <div className="mt-12 text-right text-gray-500 dark:text-gray-400">
          13 / 16
        </div>
      </div>
    </section>
  );
};

export default Main13;
