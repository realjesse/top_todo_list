import Priority from "../../src/components/todoListItem/Priority";
import Todo from "../../src/components/todoListItem/Todo";

test("Todo initializes correctly with valid construtors", () => {
  const title = "test";
  const priority = new Priority("none");
  expect(() => new Todo({ title, priority })).not.toThrow();
});

test("title must be longer than 0 characters", () => {
  const title = "";
  const priority = new Priority("none");
  expect(() => new Todo({ title, priority })).toThrow(
    new Error("Title must be longer than 0 chars"),
  );
});

test("must have a title that is a sting", () => {
  const title = 0;
  const priority = new Priority("none");
  expect(() => new Todo({ title, priority })).toThrow(
    new Error("Title must be a string"),
  );
});

test("must accept type Priority as priority", () => {
  const title = "valid";
  const priority = "invalid";
  expect(() => new Todo({ title, priority })).toThrow(
    new Error("Priority argument must be type Priority"),
  );
});
