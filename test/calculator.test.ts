import { calculator } from "../src/calculator";
it("add 2 + 3 to equal 5", () => {
  expect(calculator.add(2, 3)).toEqual(5);
});
it("subtract 6 - 4 to equal 2", () => {
  expect(calculator.subtract(6, 4)).toEqual(2);
});
it("multiple 12 * 3 to equal 36", () => {
  expect(calculator.multiply(12, 3)).toEqual(36);
});
