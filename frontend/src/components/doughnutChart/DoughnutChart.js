import React, {  useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import './DoughnutChart.css'

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ data, onClick, chartOptions}) => {
  const chartRef = useRef(null);

  // useEffect(() => {
  //   if (chartRef.current) {
  //     chartRef.current.chartInstance.destroy();
  //   }
  // }, [data]);

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    onClick: (_, activeElements) => {
      if (activeElements.length > 0) {
        onClick()
      }
    },
    ...chartOptions
  };

  return <Doughnut ref={chartRef} data={data} options={options} className="doughnutChart-wrapper"/>;
};

export default DoughnutChart;