export const calculator = {
  add(x: number, y: number) {
    return x + y;
  },
  subtract(x: number, y: number) {
    return x - y;
  },
  divide(x: number, y: number) {
    if (y) return x / y;
    else return undefined;
  },
  multiply(x: number, y: number) {
    return x * y;
  },
};
