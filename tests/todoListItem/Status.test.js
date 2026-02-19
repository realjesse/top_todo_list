import Status from "../../src/components/todoListItem/Status.js";

test("instantiates valid constructors properly", () => {
  expect(() => new Status("complete")).not.toThrow();
  expect(() => new Status("incomplete")).not.toThrow();
});

test("throws error when invalid constructors are used", () => {
  expect(() => new Status("invalid")).toThrow();
});

test("returns true for complete status", () => {
  const status = new Status("complete");
  expect(status.isComplete()).toBe(true);
});

test("returns false for incomplete status", () => {
  const status = new Status("incomplete");
  expect(status.isComplete()).toBe(false);
});
