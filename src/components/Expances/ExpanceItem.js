import React from 'react';

import ExpanceDate from './ExpanceDate';
import Card from '../UI/Card';

import './ExpanceItem.css';

const ExpanceItem = (props) => {

    // console.log(props);
    return (
       <Card className="expense-item">
        <ExpanceDate date={props.date} />
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.amount}</div>
        </div>
       </Card>
    );
}

export default ExpanceItem;