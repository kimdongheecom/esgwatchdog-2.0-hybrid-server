import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLeaf,
  faBullhorn,
  faUserTie,
  faChartLine,
  faLightbulb,
  faClock,
  faMousePointer,
  faCalendarCheck,
  faTachometerAlt,
  faArrowRight,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface StakeholderRequirementsProps {
  isActive?: boolean;
}

interface StakeholderCard {
  icon: any;
  title: string;
  needs: string;
  successIcon: any;
  successCriteria: React.ReactNode;
}

const stakeholders: StakeholderCard[] = [
  {
    icon: faLeaf,
    title: "지속가능경영팀",
    needs: "실시간 이슈 탐지·위험도",
    successIcon: faClock,
    successCriteria: <>경고 알림 <strong>1시간 내 수신</strong></>
  },
  {
    icon: faBullhorn,
    title: "전략·홍보팀",
    needs: "위기 대응 메시지 자동 초안",
    successIcon: faMousePointer,
    successCriteria: <><strong>1-click</strong> 초안 생성</>
  },
  {
    icon: faUserTie,
    title: "임원",
    needs: "일일 요약 리포트",
    successIcon: faCalendarCheck,
    successCriteria: <>매일 <strong>09:00 전 송부</strong></>
  },
  {
    icon: faChartLine,
    title: "투자자·정책 담당자",
    needs: "기업 ESG 트렌드·정렬도",
    successIcon: faTachometerAlt,
    successCriteria: <><strong>대시보드 KPI</strong> 가시화</>
  }
];

const StakeholderCard: React.FC<{ data: StakeholderCard }> = ({ data }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
    <div className="flex justify-center mb-4">
      <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
        <FontAwesomeIcon 
          icon={data.icon} 
          className="text-2xl text-blue-500 dark:text-blue-300"
        />
      </div>
    </div>
    
    <h3 className="text-xl font-semibold text-center mb-4 text-gray-800 dark:text-gray-200">
      {data.title}
    </h3>
    
    <div className="mb-4">
      <div className="flex items-start">
        <FontAwesomeIcon 
          icon={faLightbulb} 
          className="text-lg mr-3 mt-1 text-yellow-500"
        />
        <div>
          <p className="font-medium text-gray-700 dark:text-gray-300">주요 니즈:</p>
          <p className="text-gray-600 dark:text-gray-400">{data.needs}</p>
        </div>
      </div>
    </div>
    
    <div className="mt-4">
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">성공 기준</div>
      <div className="flex items-center">
        <FontAwesomeIcon 
          icon={data.successIcon} 
          className="text-lg mr-2 text-green-500"
        />
        <p className="text-gray-700 dark:text-gray-300">{data.successCriteria}</p>
      </div>
    </div>
  </div>
);

const StakeholderRequirements: React.FC<StakeholderRequirementsProps> = ({ isActive = false }) => {
  return (
    <section 
      id="slide6" 
      className={`min-h-screen w-full ${isActive ? 'block' : 'hidden'}`}
    >
      <div className="p-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
          이해관계자·사용자 요구
        </h2>
        
        <div className="grid grid-cols-2 gap-6">
          {stakeholders.map((stakeholder, index) => (
            <StakeholderCard key={index} data={stakeholder} />
          ))}
        </div>

        <div className="flex justify-center mt-12 space-x-4">
          <Link href="/main/main5/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center shadow-md transition-colors duration-300">
              이전 슬라이드로 돌아가기
              <FontAwesomeIcon icon={faArrowLeft} className="ml-2" />
            </button>
          </Link>
          <Link href="/main/main7/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center shadow-md transition-colors duration-300">
              다음 슬라이드로 이동
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
      
      <div className="mt-16 text-right text-gray-500 dark:text-gray-400">
        6 / 16
      </div>
    </section>
  );
};

export default StakeholderRequirements;

