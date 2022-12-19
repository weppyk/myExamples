const cloneArray = require('./cloneArray');

test('should clone an array', () => {
    const array = [1, 2, 3];
    const clone = cloneArray(array);
    expect(clone).toEqual(array);
    expect(clone).not.toBe(array);
});