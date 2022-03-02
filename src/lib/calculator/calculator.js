module.exports.sum = (num1, num2) => {
  const int1 = parseInt(num1, 10); // In this case, using +num1 turns the empty string to 0
  const int2 = parseInt(num2, 10);

  if (Number.isNaN(int1) || Number.isNaN(int2)) {
    throw new Error("Please check your input");
  }

  return int1 + int2;
}