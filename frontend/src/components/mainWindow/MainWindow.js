import Inputs from "../inputs/Inputs";
import "./MainWindow.css";
import Balance from "../Balance/Balance";
import MainTable from "../mainTable/MainTable";
import { useContext, useState } from "react";
import { ThemeContext } from "../themeProvider/ThemeContext";

const MainWindow = ({ dispatch, data, incomesData, posts }) => {
  const { theme } = useContext(ThemeContext);
  const [tableUpdate, setTableUpdate] = useState(false);

  return (
    <div className={`MainWindow ${theme}`}>
      <Balance
        dispatch={dispatch}
        expensesList={data}
        incomesList={incomesData}
      />
      <div>
        <Inputs
          dispatch={dispatch}
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
        posts={posts}
      />
    </div>
  );
};

export default MainWindow;
