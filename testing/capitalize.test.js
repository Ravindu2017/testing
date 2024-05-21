const { capitalize } = require('../odinTest');

test("capital A", () => {
    expect(capitalize("jake")).toBe("Jake");
});