import analyze from "../src/analyze";
let arrayAnalyze: analyze;
beforeEach(() => {
  arrayAnalyze = new analyze([1, 4, 7, 9]);
});
it("can get average of the array", () => {
  expect(arrayAnalyze.average).toEqual(5.25);
});
it.todo("can get minimum value");
it.todo("can get maximum value");
it.todo("can get length");
