"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface Main11Props {
  isActive?: boolean;
}

const Main11: React.FC<Main11Props> = ({ isActive = false }) => {
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
    <section id="slide11" className={`min-h-screen flex flex-col justify-center items-center p-4 bg-white dark:bg-gray-900 ${isActive ? 'block' : 'hidden'}`}>
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-bold mb-12 text-center text-black dark:text-white">비기능 요구사항</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* 성능 요구사항 */}
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center text-blue-500">
              <i className="fas fa-tachometer-alt mr-3 text-blue-500 text-3xl"></i>
              성능
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b pb-4">
                <span className="text-gray-700 dark:text-gray-300 font-medium">응답시간</span>
                <span className="text-gray-900 dark:text-gray-100 font-bold text-right">대시보드 컴포넌트 로드 ≤ 1.5초</span>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <span className="text-gray-700 dark:text-gray-300 font-medium">처리량</span>
                <span className="text-gray-900 dark:text-gray-100 font-bold text-right">뉴스 데이터 500건/시간</span>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <span className="text-gray-700 dark:text-gray-300 font-medium">동시 사용자</span>
                <span className="text-gray-900 dark:text-gray-100 font-bold text-right">최대 100명 동시 접속</span>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <span className="text-gray-700 dark:text-gray-300 font-medium">리포트 생성 시간</span>
                <span className="text-gray-900 dark:text-gray-100 font-bold text-right">≤ 30초 (20페이지 기준)</span>
              </div>
            </div>
          </div>
          
          {/* 보안 요구사항 */}
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center text-blue-500">
              <i className="fas fa-shield-alt mr-3 text-blue-500 text-3xl"></i>
              보안
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b pb-4">
                <span className="text-gray-700 dark:text-gray-300 font-medium">인증</span>
                <span className="text-gray-900 dark:text-gray-100 font-bold text-right">SSO, MFA 지원</span>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <span className="text-gray-700 dark:text-gray-300 font-medium">암호화</span>
                <span className="text-gray-900 dark:text-gray-100 font-bold text-right">전송 중(TLS 1.3) / 저장 시(AES-256)</span>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <span className="text-gray-700 dark:text-gray-300 font-medium">접근 제어</span>
                <span className="text-gray-900 dark:text-gray-100 font-bold text-right">RBAC (역할 기반 액세스 제어)</span>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <span className="text-gray-700 dark:text-gray-300 font-medium">감사</span>
                <span className="text-gray-900 dark:text-gray-100 font-bold text-right">모든 데이터 접근/수정 로깅</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 mb-8">
          <h2 className="text-2xl font-bold mb-8 flex items-center text-blue-500">
            <i className="fas fa-check-circle mr-3 text-blue-500 text-3xl"></i>
            우선순위
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-20 font-medium text-gray-700 dark:text-gray-300">보안</div>
              <div className="flex-1 h-6 bg-gray-200 dark:bg-gray-700 mx-4">
                <div className="h-full bg-blue-500" style={{ width: "90%" }}></div>
              </div>
              <div className="w-16 text-right text-blue-500 font-bold">90%</div>
            </div>
            
            <div className="flex items-center">
              <div className="w-20 font-medium text-gray-700 dark:text-gray-300">성능</div>
              <div className="flex-1 h-6 bg-gray-200 dark:bg-gray-700 mx-4">
                <div className="h-full bg-blue-500" style={{ width: "85%" }}></div>
              </div>
              <div className="w-16 text-right text-blue-500 font-bold">85%</div>
            </div>
            
            <div className="flex items-center">
              <div className="w-20 font-medium text-gray-700 dark:text-gray-300">가용성</div>
              <div className="flex-1 h-6 bg-gray-200 dark:bg-gray-700 mx-4">
                <div className="h-full bg-blue-500" style={{ width: "80%" }}></div>
              </div>
              <div className="w-16 text-right text-blue-500 font-bold">80%</div>
            </div>
            
            <div className="flex items-center">
              <div className="w-20 font-medium text-gray-700 dark:text-gray-300">확장성</div>
              <div className="flex-1 h-6 bg-gray-200 dark:bg-gray-700 mx-4">
                <div className="h-full bg-blue-500" style={{ width: "75%" }}></div>
              </div>
              <div className="w-16 text-right text-blue-500 font-bold">75%</div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-12 space-x-4">
          <Link href="/main/main10/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center shadow-md transition-colors duration-300">
              이전 슬라이드로 돌아가기
              <FontAwesomeIcon icon={faArrowLeft} className="ml-2" />
            </button>
          </Link>
          <Link href="/main/main12/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center shadow-md transition-colors duration-300">
              다음 슬라이드로 이동
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
          </Link>
        </div>
        
        <div className="mt-16 text-right text-gray-500 dark:text-gray-400">
          11 / 16
        </div>
      </div>
    </section>
  );
};

export default Main11;
