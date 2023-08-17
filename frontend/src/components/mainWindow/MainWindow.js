import { ThemeContext } from "../themeProvider/ThemeContext";
import Header from "../header/Header";
import Inputs from "../inputs/Inputs";
import { useContext, useEffect, useReducer } from "react";
import "./MainWindow.css";
import Balance from "../Balance/Balance";
import axios from "axios";
import MainTable from "../mainTable/MainTable";

const initialState = {
  isLoading: false,
  data: [],
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };
    case "SUCCESS":
      return { ...state, data: action.payload, isLoading: false };
    case "FAILURE":
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

const MainWindow = () => {
  const { theme } = useContext(ThemeContext);

  const [items, dispatch] = useReducer(reducer, initialState);

  const handleFetch = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get("http://localhost:3001/expense");
      dispatch({ type: "SUCCESS", payload: response.data });
    } catch (err) {
      dispatch({ type: "FAILURE", payload: err.message });
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const GlobalStyles = {
    light: {
      backgroundColor: "#E0DECA",
      color: "#333333",
      transition: "0.3s",
    },
    dark: {
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
    },
  };

  if (items.isLoading) {
    return "Loading...";
  }

  if (items.error) {
    return <p>{items.error}</p>;
  }

  return (
    <div className="MainWindow" style={{ ...GlobalStyles[theme] }}>
      <Header style={{ ...headerStyles[theme] }} />
      <Balance expensesList={items?.data} />
      <Inputs
        showMainTable={true}
        // incomesList={incomesList}
        // setIncomesList={setIncomesList}
        expensesList={items?.data}
        // setExpensesList={setExpensesList}
      />
      <MainTable data={items?.data} showSearch={true} />
    </div>
  );
};

export default MainWindow;
