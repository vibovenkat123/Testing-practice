import caesar from "../caesar";
describe("basic shifting testing", () => {
  it("Can shift 1 place", () => {
    expect(caesar("abc", 1)).toBe("bcd");
  });
  it("shifting 26 places is the same as original string", () => {
    let string: String = "abc";
    expect(caesar(string, 26)).toBe(string);
  });
});
describe("advanced shifting", () => {
  it("can shift more than 26 places", () => {
    expect(caesar("hello", 32)).toBe("nkrru");
  });
  it("can shift with two or more words", () => {
    expect(caesar("these are multiple words", 10)).toBe(
      "droco kbo wevdszvo gybnc"
    );
  });
  it("can shift with punctuation", () => {
    expect(caesar("This sentence, has a lot? of punctuation!", 3)).toBe(
      "Wklv vhqwhqfh, kdv d orw? ri sxqfwxdwlrq!"
    );
  });
});
