import React from "react";
import "./CalculatorKeyboard.scss";
import getKeysAndAnnotateWithMethods from "../../Helpers/keys";
import CalculatorButtonGroup from "./CalculatorButtonGroup/CalculatorButtonGroup";

function CalculatorKeyboard(props) {
  const keys = getKeysAndAnnotateWithMethods(props.calculatorApi);
  return (
    <div className="CalculatorKeyboard">
      {keys && keys.map((k, i) => <CalculatorButtonGroup key={i} row={k} />)}
    </div>
  );
}

export default CalculatorKeyboard;
