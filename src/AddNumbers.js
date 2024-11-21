import React from "react";
import { useState } from "react";
import { calcTotal } from "./calcTotal";

export default function AddNumbers({ num }) {
  const [numbers, setNumbers] = useState([]);
  const [total, setTotal] = useState(0);

  const numList = numbers.split(",");

  return (
    <div>
      <input
        style={{ width: "200px", height: "30px" }}
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
      />
      <button
        data-testid="calcTotalBtn"
        onClick={() => setTotal(calcTotal(numList))}
      >
        Calculate
      </button>
      <h3>Input = {numbers}</h3>
      <h3 data-testid="totalValue">Total = {total}</h3>
    </div>
  );
}
