import "./transactionHistory.scss";
import { useSelector } from "react-redux";
import { selectHistory } from "./transactionsSlice";

/** Displays a table row with transaction information  */
const TransactionRow = ({ transaction }) => (
  <tr>
    <th scope="row">{transaction.type}</th>
    <td>{transaction.amount ? transaction.amount.toFixed(2) : "N/A"}</td>
    <td>{transaction.balance ? transaction.balance.toFixed(2) : "N/A"}</td>
  </tr>
);

/** Displays a table of the user's transaction history. */
export default function TransactionHistory() {
  // TODO: Get the transaction history from the Redux store using the useSelector hook
  const history = useSelector((state) => state.transactions.history);

  return (
    <section className="transactions-history container">
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Amount</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
        {history.map((row, index) => (
            <TransactionRow key={index} transaction={row} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
