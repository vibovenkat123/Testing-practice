import { calculator } from "../calculator";
describe("addition", () => {
  it("add 2 + 3 to equal 5", () => {
    expect(calculator.add(2, 3)).toEqual(5);
  });
  it("adding punctuation", () => {
    expect(calculator.add(1.2, 3.3)).toBeCloseTo(4.5);
  });
});
describe("subtraction", () => {
  it("subtract 6 - 4 to equal 2", () => {
    expect(calculator.subtract(6, 4)).toEqual(2);
  });
  it("subtracting punctuation", () => {
    expect(calculator.subtract(3.3, 1.2)).toBeCloseTo(2.1);
  });
});
describe("multiply", () => {
  it("multiple 12 * 3 to equal 36", () => {
    expect(calculator.multiply(12, 3)).toEqual(36);
  });
  it("multiplying punctuation", () => {
    expect(calculator.multiply(1.2, 3.3)).toBeCloseTo(3.96);
  });
});
describe("division", () => {
  it("divide 12 / 3 to equal 4", () => {
    expect(calculator.divide(12, 3)).toEqual(4);
  });
  it("dividing punctuation", () => {
    expect(calculator.divide(28.38, 8.6)).toBeCloseTo(3.3);
  });
  it("dividing by 0 is undefined", () => {
    expect(calculator.divide(4, 0)).toBeUndefined;
  });
});
