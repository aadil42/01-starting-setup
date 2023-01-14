import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

import './Expenses.css';


const Expenses = (props) => {


      const [year, setYear] = useState(2019);
      const selectedYearHandler = (yearData) => {
        setYear(yearData);
      }

      const filterExpenses = props.expenses.filter((expense) => {
            return expense.date.getFullYear().toString() === year.toString();
      });
      
      let expenseContent = <p>No Expenses found.</p>

      if(filterExpenses.length) {
        expenseContent = filterExpenses.map(
          expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        );          
      }

      return (
        <Card className="expenses">
          <h2>Let's get started! hehe</h2>
          <ExpensesFilter selectedYear={year} onSaveYear={selectedYearHandler} />
          {expenseContent}
        </Card> 
        
      );
}

export default Expenses;