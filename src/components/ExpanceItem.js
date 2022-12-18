import './ExpanceItem.css';

function ExpanceItem() {
    return (
       <div className="expense-item">
        <div>December 18th 2022</div>
        <div className="expense-item__description">
            <h2>iPhone 13 pro</h2>
            <div className="expense-item__price">$600.00</div>
        </div>
       </div>
    );
}

export default ExpanceItem;