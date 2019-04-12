import calculate from "./calculate";

describe("calculate", () => {
  it("should calculate ((x * y) + 1)^2", () => {
    expect(calculate(3, 4)).toBe(169);
  });
});
