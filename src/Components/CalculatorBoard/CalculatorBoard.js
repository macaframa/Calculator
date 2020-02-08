import React, { useState, useEffect } from "react";
import Calculator from "../Stateful/Calculator";
import CalculatorOutput from "./CalculatorOutput/CalculatorOutput";
import "./CalculatorBoard.scss";
import CalculatorKeyboard from "./CalculatorKeyboard/CalculatorKeyboard";
const calculator = new Calculator();

function CalculatorBoard() {
  const [calc, updateCalc] = useState(Object.assign({}, calculator));
  const calculatorApi = {
    updateValues,
    updateOperator,
    backspace,
    clear,
    updateSecondaryOperator,
    updateSecondaryNumber,
    popOneOffSecondary,
    clearSecondary,
    doMaths
  };

  function cascade() {
    updateCalc(Object.assign({}, calculator));
  }

  function updateValues(number) {
    calculator.updateValues(number);
    cascade();
  }

  function updateOperator(operator) {
    calculator.updateOperator(operator);
    cascade();
  }

  function backspace() {
    calculator.backspace();
    cascade();
  }

  function clear() {
    calculator.clear();
    cascade();
  }

  //////////////////////////////////////////////

  function updateSecondaryOperator(operator) {
    calculator.updateSecondaryOperator(operator);
    cascade();
  }

  function updateSecondaryNumber(number) {
    calculator.updateSecondaryNumber(number);
    cascade();
  }

  function popOneOffSecondary() {
    calculator.popOneOffSecondary();
    cascade();
  }

  function clearSecondary() {
    calculator.clearSecondary();
    cascade();
  }

  function doMaths() {
    calculator.doMaths();
    cascade();
  }

  return (
    <div className="CalculatorBoard">
      <CalculatorOutput Calculator={calc} />
      <CalculatorKeyboard calculatorApi={calculatorApi} Calculator={calc} />
    </div>
  );
}

export default CalculatorBoard;
