import { calculator } from "../src/calculator";
it("add 2 + 3 to equal 5", () => {
  expect(calculator.add(2, 3)).toEqual(5);
});
