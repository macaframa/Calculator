import React from "react";
import { render } from "@testing-library/react";
import CalculatorBoard from "./CalculatorBoard";

test("App doesnt crash after AC / DEL buttons are clicked", () => {
  const { getByText } = render(<CalculatorBoard />);
  const AC = getByText(/AC/i);
  const DEL = getByText(/DEL/i);
  AC.click();
  DEL.click();
});

test("App doesnt crash after DEL button is clicked as first button", () => {
  const { getByText } = render(<CalculatorBoard />);
  const DEL = getByText(/DEL/i);
  DEL.click();
});
