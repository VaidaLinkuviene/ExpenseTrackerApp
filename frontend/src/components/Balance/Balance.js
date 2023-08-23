import React, {useMemo} from "react";
import "./Balance.css";
import ChartWrapper from "../chartWrapper/ChartWrapper";




const Balance = ({ 
  incomesList, 
  expensesList }) => {

  const expenses = expensesList.map((item) => {return item.expense})
  const totalIncomes = useMemo(() => incomesList.reduce((sum, item) => sum + parseFloat(item.incomes),0), [incomesList]);
  const totalExpenses = useMemo(() => expenses.reduce((sum, item) => sum + parseFloat(item), 0), [expenses]);
  const balance = useMemo(() => totalIncomes - totalExpenses, [totalExpenses, totalIncomes]);
  const balanceColor = useMemo(()=> balance >=0 ? 'black' : 'red', [balance]);

  return (
    <div className="balance"> 
      <div className="balance-value" style={{color: balanceColor}}> <div className="balance-title">Balance: </div> {balance} &euro;</div>
      <div className="incomes-value" style={{color: 'green'}}> <div className="balance-title">Incomes: </div> {totalIncomes} &euro;</div>
      <div className="expenses-value" style={{color: 'red'}}> <div className="balance-title">Expenses: </div> {totalExpenses} &euro;</div>
      <ChartWrapper expensesList={expensesList}/>
    </div>
  );
};

export default Balance;
