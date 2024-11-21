import { calcTotal } from "./calcTotal";
describe("calcTotal Function", () => {
  test("should return 0 for an empty string", () => {
    expect(calcTotal("")).toBe(0);
  });

  test("should return the number itself for a single number", () => {
    expect(calcTotal("1")).toBe(1);
  });

  test("should return the sum of two numbers", () => {
    expect(calcTotal("1,5")).toBe(6);
  });

  test("should handle any number of numbers", () => {
    expect(calcTotal("1,2,3,4,5")).toBe(15);
  });

  test("should handle new lines between numbers", () => {
    expect(calcTotal("1\n2,3")).toBe(6);
  });

  test("should support custom delimiters", () => {
    expect(calcTotal("//;\n1;2")).toBe(3);
    expect(calcTotal("//|\n4|5|6")).toBe(15);
  });

  test("should throw an error for negative numbers", () => {
    expect(() => calcTotal("1,-2,3")).toThrow(
      "negative numbers not allowed -2"
    );
    expect(() => calcTotal("//;\n1;-2;3;-4")).toThrow(
      "negative numbers not allowed -2, -4"
    );
  });
});
