import nextCharForNumberString from "./nextCharForNumberString";

describe('nextCharForNumberString', () => {
  it('should parse next char from string', () => {
    expect(nextCharForNumberString(' 64 ')).toEqual('A');
  })
});
