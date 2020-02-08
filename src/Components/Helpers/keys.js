// does things
const keys = [
  [
    { value: "AC", size: "large", type: "clear" },
    { value: "DEL", type: "back" },
    {
      value: "÷",
      type: "operator"
    }
  ],
  [
    { value: "1", type: "number" },
    { value: "2", type: "number" },
    { value: "3", type: "number" },
    { value: "*", type: "operator" }
  ],
  [
    { value: "4", type: "number" },
    { value: "5", type: "number" },
    { value: "6", type: "number" },
    { value: "+", type: "operator" }
  ],
  [
    { value: "7", type: "number" },
    { value: "8", type: "number" },
    { value: "9", type: "number" },
    { value: "-", type: "operator" }
  ],
  [
    { value: ".", type: "number" },
    { value: "0", type: "operator" },
    { value: "=", size: "large", type: "sum" }
  ]
];

const types = {
  operator: "updateOperator",
  number: "updateValues",
  back: "backspace",
  clear: "clear",
  sum: "doMaths"
};

function getKeysAndAnnotateWithMethods(methods) {
  return keys.map(key =>
    key.map(k => {
      k.method = methods[types[k.type]];
      return k;
    })
  );
}

export default getKeysAndAnnotateWithMethods;
