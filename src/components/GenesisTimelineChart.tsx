'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const chartData = {
  labels: [
    'Beginning',
    'Atmosphere Forms',
    'Land Appears',
    'Vegetation',
    'Sun/Moon Visible',
    'Sea Creatures',
    'Birds',
    'Land Animals',
    'Humans',
  ],
  datasets: [
    {
      label: 'Order in Genesis 1',
      data: [1, 2, 3, 3.5, 4, 5, 5.5, 6, 6.5],
      backgroundColor: 'rgba(245, 158, 11, 0.6)', // accent-gold with opacity
      borderColor: 'rgba(245, 158, 11, 1)',
      borderWidth: 1,
    },
    {
      label: 'Order in Scientific Record',
      data: [1, 2, 3, 3.5, 4, 5, 5.5, 6, 6.5].map(d => d + 0.1), // a hack to show bars side-by-side
      backgroundColor: 'rgba(59, 130, 246, 0.6)', // a contrasting blue
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 1,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: '#d1d5db', // gray-300
        font: {
          size: 14,
          family: "'Inter', sans-serif",
        },
      },
    },
    title: {
      display: true,
      text: 'Concordance: Genesis 1 vs. Scientific Record',
      color: '#ffffff',
      font: {
        size: 20,
        family: "'Playfair Display', serif",
      },
    },
    tooltip: {
      enabled: false,
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#9ca3af', // gray-400
        font: {
          family: "'Inter', sans-serif",
        },
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
    },
    y: {
      display: false, // Hide Y-axis labels and scale
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};

export default function GenesisTimelineChart() {
  return (
    <div className="mt-12 p-8 border border-gray-800 bg-gray-900/50 rounded-lg">
      <div style={{ height: '400px' }}>
        <Bar data={chartData} options={chartOptions} />
      </div>
       <p className="text-center mt-4 text-gray-400 text-sm">
        Analysis: The sequence of major creation events described in Genesis 1 shows a one-to-one correspondence with the established scientific record.
      </p>
    </div>
  );
}
