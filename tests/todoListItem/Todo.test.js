import Todo from "../../src/components/todoListItem/Todo";

test("Todo initializes correctly with valid construtors", () => {
  expect(() => new Todo("test", "none")).not.toThrow();
});

test("Todo to throw error if initiatilized with invalid constructors", () => {
  expect(() => new Todo("valid", "invalid")).toThrow();
});

test("title must be longer than 0 characters", () => {
  expect(() => new Todo("", "none")).toThrow(
    new Error("Title must be longer than 0 chars"),
  );
});

test("must have a title that is a sting", () => {
  expect(() => new Todo(0, "none")).toThrow(
    new Error("Title must be a string"),
  );
});
