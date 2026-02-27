import Priority from "../../src/components/Todo/Priority";
import Todo from "../../src/components/Todo/Todo";
import Title from "../../src/components/Todo/Title";
import Status from "../../src/components/Todo/Status";

function makeValidTodo(overrides = {}) {
  return new Todo({
    title: new Title("valid"),
    priority: new Priority("none"),
    status: new Status("incomplete"),
    ...overrides,
  });
}

test("Todo initializes correctly with valid construtors", () => {
  expect(() => makeValidTodo()).not.toThrow();
});

test("title must be type Title", () => {
  const title = "invalid";
  const priority = new Priority("none");
  const status = new Status("incomplete");
  expect(() => new Todo({ title, priority, status })).toThrow(
    new Error("Title must be type Title"),
  );
});

test("must accept type Priority as priority", () => {
  const title = new Title("valid");
  const priority = "invalid";
  const status = new Status("incomplete");
  expect(() => new Todo({ title, priority, status })).toThrow(
    new Error("Priority argument must be type Priority"),
  );
});

test("status must be type Status", () => {
  const title = new Title("valid");
  const priority = new Priority("none");
  const status = 0;
  expect(() => new Todo({ title, priority, status })).toThrow(
    new Error("Status must be type Status"),
  );
});
