import './ExpenseDate.css';

const ExpenseDate = (props) => { //alternative way to write a JSX function -> arrow function
    const month = props.date.toLocaleString('it-IT', { month: 'long'});
    const day = props.date.toLocaleString('it-IT', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
}

export default ExpenseDate;