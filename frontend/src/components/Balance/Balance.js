import React, {useMemo} from "react";
import "./Balance.css";

const Balance = ({ incomesList, expensesList }) => {
  const totalIncomes = useMemo(() => incomesList.reduce((sum, item) => sum + parseFloat(item.incomes),0), [incomesList]);
  const totalExpenses = useMemo(() => expensesList.reduce((sum, item) => sum + parseFloat(item.expenses), 0), [expensesList]);
  const balance = useMemo(() => totalIncomes - totalExpenses, [totalExpenses, totalIncomes]);
  const balanceColor = useMemo(()=> balance >=0 ? 'black' : 'red', [balance]);

  return (
    <div className="balance"> 
      <div className="balance-value" style={{color: balanceColor}}> Balance: {balance} &euro;</div>
      <div className="incomes-value" style={{color: 'green'}}> Incomes: {totalIncomes} &euro;</div>
      <div className="expenses-value" style={{color: 'red'}}> Expenses: {totalExpenses} &euro;</div>
    </div>
  );
};

export default Balance;