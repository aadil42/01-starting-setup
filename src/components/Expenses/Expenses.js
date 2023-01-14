import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

import './Expenses.css';


const Expenses = (props) => {


      const [year, setYear] = useState(2019);
      const selectedYearHandler = (yearData) => {
        setYear(yearData);
      }

      const filterExpenses = props.expenses.filter((expense) => {
            return expense.date.getFullYear().toString() === year.toString();
      });

      return (
        <Card className="expenses">
          <h2>Let's get started! hehe</h2>
          <ExpensesFilter selectedYear={year} onSaveYear={selectedYearHandler} />
          <ExpensesList filterExpenses={filterExpenses} />
        </Card> 
        
      );
}

export default Expenses;