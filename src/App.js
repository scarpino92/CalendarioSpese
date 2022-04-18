import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
import "./App.css";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Carta Igienica",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", 
    title: "TV", 
    amount: 799.49, 
    date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Assicurazione Auto",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Scrivania",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
