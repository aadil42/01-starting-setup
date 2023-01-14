import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

import './Expenses.css';


const Expenses = (props) => {


      const [year, setYear] = useState(2019);

      const selectedYearHandler = (yearData) => {
        // console.log(year);
        setYear(yearData);
      }
      return (
        <Card className="expenses">
          <h2>Let's get started! hehe</h2>
          <ExpensesFilter selectedYear={year} onSaveYear={selectedYearHandler} />
          {props.expenses.map(
            expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            )}
          {/* <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
          <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
          <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
          <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/> */}
        </Card> 
        
      );
}

export default Expenses;