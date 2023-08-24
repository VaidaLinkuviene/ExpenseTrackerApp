
import Inputs from "../inputs/Inputs";
import "./MainWindow.css";
import Balance from "../Balance/Balance";
import MainTable from "../mainTable/MainTable";
import { useContext } from "react";
import { ThemeContext } from "../themeProvider/ThemeContext";


const MainWindow = ({data, incomesData}) => {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`MainWindow ${theme}`}>
      <Balance expensesList={data} incomesList={incomesData} />
      <Inputs
        showMainTable={true}
        incomesList={incomesData}

        // setIncomesList={setIncomesList}
        expensesList={data}

        // setExpensesList={setExpensesList}

        
      />
      <MainTable data={data} showSearch={true} incomesData={incomesData}/>
    </div>
  );
};

export default MainWindow;
