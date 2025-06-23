'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const chartData = {
  labels: ['New Testament', 'Homer (Iliad)', 'Plato', 'Caesar (Gallic Wars)'],
  datasets: [
    {
      label: 'Manuscript Copies (Log Scale)',
      data: [24000, 1900, 210, 251],
      backgroundColor: 'rgba(245, 158, 11, 0.6)',
      borderColor: 'rgba(245, 158, 11, 1)',
      borderWidth: 1,
      yAxisID: 'y',
    },
    {
      label: 'Time Gap to Earliest Copy (Years)',
      data: [50, 500, 1200, 950],
      backgroundColor: 'rgba(59, 130, 246, 0.6)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 1,
      yAxisID: 'y1',
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  plugins: {
    title: {
      display: true,
      text: 'Ancient Texts: Manuscript Comparison',
      color: '#ffffff',
      font: { size: 20, family: "'Playfair Display', serif" },
    },
    legend: {
      labels: {
        color: '#d1d5db',
        font: { family: "'Inter', sans-serif" },
      },
    },
  },
  scales: {
    x: {
      ticks: { color: '#9ca3af', font: { family: "'Inter', sans-serif" } },
      grid: { color: 'rgba(255, 255, 255, 0.1)' },
    },
    y: {
      type: 'logarithmic' as const,
      position: 'left' as const,
      title: {
        display: true,
        text: 'Number of Manuscripts',
        color: 'rgba(245, 158, 11, 1)',
      },
      ticks: { color: 'rgba(245, 158, 11, 1)' },
      grid: { color: 'rgba(255, 255, 255, 0.1)' },
    },
    y1: {
      type: 'linear' as const,
      position: 'right' as const,
      title: {
        display: true,
        text: 'Time Gap (Years)',
        color: 'rgba(59, 130, 246, 1)',
      },
      ticks: { color: 'rgba(59, 130, 246, 1)' },
      grid: {
        drawOnChartArea: false, // only draw grid lines for the first Y-axis
      },
    },
  },
};

export default function GospelsManuscriptChart() {
  return (
    <div className="mt-12 p-8 border border-gray-800 bg-gray-900/50 rounded-lg">
      <div style={{ height: '400px' }}>
        <Bar options={chartOptions} data={chartData} />
      </div>
      <p className="text-center mt-4 text-gray-400 text-sm">
        Analysis: The New Testament is the best-attested work of ancient literature by an order of magnitude, in both quantity of manuscripts and proximity to the original events.
      </p>
    </div>
  );
}
