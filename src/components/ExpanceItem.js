import './ExpanceItem.css';
import ExpanceDate from './ExpanceDate';

function ExpanceItem(props) {

    // console.log(props);
    return (
       <div className="expense-item">
        <ExpanceDate date={props.date} />
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.amount}</div>
        </div>
       </div>
    );
}

export default ExpanceItem;