import React, {useEffect} from 'react'

const IncomesTable = ({incomesList, setIncomesList}) => {

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("incomesList"));
    if (storedList) {
      setIncomesList(storedList);
    }
  }, []);

  const totalIncomes = incomesList.reduce((sum, item) => sum + parseFloat(item.incomes), 0);

  return (
    <div>
              <h4>Incomes Table</h4>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Type of Income</th>
      <th scope="col">Name of Income</th>
      <th scope="col">Amount </th>
      <th scope="col">Date </th>
    </tr>
  </thead>
  <tbody>{incomesList.map((item, index) => (
    <tr key={index} className="item">
      <th scope="row">{index+1}</th>
      <td>{item.selectedIncomesValue}</td>
      <td>{item.name}</td>
      <td>{item.incomes}</td>
      <td>{item.date}</td>
    </tr>
  ))}
    <div>Total: {totalIncomes}</div>
  </tbody>

</table>
    </div>
  )
}

export default IncomesTable