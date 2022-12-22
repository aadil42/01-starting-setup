import React, { useState } from 'react';

import ExpanceDate from './ExpanceDate';
import Card from '../UI/Card';

import './ExpanceItem.css';

const ExpanceItem = (props) => {

    const [title, setTitle] = useState(props.title);

    function doSomething() {
        setTitle('Updated');
    }
    return (
       <Card className="expense-item">
        <ExpanceDate date={props.date} />
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">{props.amount}</div>
        </div>
        <button onClick={doSomething}>Click here</button>
       </Card>
    );
}

export default ExpanceItem;