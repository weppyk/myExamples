const generateText = require('./generateText');

//
test('should output name and age', () => {
    const text = generateText('Adnan', 29);
    expect(text).toBe('Adnan (29 years old)');
    const text2 = generateText('John', 30);
    expect(text2).toBe('John (30 years old)');
});

test('should output data-less text', () => {
    const text = generateText('', null);
    expect(text).toBe(' (null years old)');
});

test('should output data-less text', () => {
    const text = generateText();
    expect(text).toBe('undefined (undefined years old)');
});