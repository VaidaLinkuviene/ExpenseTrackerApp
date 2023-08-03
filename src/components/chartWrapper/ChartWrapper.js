import React from 'react';
import DoughnutChart from '../doughnutChart/DoughnutChart';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartWrapper = () => {
  const chartData = {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [
      {
        data: [30, 50, 20], // Sample data, replace with your own data
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div>
      <h2>My Doughnut Chart</h2>
      <DoughnutChart data={chartData} />
    </div>
  );
};

export default ChartWrapper;