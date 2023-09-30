import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [displayForm, setDisplayForm] = useState(false);

  const addExpenseHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenseData);
    setDisplayForm(false);
  };

  const handleFormCancel = () => {
    setDisplayForm(false);
  };

  return (
    <div className="new-expense">
      {!displayForm && (
        <button onClick={() => setDisplayForm(true)}>Add New Expense</button>
      )}
      {displayForm && (
        <ExpenseForm
          onNewExpenseAdd={addExpenseHandler}
          onCancel={handleFormCancel}
        />
      )}
    </div>
  );
};

export default NewExpense;
