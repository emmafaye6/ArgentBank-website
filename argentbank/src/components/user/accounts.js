import "../user/accounts.css";
import Button from "../layout/button";
import { accountsData } from "../../data/accountsData";
function Accounts() {
  return (
    <>
      <h2 className="sr-only">Accounts</h2>
      {accountsData.map((accounts) => {
        return (
          <section className="account" key={accounts.id}>
            <div className="account-content-wrapper">
              <h3 className="account-title">{accounts.title}</h3>
              <p className="account-amount">{accounts.amount}</p>
              <p className="account-amount-description">
                {accounts.description}
              </p>
            </div>
            <div className="account-content-wrapper cta">
              <Button className="transaction-button">View transactions</Button>
            </div>
          </section>
        );
      })}
    </>
  );
}

export default Accounts;
