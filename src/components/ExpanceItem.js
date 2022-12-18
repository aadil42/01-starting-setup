import './ExpanceItem.css';

function ExpanceItem(props) {
   
    console.log(props);
    return (
       <div className="expense-item">
        <div>{props.date}</div>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.amount}</div>
        </div>
       </div>
    );
}

export default ExpanceItem;