import React, { useEffect, useReducer} from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { library } from "@fortawesome/fontawesome-svg-core";
import { ThemeProvider } from "./components/themeProvider/ThemeContext";
import MainWindow from "./components/mainWindow/MainWindow";
import Header from "./components/header/Header";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import SideCanvas from "./components/sideCanvas/SideCanvas";
import ExpensesTable from "./components/expensesTable/ExpensesTable";
import IncomesTable from "./components/incomesTable/IncomesTable";
import axios from "axios";
import UpdateExpensesData from "./updateData/UpdateExpensesData";
import UpdateIncomeData from "./updateData/UpdateIncomeData";
import Footer from "./components/footer/Footer";

library.add();

const initialState = {
  isLoading: false,
  data: [],
  error: "",
};

const firstState = {
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

function App() {
  const [items, dispatch] = useReducer(reducer, initialState);
  const [elements, dispatch1] = useReducer(reducer, firstState);

  const handleFetchExpenses = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get("http://localhost:3001/expense");
      dispatch({ type: "SUCCESS", payload: response.data });
    } catch (err) {
      dispatch({ type: "FAILURE", payload: err.message });
    }
  };

  const handleFetchIncomes = async () => {
    dispatch1({ type: "LOADING" });
    try {
      const response = await axios.get("http://localhost:3001/incomes");
      dispatch1({ type: "SUCCESS", payload: response.data });
    } catch (err) {
      dispatch1({ type: "FAILURE", payload: err.message });
    }
  };

  useEffect(() => {
    handleFetchExpenses();
    handleFetchIncomes();
  }, []);

  if (items.isLoading || elements.isLoading) {
    return "Loading...";
  }

  if (items.error || elements.error) {
    return <p>{items.error}</p>;
  }

  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <SideCanvas />
        <Routes>
          <Route
            exact
            path="/expenseTable"
            element={<ExpensesTable data={items?.data} />}
          />
          <Route
            exact
            path="/incomesTable"
            element={<IncomesTable data={elements?.data} />}
          />
          <Route
            exact
            path="/"
            element={
              <MainWindow data={items?.data} incomesData={elements?.data} />
            }
          />
          <Route
            exact
            path="/updateExpenses"
            element={<UpdateExpensesData />}
          />
          <Route exact path="/updateIncomes" element={<UpdateIncomeData />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
