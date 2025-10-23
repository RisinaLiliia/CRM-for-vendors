'use client';

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SuccessStatisticsChart = () => {

    const data = {
        labels: ['Companies', 'Vendors', 'Reviews', 'Cost Reduction'], // Подписи для оси X
        datasets: [
            {
                label: 'Success Metrics',
                data: [1500, 200000, 1000, 30],
                fill: false,
                borderColor: '#4F46E5',
                tension: 0.1,
                borderWidth: 3,
            },
        ],
    };


    const options = {
        responsive: true,
        plugins: {
            title: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem: any) => `${tooltipItem.raw}`,
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 50000,
                },
            },
        },
    };

    return (
        <div className="py-16 sm:py-20 lg:py-24 bg-[#fafafa] text-center px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="container mx-auto space-y-10">
                <h2 className="text-3xl sm:text-4xl font-semibold text-[#111827]">Maximize Efficiency with Our CRM for Vendors</h2>

                <div className="flex justify-center items-center space-x-12 mt-10">
                    <div className="flex flex-col items-center">
                        <span className="text-purple-500 text-4xl">1500+</span>
                        <p className="text-lg sm:text-xl text-[#111827]">Companies automate vendor management</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-purple-500 text-4xl">200k+</span>
                        <p className="text-lg sm:text-xl text-[#111827]">Vendors successfully integrated into the system</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-yellow-500 text-4xl">1000+</span>
                        <p className="text-lg sm:text-xl text-[#111827]">Reviews with an average rating of 4.9/5</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-red-500 text-4xl">30%</span>
                        <p className="text-lg sm:text-xl text-[#111827]">Reduction in vendor management costs by 30%</p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto mt-8">
                    <Line data={data} options={options} />
                </div>
                <p className="text-lg sm:text-xl text-[#111827] max-w-2xl mx-auto mt-8">
                    "Thanks to our CRM, Company XYZ was able to automate its vendor management processes, reducing order processing time by 40%. They can now respond faster to customer requests and significantly increase customer satisfaction."
                </p>
                <p className="text-lg sm:text-xl text-[#111827] max-w-2xl mx-auto mt-4">
                    "The interface is simple and intuitive, allowing for quick integration with ERP systems and other business tools."
                </p>
            </div>
        </div>
    );
};

export default SuccessStatisticsChart;
