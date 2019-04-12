import joinArrayOfStringThatLongerThan5 from "./joinArrayOfStringThatLongerThan5";

describe("joinArrayOfStringThatLongerThan", () => {
  it("should join strings that length longer than 5 with space", () => {
    expect(
      joinArrayOfStringThatLongerThan5(["The", "winter", "is", "coming"])
    ).toEqual("winter coming");
  });
});
