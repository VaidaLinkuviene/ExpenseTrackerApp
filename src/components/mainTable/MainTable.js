import React from 'react'

const MainTable = () => {
  return (
    <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Type</th>
      <th scope="col">Name</th>
      <th scope="col">Value</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
  {list.map((item, index) => (
          <div key={index} className="item">
            <div>Expenses: {item.expenses}</div>
            <div>Incomes: {item.incomes}</div>
            <div>Selected Expenses: {item.selectedExpensesValue}</div>
            <div>Selected Incomes: {item.selectedIncomesValue}</div>
            <div>Name: {item.name}</div>
            <div>Date: {item.date}</div>
          </div>
        ))}
    <tr key={index} className="item">
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default MainTable