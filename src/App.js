import './App.css';
import Inputs from './components/inputs/Inputs';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { library } from '@fortawesome/fontawesome-svg-core'
import Balance from './components/Balance/Balance';
import { useEffect, useState } from 'react';


library.add();

function App() {

  const [incomesList, setIncomesList] = useState([]);
  const [expensesList, setExpensesList] = useState([]);

  useEffect(() => {
    const storedExpensesList = JSON.parse(localStorage.getItem("expensesList")) || [];
    const storedIncomesList = JSON.parse(localStorage.getItem("incomesList")) || [];

      setExpensesList(storedExpensesList);

      setIncomesList(storedIncomesList);
  }, []);

  return (
    <div className="App">
      <Balance incomesList={incomesList} expensesList={expensesList}/>
      <Inputs incomesList={incomesList} setIncomesList={setIncomesList} expensesList={expensesList} setExpensesList={setExpensesList}/>
    </div>
  );
}

export default App;
