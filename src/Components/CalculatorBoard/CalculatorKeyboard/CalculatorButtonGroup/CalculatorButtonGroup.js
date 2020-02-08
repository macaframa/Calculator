import React from "react";
import "./CalculatorButtonGroup.scss";
import CalculatorButton from "./CalculatorButton/CalculatorButton";

function CalculatorButtonGroup(props) {
  return (
    <div className="CalculatorButtonGroup">
      {props.row &&
        props.row.map((item, i) => (
          <CalculatorButton key={`${item}${i}`} item={item} />
        ))}
    </div>
  );
}

export default CalculatorButtonGroup;
