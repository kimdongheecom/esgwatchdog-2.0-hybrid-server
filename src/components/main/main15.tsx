"use client";

import { useEffect } from "react";
import Link from "next/link";

interface Main15Props {
  isActive?: boolean;
}

const Main15: React.FC<Main15Props> = ({ isActive = false }) => {
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
    <section id="slide15" className={`min-h-screen flex flex-col justify-center items-center p-4 bg-white dark:bg-gray-900 ${isActive ? 'block' : 'hidden'}`}>
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-bold mb-10 text-center text-black dark:text-white">CTO에게 요청할 공식 PRD 범위</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* 기능 정의 상세화 */}
          <div className="relative border-l-4 border-blue-500 pl-6 pr-4 py-4 bg-white dark:bg-gray-800 rounded-r-lg shadow-sm">
            <div className="absolute -left-4 top-4 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-500 flex items-center justify-center font-bold text-lg">
              1
            </div>
            <div className="flex items-start mb-3">
              <div className="flex-shrink-0 mr-3 mt-1">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                  <i className="fas fa-puzzle-piece text-blue-500"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">기능 정의 상세화</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 pl-14 text-right">
              핵심 기능을 각 세부 유즈케이스로 전개<br />
              기능별 입/출력 정의 및 우선순위 분류
            </p>
          </div>
          
          {/* 기술 스택 확정 */}
          <div className="relative border-l-4 border-blue-500 pl-6 pr-4 py-4 bg-white dark:bg-gray-800 rounded-r-lg shadow-sm">
            <div className="absolute -left-4 top-4 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-500 flex items-center justify-center font-bold text-lg">
              2
            </div>
            <div className="flex items-start mb-3">
              <div className="flex-shrink-0 mr-3 mt-1">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                  <i className="fas fa-layer-group text-blue-500"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">기술 스택 확정</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 pl-14 text-right">
              GPU/CPU 자원 배분, 모델 호스팅 방식 결정<br />
              확장성을 고려한 아키텍처 구조 명세
            </p>
          </div>
          
          {/* 데이터 거버넌스 플랜 */}
          <div className="relative border-l-4 border-blue-500 pl-6 pr-4 py-4 bg-white dark:bg-gray-800 rounded-r-lg shadow-sm">
            <div className="absolute -left-4 top-4 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-500 flex items-center justify-center font-bold text-lg">
              3
            </div>
            <div className="flex items-start mb-3">
              <div className="flex-shrink-0 mr-3 mt-1">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                  <i className="fas fa-database text-blue-500"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">데이터 거버넌스 플랜</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 pl-14 text-right">
              수집 데이터 라이선스 검토, PII 관리 정책<br />
              데이터 품질 관리 및 백업/복구 전략
            </p>
          </div>
          
          {/* 개발·운영 조직 구조 */}
          <div className="relative border-l-4 border-blue-500 pl-6 pr-4 py-4 bg-white dark:bg-gray-800 rounded-r-lg shadow-sm">
            <div className="absolute -left-4 top-4 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-500 flex items-center justify-center font-bold text-lg">
              4
            </div>
            <div className="flex items-start mb-3">
              <div className="flex-shrink-0 mr-3 mt-1">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                  <i className="fas fa-users-cog text-blue-500"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">개발·운영 조직 구조</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 pl-14 text-right">
              AI팀·데이터팀·FE팀 역할 정의 및 협업 방식<br />
              Agile/DevOps 접근법 적용 계획
            </p>
          </div>
          
          {/* 예산·인력 산정 */}
          <div className="relative border-l-4 border-blue-500 pl-6 pr-4 py-4 bg-white dark:bg-gray-800 rounded-r-lg shadow-sm">
            <div className="absolute -left-4 top-4 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-500 flex items-center justify-center font-bold text-lg">
              5
            </div>
            <div className="flex items-start mb-3">
              <div className="flex-shrink-0 mr-3 mt-1">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                  <i className="fas fa-chart-pie text-blue-500"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">예산·인력 산정</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 pl-14 text-right">
              클라우드/온프레미스 비용 비교 분석<br />
              필요 FTE 인원 산정 및 단계별 투입 계획
            </p>
          </div>
          
          {/* 상세 일정(Gantt)·마일스톤 */}
          <div className="relative border-l-4 border-blue-500 pl-6 pr-4 py-4 bg-white dark:bg-gray-800 rounded-r-lg shadow-sm">
            <div className="absolute -left-4 top-4 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-500 flex items-center justify-center font-bold text-lg">
              6
            </div>
            <div className="flex items-start mb-3">
              <div className="flex-shrink-0 mr-3 mt-1">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                  <i className="fas fa-calendar-alt text-blue-500"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">상세 일정(Gantt)·마일스톤</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 pl-14 text-right">
              단계별 종속성 정의 및 기간 예측<br />
              주요 마일스톤별 의사결정 포인트 명시
            </p>
          </div>
          
          {/* Risk Register & Mitigation */}
          <div className="relative border-l-4 border-blue-500 pl-6 pr-4 py-4 bg-white dark:bg-gray-800 rounded-r-lg shadow-sm">
            <div className="absolute -left-4 top-4 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-500 flex items-center justify-center font-bold text-lg">
              7
            </div>
            <div className="flex items-start mb-3">
              <div className="flex-shrink-0 mr-3 mt-1">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                  <i className="fas fa-shield-alt text-blue-500"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Risk Register & Mitigation</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 pl-14 text-right">
              기술/비즈니스/운영 리스크 식별 및 평가<br />
              단계별 완화 전략과 비상 계획(Plan B) 수립
            </p>
          </div>
          
          {/* 승인 절차 및 Go-Live 기준 */}
          <div className="relative border-l-4 border-blue-500 pl-6 pr-4 py-4 bg-white dark:bg-gray-800 rounded-r-lg shadow-sm">
            <div className="absolute -left-4 top-4 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-500 flex items-center justify-center font-bold text-lg">
              8
            </div>
            <div className="flex items-start mb-3">
              <div className="flex-shrink-0 mr-3 mt-1">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                  <i className="fas fa-check-circle text-blue-500"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">승인 절차 및 Go-Live 기준</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 pl-14 text-right">
              단계별 검증 프로세스 및 주요 이해관계자 승인<br />
              성공 기준 메트릭스 및 운영 안정성 검증 방안
            </p>
          </div>
        </div>
        
        {/* CTO 하이라이트 섹션 */}
        <div className="bg-blue-500 text-white rounded-lg p-6 flex items-start shadow-md mb-8">
          <div className="flex-shrink-0 mr-5">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <i className="fas fa-file-alt text-blue-500 text-2xl"></i>
            </div>
          </div>
          <div>
            <p className="font-semibold text-lg mb-2">본 초안 검토 후, CTO님께서는 상기 8개 영역을 포함한 상세 PRD를 작성하여 공식 승인 프로세스를 진행해 주시길 요청드립니다.</p>
            <p className="text-blue-100">각 단계별 진행 일정 및 이슈 관리는 Jira와 Confluence를 통해 공유 예정입니다.</p>
          </div>
        </div>
        
        <div className="flex justify-center mt-12 space-x-4">
          <Link href="/main/main14/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center shadow-md transition-colors duration-300">
              이전 슬라이드로 돌아가기
              <i className="fas fa-arrow-left ml-2"></i>
            </button>
          </Link>
          <Link href="/main/main16/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center shadow-md transition-colors duration-300">
              다음 슬라이드로 이동
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </Link>
        </div>
        
        <div className="text-right text-gray-500 dark:text-gray-400">
          15 / 16
        </div>
      </div>
    </section>
  );
};

export default Main15;
