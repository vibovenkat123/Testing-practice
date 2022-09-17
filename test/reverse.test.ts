import reverseString from "../src/reverse";

it("reversing hello makes olleh", () => {
  expect(reverseString("hello")).toBe("olleh");
});
