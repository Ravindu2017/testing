const sum = require('../tests');
const { capitalize, reverseString, calculate, makeOffset} = require('../odinTest');

test('adds 1+2 to be 3', () => {
    expect(sum(1,2)).toBe(3);
});
