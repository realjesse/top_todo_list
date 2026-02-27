import Priority from "./Priority";
import Status from "./Status";
import Title from "./Title";
// private variables!
class Todo {
  constructor({ title, priority }) {
    if (!(title instanceof Title)) {
      throw new Error("Title must be type Title");
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
