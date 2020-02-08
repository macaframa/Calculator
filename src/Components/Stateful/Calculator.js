function updateNumber(number, values, hasOperator) {
  const last = values.length - 1 || 0;
  if (values.length === 0 || (hasOperator && values.length === 1)) {
    values.push(number);
    return;
  }
  values[last] = values[last] + number;
}

function operatorIsNotValid(op) {
  const operators = ["*", "÷", "+", "-"];
  return !operators.includes(op);
}

class Calculator {
  constructor() {
    this.operator = null;
    this.values = [];
    this.sum = null;
  }

  updateOperator(operator) {
    if (operatorIsNotValid(operator)) {
      return;
    }
    this.operator = operator;
  }

  updateValues(number) {
    if (Number.isNaN(number)) {
      return;
    }
    updateNumber(number, this.values, this.operator);
  }

  backspace() {
    if (this.sum) {
      this.clear();
      return;
    }
    const first = this.values.length > 0 ? this.values[0] : null;
    const last =
      this.values.length > 0 ? this.values[this.values.length - 1 || 0] : null;
    if (Object.is(first, last) || !this.operator) {
      const split = this.values[0].split("");
      split.pop();
      this.values[0] = split.join("");
      return;
    } else if (last) {
      const split = this.values[1].split("");
      split.pop();
      this.values[1] = split.join("");
      return;
    } else if (this.operator) {
      this.operator = null;
      return;
    }
  }

  clear() {
    this.operator = "";
    this.sum = null;
    this.values = [];
  }

  doMaths() {
    this.sum = eval(this.values.join(this.operator));
  }
}

export default Calculator;
