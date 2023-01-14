import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
function ExpensesList(props) {

  if(props.filterExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
        {props.filterExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)} 
    </ul>
  );
}

export default ExpensesList;