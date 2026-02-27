import Priority from "./Priority";
import Status from "./Status";
import Title from "./Title";
// private variables!
class Todo {
  constructor({ title, priority, status }) {
    if (!(title instanceof Title)) {
      throw new Error("Title must be type Title");
    }
    this.title = title;
    if (!(priority instanceof Priority)) {
      throw new Error("Priority argument must be type Priority");
    }
    this.priority = priority;
    if (!(status instanceof Status)) {
      throw new Error("Status must be type Status");
    }
    this.status = status;
  }
}

export default Todo;
