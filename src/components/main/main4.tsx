import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStopwatch,
  faFileInvoice,
  faClipboardCheck,
  faHourglassHalf,
  faRuler,
  faUserClock,
  faTasks,
  faRandom,
  faArrowRight,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Chart } from 'chart.js/auto';
import Link from 'next/link';

// Chart.js 컴포넌트 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BusinessGoalsProps {
  isActive?: boolean;
}

interface GoalCardProps {
  number: number;
  icon: any;
  title: string;
  percentage: number | string;
  unit: string;
  measurementIcon: any;
  measurementText: string;
}

const goals: GoalCardProps[] = [
  {
    number: 1,
    icon: faStopwatch,
    title: "ESG 이슈 탐지 시간",
    percentage: 90,
    unit: "단축",
    measurementIcon: faRuler,
    measurementText: "측정 기준: 수작업 대비 평균 소요 시간"
  },
  {
    number: 2,
    icon: faFileInvoice,
    title: "보고서 작성 공수",
    percentage: 70,
    unit: "절감",
    measurementIcon: faUserClock,
    measurementText: "측정 기준: 인월(Person-month) 비교"
  },
  {
    number: 3,
    icon: faClipboardCheck,
    title: "규제 누락 항목",
    percentage: "0건",
    unit: "달성",
    measurementIcon: faTasks,
    measurementText: "측정 기준: 제출 전 자동 체크리스트"
  },
  {
    number: 4,
    icon: faHourglassHalf,
    title: "내부 의사결정 리드타임",
    percentage: 50,
    unit: "단축",
    measurementIcon: faRandom,
    measurementText: "측정 기준: Risk → Action 완료 시간"
  }
];

const GoalCard: React.FC<GoalCardProps> = ({
  number,
  icon,
  title,
  percentage,
  unit,
  measurementIcon,
  measurementText
}) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
    <div className="text-lg font-semibold text-gray-500 dark:text-gray-400 mb-2">
      {number}
    </div>
    <div className="flex items-center mb-3">
      <FontAwesomeIcon 
        icon={icon} 
        className="text-2xl mr-3 text-blue-500"
      />
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        {title}
      </h3>
    </div>
    <div className="text-4xl font-bold text-blue-500 mb-1">
      {percentage}
    </div>
    <p className="text-gray-700 dark:text-gray-300 mb-3">{unit}</p>
    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-3">
      <div 
        className="h-full bg-blue-500 rounded-full transition-all duration-500"
        style={{ width: typeof percentage === 'number' ? `${percentage}%` : '100%' }}
      />
    </div>
    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
      <FontAwesomeIcon icon={measurementIcon} className="mr-2" />
      {measurementText}
    </div>
  </div>
);

const BusinessGoals: React.FC<BusinessGoalsProps> = ({ isActive = false }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<any>(null);

  useEffect(() => {
    if (isActive && chartRef.current) {
      // 이전 차트 인스턴스 제거
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['ESG 이슈 탐지', '보고서 작성', '규제 누락', '의사결정 시간'],
            datasets: [
              {
                label: '목표',
                data: [90, 70, 100, 50],
                backgroundColor: 'rgba(59, 130, 246, 0.8)',
                borderColor: 'rgba(59, 130, 246, 1)',
                borderWidth: 1
              },
              {
                label: '기존',
                data: [100, 100, 100, 100],
                backgroundColor: 'rgba(209, 213, 219, 0.8)',
                borderColor: 'rgba(209, 213, 219, 1)',
                borderWidth: 1
              }
            ]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                max: 100
              }
            }
          }
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [isActive]);

  return (
    <section 
      id="slide4" 
      className={`min-h-screen w-full ${isActive ? 'block' : 'hidden'}`}
    >
      <div className="p-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
          비즈니스 목표
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {goals.map((goal, index) => (
            <GoalCard key={index} {...goal} />
          ))}
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <canvas ref={chartRef} />
        </div>

        <div className="flex justify-center mt-12 space-x-4">
          <Link href="/main/main3/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center shadow-md transition-colors duration-300">
              이전 슬라이드로 돌아가기
              <FontAwesomeIcon icon={faArrowLeft} className="ml-2" />
            </button>
          </Link>
          <Link href="/main/main5/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center shadow-md transition-colors duration-300">
              다음 슬라이드로 이동
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
      
      <div className="mt-16 text-right text-gray-500 dark:text-gray-400">
        4 / 16
      </div>
    </section>
  );
};

export default BusinessGoals;

