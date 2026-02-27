import Priority from "../../src/components/todoListItem/Priority";
import Todo from "../../src/components/todoListItem/Todo";
import Title from "../../src/components/todoListItem/Title";

test("Todo initializes correctly with valid construtors", () => {
  const title = new Title("valid");
  const priority = new Priority("none");
  expect(() => new Todo({ title, priority })).not.toThrow();
});

test("title must be type Title", () => {
  const title = "invalid";
  const priority = new Priority("none");
  expect(() => new Todo({ title, priority })).toThrow(
    new Error("Title must be type Title"),
  );
});

test("must accept type Priority as priority", () => {
  const title = new Title("valid");
  const priority = "invalid";
  expect(() => new Todo({ title, priority })).toThrow(
    new Error("Priority argument must be type Priority"),
  );
});
