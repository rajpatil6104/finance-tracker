import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Monthly Finance Tracker</h1>
      <TransactionForm />
      <TransactionList />
    </div>
  );
}

export default App;
