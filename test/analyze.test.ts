import analyze from "../src/analyze";
let arrayAnalyze: analyze;
beforeEach(() => {
  arrayAnalyze = new analyze([1, 4, 7, 9]);
});
describe("Test the analyzing methods", () => {
  it("can get average of the array", () => {
    expect(arrayAnalyze.average).toEqual(5.25);
  });
  it("can get minimum value", () => {
    expect(arrayAnalyze.min).toEqual(1);
  });
  it("can get maximum value", () => {
    expect(arrayAnalyze.max).toEqual(9);
  });
  it("can get length", () => {
    expect(arrayAnalyze.length).toEqual(4);
  });
});
