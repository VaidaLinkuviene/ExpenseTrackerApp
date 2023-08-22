
import Inputs from "../inputs/Inputs";
import "./MainWindow.css";
import Balance from "../Balance/Balance";
import MainTable from "../mainTable/MainTable";
import { useContext } from "react";
import { ThemeContext } from "../themeProvider/ThemeContext";


const MainWindow = ({data}) => {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`MainWindow ${theme}`}>
      <Balance expensesList={data} />
      <Inputs
        showMainTable={true}
        // incomesList={incomesList}
        // setIncomesList={setIncomesList}
        expensesList={data}
        // setExpensesList={setExpensesList}
      />
      <MainTable data={data} showSearch={true} />
    </div>
  );
};

export default MainWindow;
