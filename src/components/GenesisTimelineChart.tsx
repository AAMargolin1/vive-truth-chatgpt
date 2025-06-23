'use client';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LogarithmicScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LogarithmicScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const chartData = {
    // These labels correspond to the major events in the Genesis timeline
    labels: [
        'Beginning of Universe', 
        'Earth forms, water-covered, opaque atmosphere', 
        'Atmosphere becomes translucent ("Light")', 
        'Stable Water Cycle Forms', 
        'Dry Land Appears', 
        'First Land Plants', 
        'Atmosphere becomes transparent', 
        'Small Sea Creatures (Cambrian)', 
        'Flying Insects & Reptiles', 
        'Land Mammals', 
        'Humans'
    ],
    datasets: [{
        label: 'Scientific Record (Years Before Present)',
        // Data points are in years, the scale will make them logarithmic
        data: [13.8e9, 4.5e9, 4.0e9, 3.8e9, 3.0e9, 475e6, 400e6, 541e6, 320e6, 66e6, 300000],
        borderColor: '#f59e0b',
        backgroundColor: 'rgba(245, 158, 11, 0.2)',
        fill: true,
        tension: 0.1,
        pointBackgroundColor: '#f59e0b',
        pointHoverRadius: 7,
    }]
};

const chartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
        title: {
            display: true,
            text: 'Concordance: Genesis 1 Event Order vs. Scientific Record',
            color: '#ffffff',
            font: { size: 20, family: "'Playfair Display', serif" }
        },
        tooltip: {
            backgroundColor: 'rgba(10, 15, 31, 0.8)',
            borderColor: '#f59e0b',
            borderWidth: 1,
            titleFont: { family: "'Playfair Display', serif" },
            bodyFont: { family: "'Inter', sans-serif" },
            padding: 10,
            callbacks: {
                // Custom tooltip to show formatted years
                label: function(context: any) {
                    let label = context.dataset.label || '';
                    if (label) {
                        label += ': ';
                    }
                    if (context.parsed.y !== null) {
                        const value = context.parsed.y;
                        if (value >= 1e9) {
                            label += `${(value / 1e9).toFixed(2)} Billion Years Ago`;
                        } else if (value >= 1e6) {
                            label += `${(value / 1e6).toFixed(2)} Million Years Ago`;
                        } else if (value >= 1e3) {
                             label += `${(value / 1e3).toFixed(2)} Thousand Years Ago`;
                        } else {
                            label += `${value} Years Ago`;
                        }
                    }
                    return label;
                }
            }
        }
    },
    scales: {
        x: {
            ticks: { color: '#9ca3af', font: { family: "'Inter', sans-serif", size: 10 } },
            grid: { color: 'rgba(255, 255, 255, 0.1)' }
        },
        y: {
            type: 'logarithmic',
            title: { display: true, text: 'Years Before Present (Log Scale)', color: '#d1d5db', font: { family: "'Inter', sans-serif" } },
            ticks: {
                color: '#9ca3af',
                // Custom ticks to format logarithmic scale labels
                callback: function(value: any) {
                    const numValue = Number(value);
                    if (numValue === 1e10 || numValue === 1e9 || numValue === 1e8 || numValue === 1e7 || numValue === 1e6 || numValue === 1e5 || numValue === 1e4 || numValue === 1e3) {
                        if (numValue >= 1e9) return `${numValue / 1e9}B`;
                        if (numValue >= 1e6) return `${numValue / 1e6}M`;
                        if (numValue >= 1e3) return `${numValue / 1e3}k`;
                    }
                    return null;
                }
            },
            grid: { color: 'rgba(255, 255, 255, 0.1)' }
        }
    }
};

export default function GenesisTimelineChart() {
  return (
    <div className="glass-card p-4 md:p-8 mt-12">
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
        <Line data={chartData} options={chartOptions} />
      </div>
       <p className="text-center mt-6 text-gray-400 text-sm font-inter">
        Analysis: The sequence of major creation events described in Genesis 1 shows a one-to-one correspondence with the established scientific record when viewed from the correct frame of reference (Earth's surface).
      </p>
    </div>
  );
}