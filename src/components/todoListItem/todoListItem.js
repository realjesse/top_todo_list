import todoListItemStatus from "./todoListItemStatus";

class todoListItem {
  constructor(title) {
    this.title = title;
    this.status = new todoListItemStatus("incomplete");
  }
}

export default todoListItem;
