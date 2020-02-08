import React from "react";
import numberManipulator from "../../Helpers/number_manipulator";
import "./CalculatorOutput.scss";

function CalculatorOutput(props) {
  const { operator, values, sum } = props.Calculator;
  const first = values.length > 0 ? values[0] : null;
  const last =
    values.length > 0 ? (values.length === 1 ? values[0] : values[1]) : "0";
  return (
    <div className="CalculatorOutput">
      <div className="CalculatorOutput__initial">
        {first} {operator}{" "}
        {last !== first ? (last === "0" ? null : last) : null}
      </div>
      {sum ? numberManipulator.toFixedTrunc(sum) : last}
    </div>
  );
}

export default CalculatorOutput;
