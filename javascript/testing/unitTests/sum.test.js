/** Unit test by jest*/
const sum = require('./sum');

test('Properly ads two numbers', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 2)).toBe(1);
    expect(sum(-2, -2)).toBe(-4);
    expect(sum(0.189, 0.001)).toBe(0.19);
});
