// src/TransactionList.js
import { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "./firebase";

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "transactions"), orderBy("date", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTransactions(items);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>Daily Transactions</h2>
      {transactions.map((tx) => (
        <div key={tx.id} style={{ marginBottom: "10px" }}>
          <strong>{tx.category}</strong> - ₹{tx.amount} ({tx.type}) - {tx.remark}
        </div>
      ))}
    </div>
  );
}

export default TransactionList;
