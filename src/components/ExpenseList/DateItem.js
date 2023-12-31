import "./DateItem.css";

function DateItem(props) {
  const date = props.date.toLocaleString('en-US', {day: 'numeric'});
  const month = props.date.toLocaleString('en-US', {month: 'long'});
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__date">{date}</div>
    </div>
  )
}

export default DateItem;