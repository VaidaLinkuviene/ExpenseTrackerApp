import React, {useEffect} from 'react'

const ExpensesTable = ({expensesList, setExpensesList}) => {

    useEffect(() => {
        const storedList = JSON.parse(localStorage.getItem("expensesList"));
        if (storedList) {
          setExpensesList(storedList);
        }
      }, []);

      const totalExpenses = expensesList.reduce((sum, item) => sum + parseFloat(item.expenses), 0);

  return (
    <div>
        <h4>Expenses Table</h4>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Type of Expense</th>
      <th scope="col">Name of Expense</th>
      <th scope="col">Amount </th>
      <th scope="col">Date </th>
    </tr>
  </thead>
  <tbody>{expensesList.map((item, index) => (
    <tr key={index} className="item">
      <th scope="row">{index+1}</th>
      <td>{item.selectedExpensesValue}</td>
      <td>{item.name}</td>
      <td>{item.expenses}</td>
      <td>{item.date}</td>
    </tr>
  ))}
   <div>Total: {totalExpenses}</div>
  </tbody>
</table>
    </div>
  )
}


export default ExpensesTable