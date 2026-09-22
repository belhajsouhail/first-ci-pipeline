const { add } = require("../src/calculator");
test("2 + 3 doit être égal à 5", () => {
expect(add(2, 3)).toBe(6);
});