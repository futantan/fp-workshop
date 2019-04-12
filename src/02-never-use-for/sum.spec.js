import sum from "./sum";

describe("sum", () => {
  it("should sum all values of arr", () => {
    expect(sum([1, 2, 3, 4, 5])).toBe(15);
  });
});
