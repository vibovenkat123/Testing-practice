import capitalizeFirst from "../src/capitalize";
describe("test capitalization", () => {
  it("capitalize hello to be Hello", () => {
    expect(capitalizeFirst("hello")).toBe("Hello");
  });
  it("capitalizing an already capitalized word should be the same as the word", () => {
    let word: String = "Test";
    expect(capitalizeFirst(word)).toBe(word);
  });
});
