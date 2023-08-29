
import Inputs from "../inputs/Inputs";
import "./MainWindow.css";
import Balance from "../Balance/Balance";
import MainTable from "../mainTable/MainTable";
import { useContext, useState } from "react";
import { ThemeContext } from "../themeProvider/ThemeContext";





const MainWindow = ({data, incomesData}) => {

  const { theme } = useContext(ThemeContext);
      const [tableUpdate, setTableUpdate] = useState(false);

  return (
    <div className={`MainWindow ${theme}`}>
      <Balance expensesList={data} incomesList={incomesData} />
      <div>
        <Inputs
          showMainTable={true}
          incomesList={incomesData}
          expensesList={data}
          setTableUpdate={setTableUpdate}
        />{" "}
      </div>

      <MainTable
        data={data}
        showSearch={true}
        incomesData={incomesData}
        tableUpdate={tableUpdate}
      />
    </div>
  );
};

export default MainWindow;
