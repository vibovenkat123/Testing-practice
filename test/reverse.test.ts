import reverseString from "../src/reverse";

it("reversing hello makes olleh", () => {
  expect(reverseString("hello")).toBe("olleh");
});
it("reverse will keep the same case", () => {
  expect(reverseString("HELLO")).toBe("OLLEH");
  expect(reverseString("tEsTinG")).toBe("GniTsEt");
});
it("works with spaces", () => {
  expect(reverseString("testing 1 2 3")).toBe("3 2 1 gnitset");
});
