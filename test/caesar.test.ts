import caesar from "../src/caesar";
it("Can shift 1 place", () => {
  expect(caesar("abc", 1)).toBe("bcd");
});
it("shifting 26 places is the same as original string", () => {
  let string: String = "abc";
  expect(caesar(string, 26)).toBe(string);
});
it("can shift more than 26 places", () => {
  expect(caesar("hello", 32)).toBe("nkrru");
});
