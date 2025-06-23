'use client';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const chartData = {
    labels: ['3.5B years ago', '2.5B', '1.5B', '541M', '530M', 'Today'],
    datasets: [{ label: 'Number of Animal Phyla', data: [1, 1, 3, 3, 30, 30], borderColor: '#f59e0b', backgroundColor: 'rgba(245, 158, 11, 0.2)', fill: true, stepped: true }]
};

const chartOptions = {
    responsive: true, maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
        title: { display: true, text: "The Cambrian Explosion vs. Darwinian Expectation", color: '#e5e7eb', font: { size: 16, family: "'Playfair Display', serif" } }
    },
    scales: {
        y: { title: { display: true, text: 'Number of Phyla (Body Plans)', color: '#e5e7eb' }, ticks: { color: '#e5e7eb' }, grid: { color: 'rgba(255,255,255,0.1)' } },
        x: { ticks: { color: '#e5e7eb' }, grid: { color: 'rgba(255,255,255,0.1)' } }
    }
};

export default function CambrianChart() {
    return (
        <div className="mt-4 p-4 md:p-6 border border-gray-800 bg-gray-900/50 rounded-lg">
            <h4 className="font-playfair font-bold text-center mb-4 text-amber-400">Darwin's Own Test</h4>
            <div className="relative h-[300px] md:h-[400px]"><Line options={chartOptions} data={chartData} /></div>
        </div>
    );
}