// src/TransactionForm.js
import { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

function TransactionForm() {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Expense");
  const [category, setCategory] = useState("Food");
  const [remark, setRemark] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!amount) return;

    await addDoc(collection(db, "transactions"), {
      amount: parseFloat(amount),
      type,
      category,
      date: Timestamp.now(),
      remark,
    });

    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Expense">Expense</option>
        <option value="Income">Income</option>
      </select>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Food">Food</option>
        <option value="Rent">Rent</option>
        <option value="Travel">Travel</option>
          
        </select>
         <input 
         type="text" 
         placeholder="Remark" 
         value={remark} 
         onChange={(e) => setRemark(e.target.value)}
         />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
