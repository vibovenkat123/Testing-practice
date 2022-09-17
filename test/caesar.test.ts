import caesar from "../src/caesar";
it("Can shift 1 place", () => {
  expect(caesar("abc", 1)).toBe("bcd");
});
