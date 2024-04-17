import React, { useState } from "react";

import {} from "../../reducers/counterReducer";
import styles from "./Counter.module.css";

export function Counter(props: any) {
  // const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div>
      <div className={styles.row}>
        <button className={styles.button} aria-label='Decrement value'>
          -
        </button>
        <span className={styles.value}>{props.counter}</span>
        <button
          className={styles.button}
          aria-label='Increment value'
          onClick={props.increment}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input className={styles.textbox} aria-label='Set increment amount' />
        <button className={styles.button}>Add Amount</button>
        <button
          className={styles.asyncButton}
          onClick={() => props.incrementAsync(10)}
        >
          Add Async
        </button>
        <button className={styles.button}>Add If Odd</button>
      </div>
      <div>{props.status === "loading" && <h2>cargando ....</h2>}</div>
    </div>
  );
}
