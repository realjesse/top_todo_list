import Priority from "./Priority";
import Status from "./Status";

class Todo {
  constructor(title, priority) {
    this.title = title;
    this.status = new Status("incomplete");
    this.priority = new Priority(priority);
  }
}

export default Todo;
