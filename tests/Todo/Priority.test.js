import Priority from "../../src/components/todoListItem/Priority";

test("does not allow invalid values", () => {
  expect(() => new Priority("invalid")).toThrow();
});

test("correctly instantiates values", () => {
  expect(() => new Priority("none")).not.toThrow();
  expect(() => new Priority("low")).not.toThrow();
  expect(() => new Priority("medium")).not.toThrow();
  expect(() => new Priority("high")).not.toThrow();
});

test("correctly returns value", () => {
  const priority = new Priority("low");
  expect(priority.getPriority()).toBe("low");
});

test("higher is higher than medium", () => {
  const highPriority = new Priority("high");
  const mediumPriority = new Priority("medium");
  expect(highPriority.isHigherThan(mediumPriority)).toBe(true);
});

test("medium is higher than low", () => {
  const mediumPriority = new Priority("medium");
  const lowPriority = new Priority("low");
  expect(mediumPriority.isHigherThan(lowPriority)).toBe(true);
});

test("low is higher than none", () => {
  const lowPriority = new Priority("low");
  const noPriority = new Priority("none");
  expect(lowPriority.isHigherThan(noPriority)).toBe(true);
});

test("none is not higher than high", () => {
  const highPriority = new Priority("high");
  const noPriority = new Priority("none");
  expect(noPriority.isHigherThan(highPriority)).toBe(false);
});

test("high is equal to high", () => {
  const firstHighPriority = new Priority("high");
  const secondHighPriority = new Priority("high");
  expect(firstHighPriority.isEqual(secondHighPriority)).toBe(true);
});
