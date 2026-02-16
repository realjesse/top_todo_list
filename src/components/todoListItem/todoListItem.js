import todoListItemPriority from "./todoListItemPriority";
import todoListItemStatus from "./todoListItemStatus";

class todoListItem {
  constructor(title, priority) {
    this.title = title;
    this.status = new todoListItemStatus("incomplete");
    this.priority = new todoListItemPriority(priority);
  }
}

export default todoListItem;
