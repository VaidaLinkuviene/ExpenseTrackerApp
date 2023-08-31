import React, { useState, useEffect } from "react";
import DoughnutChart from "../doughnutChart/DoughnutChart";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./ChartWrapper.css";
import Popup from "../popup/Popup";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartWrapper = ({ expensesList }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedChartData, setSelectedChartData] = useState(null);

  const totalFoodExpenses = expensesList.reduce((total, expenseObj) => {
    if (expenseObj?.type === "Food") {
      return total + expenseObj.expense;
    } else {
      return total;
    }
  }, 0);

  const totalTransportExpenses = expensesList.reduce((total, expenseObj) => {
    if (expenseObj?.type === "Transport") {
      return total + expenseObj.expense;
    } else {
      return total;
    }
  }, 0);

  const totalClothesExpenses = expensesList.reduce((total, expenseObj) => {
    if (expenseObj?.type === "Clothes") {
      return total + expenseObj.expense;
    } else {
      return total;
    }
  }, 0);

  const totalMedicineExpenses = expensesList.reduce((total, expenseObj) => {
    if (expenseObj?.type === "Medicine") {
      return total + expenseObj.expense;
    } else {
      return total;
    }
  }, 0);

  const totalEntertainmentExpenses = expensesList.reduce(
    (total, expenseObj) => {
      if (expenseObj?.type === "Entertainment") {
        return total + expenseObj.expense;
      } else {
        return total;
      }
    },
    0
  );

  const chartData = {
    labels: ["Food", "Clothes", "Transport", "Medicine", "Entertainment"],
    datasets: [
      {
        data: [
          totalFoodExpenses,
          totalClothesExpenses,
          totalTransportExpenses,
          totalMedicineExpenses,
          totalEntertainmentExpenses,
        ],
        backgroundColor: [
          "#8871fb",
          "#c771fb",
          "#f971f0",
          "#a94064",
          "#7aa8fb",
        ],
        hoverBackgroundColor: [
          "#5617ee",
          "#c217ee",
          "#ee17ae",
          "#FF6384",
          "#084ee4",
        ],
      },
    ],
  };

  useEffect(() => {
    chartData;
  }, [expensesList]);

  const chartOptions = {
    plugins: {
      legend: {
        labels: {
          fontSize: 16,
        },
      },
    },
  };

  const handleChartClick = () => {
    setSelectedChartData(chartData);
    setIsPopupVisible(true);
  };

  const handlePopupClose = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className={`chart-wrapper ${isPopupVisible ? "blur-effect" : ""}`}>
      <DoughnutChart
        data={chartData}
        onClick={handleChartClick}
        chartOptions={chartOptions}
      />
      {isPopupVisible && (
        <Popup
          data={selectedChartData}
          onClose={handlePopupClose}
          chartOptions={chartOptions}
        />
      )}
    </div>
  );
};

export default ChartWrapper;
