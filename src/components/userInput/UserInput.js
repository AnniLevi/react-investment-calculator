import { useState } from "react";
import styles from "./UserInput.module.css";

function UserInput({ onCalculate }) {
  const initialInvestmentData = {
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    duration: 10,
  };

  const [investmentData, setInvestmentData] = useState(initialInvestmentData);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    onCalculate(investmentData);
  };

  const formResetHandler = () => {
    setInvestmentData(initialInvestmentData);
  };

  const inputChangeHandler = (input, value) => {
    setInvestmentData((prevState) => {
      return {
        ...prevState,
        [input]: +value, //dynamically access a property stored in input
      };
    });
  };

  return (
    <form onSubmit={formSubmitHandler} className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
            value={investmentData["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
            value={investmentData["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
            value={investmentData["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
            value={investmentData["duration"]}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          onClick={formResetHandler}
          type="reset"
          className={styles.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}

export default UserInput;
