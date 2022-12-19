import ExpanceItem from './ExpanceItem';
import Card from './Card';
import './Expances.css';

function Expances() {
    const expenses = [
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 94.12,
          date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
          id: 'e3',
          title: 'Car Insurance',
          amount: 294.67,
          date: new Date(2021, 2, 28),
        },
        {
          id: 'e4',
          title: 'New Desk (Wooden)',
          amount: 450,
          date: new Date(2021, 5, 12),
        },
      ];

      return (
      <Card className="expenses">
        <h2>Let's get started! hehe</h2>
        <ExpanceItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
        <ExpanceItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
        <ExpanceItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
        <ExpanceItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
      </Card>    
      );
}

export default Expances;