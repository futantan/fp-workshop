import doubleArr from "./doubleArr";

describe("doubleArr", () => {
  it("should double every element in array", () => {
    expect(doubleArr([1, 2, 3])).toEqual([2, 4, 6]);
  });
});
