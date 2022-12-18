import './ExpanceItem.css';

function ExpanceItem() {
   


    const expanceDate = new Date(2022, 12, 18); 
    const expanceTitle = 'iPhone 13 pro';
    const expancePrice = '$600.00';
    // console.log(expanceDate);
    return (
       <div className="expense-item">
        <div>{expanceDate.toISOString()}</div>
        <div className="expense-item__description">
            <h2>{expanceTitle}</h2>
            <div className="expense-item__price">{expancePrice}</div>
        </div>
       </div>
    );
}

export default ExpanceItem;