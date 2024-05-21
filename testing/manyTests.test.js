const { reverseString, calculate, makeOffset, analysis } = require('../odinTest');

test("Reverser", () => {
    expect(reverseString("red")).toBe("der");
});

test("Reverse a Name", () => {
    expect(reverseString("Arthur")).toBe("Ruhtra");
});

test("calculateNumbahs", () => {
    expect(calculate.add(1,2)).toBe(3);
});

test("calculateNumbahs", () => {
    expect(calculate.subtract(1756,2197)).toBe(-441);
});

test("calculateNumbahs", () => {
    expect(calculate.divide(84,4)).toBe(21);
});

test("calculateNumbahs", () => {
    expect(calculate.multiply(54,19)).toBe(1026);
});

test("protect me Caesuh", () => {
    expect(makeOffset("TrAiNIng", 85)).toBe("AyHpUPun");
});

test("Caesar 2", () => {
    expect(makeOffset("Raven", -170)).toBe("Dmhqz");
});

test("Caesar Positive Low", () => {
    expect(makeOffset("TrAiNIng", 2)).toBe("VtCkPKpi");
});

test("Caesar Negative Low", () => {
    expect(makeOffset("Raven", -5)).toBe("Mvqzi");
});

test("average", () => {
    expect(analysis.average([3,7,9,2,2,4,1])).toBe(4);
});

test("Minimum", () => {
    expect(analysis.min([2,3,7,7])).toBe(2);
});

test("Maximum", () => {
    expect(analysis.max([3,1,9,18,12,3,15,8,9,7,6])).toBe(18);
});

test("Length", () => {
    expect(analysis.length([3,4,5,6,31,2,3,5])).toBe(8);
});