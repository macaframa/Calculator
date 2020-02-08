import React from "react";
import "./CalculatorButton.scss";

function CalculatorButton(props) {
  function proxy() {
    props.item.method(props.item.value);
  }

  return (
    <button
      onClick={proxy}
      className={`CalculatorButton ${
        props.item.size && props.item.size.length > 0 ? props.item.size : ""
      }`}
    >
      {" "}
      {props.item.value === "*" ? "x" : props.item.value}{" "}
    </button>
  );
}

export default CalculatorButton;
