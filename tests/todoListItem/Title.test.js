import Title from "../../src/components/todoListItem/Title";

test("instantiates correctly with valid argument", () => {
  expect(() => new Title("valid")).not.toThrow();
});

test("title must be a string", () => {
  expect(() => new Title(0)).toThrow(new Error("Title must be a string"));
});

test("title must be greater than 0 chars", () => {
  expect(() => new Title("")).toThrow(
    new Error("Title must be greater than 0 chars"),
  );
});

test("returns title", () => {
  const title = new Title("valid");
  expect(title.getTitle()).toBe("valid");
});
