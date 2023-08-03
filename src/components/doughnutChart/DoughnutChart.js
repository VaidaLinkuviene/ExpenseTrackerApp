// import React, { useEffect, useRef } from 'react';
// import { Doughnut } from 'react-chartjs-2';

// const DoughnutChart = ({ data }) => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     if (chartRef.current) {
//       chartRef.current.chartInstance.destroy();
//     }
//   }, [data]);

//   const options = {
//     maintainAspectRatio: false,
//     responsive: true,
//   };

//   return <Doughnut ref={chartRef} data={data} options={options} />;
// };

// export default DoughnutChart;