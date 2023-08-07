import { ThemeContext } from "../themeProvider/ThemeContext";
import Header from "../header/Header";
import Inputs from "../inputs/Inputs";
import ChartWrapper from "../chartWrapper/ChartWrapper";
import { useContext, useEffect, useState } from "react";
import "./MainWindow.css"
import Balance from "../Balance/Balance";

const MainWindow = () => {
  const { theme } = useContext(ThemeContext);

  const GlobalStyles = {
    light: {
      //   background:
      //     'url("../../../images/light-background.jpeg") no-repeat center -100px fixed',
      //   backgroundSize: "cover",
      backgroundColor: "#E0DECA",
      color: "#333333",
      transition: "0.3s",
    },
    dark: {
      //   background:
      //     'url("../../../images/dark-background2.jpeg") no-repeat center fixed',
      //   backgroundSize: "cover",
      backgroundColor: "#353535",
      color: "#ffffff",
      transition: "0.3s",
    },
  };

  const headerStyles = {
light: {
  background: "#ffffff",
      color: "#333333",
      transition: "0.3s",
},

dark: {
  backgroundColor: "#353540",
      color: "#ffffff",
}
  }
  
  const [incomesList, setIncomesList] = useState([]);
  const [expensesList, setExpensesList] = useState([]);

  useEffect(() => {
    const storedExpensesList = JSON.parse(localStorage.getItem("expensesList")) || [];
    const storedIncomesList = JSON.parse(localStorage.getItem("incomesList")) || [];

      setExpensesList(storedExpensesList);

      setIncomesList(storedIncomesList);
  }, []);

  return (
    <div className="MainWindow" style={{ ...GlobalStyles[theme] }}>
      <Header style={{ ...headerStyles[theme] }}/>
      <ChartWrapper />
    
      <Balance incomesList={incomesList} expensesList={expensesList}/>
      <Inputs incomesList={incomesList} setIncomesList={setIncomesList} expensesList={expensesList} setExpensesList={setExpensesList}/>
    </div>
  );
};

export default MainWindow;
