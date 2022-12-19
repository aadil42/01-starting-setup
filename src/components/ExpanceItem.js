import ExpanceDate from './ExpanceDate';
import Card from './Card';

import './ExpanceItem.css';

function ExpanceItem(props) {

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