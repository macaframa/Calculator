function toFixedTrunc(num, len) {
  const v = (typeof num === "string" ? num : num.toString()).split(".");
  if (len <= 0) return v[0];
  let f = v[1] || "";
  if (f.length > len) return `${v[0]}.${f.substr(0, len)}`;
  while (f.length < len) f += "0";
  return `${v[0]}.${f}`;
}

export default {
  toFixedTrunc
};
