import Calculator from "./Calculator";

describe("Calculator Service", () => {
  test("#updateValues updates the vaules arrays", () => {
    const calculator = new Calculator();
    calculator.updateValues("1");
    expect(calculator.values.length).toBe(1);
  });

  test("#updateValues called multiple times results in length of 1", () => {
    const calculator = new Calculator();
    calculator.updateValues("1");
    calculator.updateValues("2");
    calculator.updateValues("3");
    expect(calculator.values.length).toBe(1);
  });
});
