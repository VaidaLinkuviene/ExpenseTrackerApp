import React from 'react';
import DoughnutChart from '../doughnutChart/DoughnutChart';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import  './ChartWrapper.css'

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartWrapper = () => {
  const chartData = {
    labels: ['Food', 'Clothes', 'Transport', 'Medicine', 'Entertainment'],
    datasets: [
      {
        data: [30, 40, 20, 10, 20], // Sample data, replace with your own data
        backgroundColor: ['#8871fb', '#c771fb', '#f971f0', '#f971bd', '#7aa8fb' ],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className='chart-wrapper'>
      
      <DoughnutChart data={chartData} />
    </div>
  );
};

export default ChartWrapper;