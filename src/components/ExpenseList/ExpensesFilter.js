import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const handleYearChange = (event) => {
    props.onYearChange(event.target.value);
  };
  const currentYear = new Date().getFullYear();
  let optionsArray = [];
  for (let year = currentYear; year >= 2020; year--) {
    optionsArray.push(
      <option value={year} key={year}>
        {year}
      </option>
    );
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={handleYearChange}>
          {optionsArray.map(option => option)}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
