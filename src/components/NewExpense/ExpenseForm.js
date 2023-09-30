import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const handleFormInput = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      setUserInput((prevState) => {
        return {
          ...prevState,
          enteredTitle: value,
        };
      });
    } else if (name == "amount") {
      setUserInput((prevState) => {
        return {
          ...prevState,
          enteredAmount: value,
        };
      });
    } else {
      setUserInput((prevState) => {
        return {
          ...prevState,
          enteredDate: value,
        };
      });
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formInput = {
      title: userInput.enteredTitle,
      amount: parseFloat(userInput.enteredAmount),
      date: new Date(userInput.enteredDate),
    };

    props.onNewExpenseAdd(formInput);

    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  return (
    <form className="new-expense__controls" onSubmit={handleFormSubmit}>
      <div className="new-expense__control">
        <label>Title</label>
        <input
          type="text"
          value={userInput.enteredTitle}
          name="title"
          onChange={handleFormInput}
        />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          min={0.01}
          step={0.01}
          value={userInput.enteredAmount}
          name="amount"
          onChange={handleFormInput}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          value={userInput.enteredDate}
          name="date"
          onChange={handleFormInput}
        />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" className="alternative" onClick={props.onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
