'use client';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const chartData = {
    labels: ['3.5B years ago', '2.5B', '1.5B', '541M', '530M', 'Today'],
    datasets: [{
        label: 'Number of Animal Phyla',
        data: [1, 1, 3, 3, 30, 30],
        borderColor: '#22d3ee', // Luminous Cyan
        backgroundColor: 'rgba(34, 211, 238, 0.2)',
        fill: true,
        stepped: true,
        pointBackgroundColor: '#22d3ee',
        pointHoverRadius: 7,
        pointHoverBackgroundColor: '#f9fafb',
        pointHoverBorderColor: '#22d3ee',
    }]
};

const chartOptions: any = {
    responsive: true, maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
        title: { display: true, text: "The Cambrian Explosion vs. Darwinian Expectation", color: '#f9fafb', font: { size: 16, family: "'Playfair Display', serif" } }
    },
    scales: {
        y: {
            title: { display: true, text: 'Number of Phyla (Body Plans)', color: '#d1d5db' },
            ticks: { color: '#9ca3af' },
            grid: { color: 'rgba(55, 65, 81, 0.5)' } // ui-slate with opacity
        },
        x: {
            ticks: { color: '#9ca3af' },
            grid: { color: 'rgba(55, 65, 81, 0.5)' }
        }
    }
};

export default function CambrianChart() {
    return (
        <div className="mt-8">
            <h4 className="font-playfair font-bold text-center mb-4 text-luminous-cyan">Darwin's Own Test</h4>
            <div className="relative h-[300px] md:h-[400px]"><Line options={chartOptions} data={chartData} /></div>
        </div>
    );
}