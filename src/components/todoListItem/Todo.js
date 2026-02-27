import Priority from "./Priority";
import Status from "./Status";

class Todo {
  constructor({ title, priority }) {
    console.log(title.length);
    if (typeof title !== "string") {
      throw new Error("Title must be a string");
    } else if (title.length === 0) {
      throw new Error("Title must be longer than 0 chars");
    }
    this.title = title;
    if (!(priority instanceof Priority)) {
      throw new Error("Priority argument must be type Priority");
    }
    this.priority = priority;
    this.status = new Status("incomplete");
  }
}

export default Todo;
