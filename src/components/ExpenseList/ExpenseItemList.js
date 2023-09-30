import "./ExpenseItemList.css";
import ExpenseItem from "./ExpsenseItem";
import Card from "../GeneralUI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";
import { useState } from "react";

export default function ExpenseItemList(props) {
  const [selectedYear, setSelectedYear] = useState(2022);
  
  const expenses = props.items.filter((expense) => {
    const expenseYear = expense.date.getFullYear();
    return expenseYear === parseInt(selectedYear);
  });

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };


  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        onYearChange={handleYearChange}
      />
      <ExpenseChart expenses={expenses} />
      {expenses.length === 0 && <p className="expenses-list__fallback">No expenses found</p>}
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            date={expense.date}
            amount={expense.amount}
            title={expense.title}
            key={expense.id}
          />
        );
      })}
    </Card>
  );
}
