class todoListItemStatus {
  #status;

  constructor(status) {
    if (status !== "complete" || status !== "incomplete") {
      throw new Error("Invalid status");
    }

    this.#status = status;
  }

  isComplete() {
    return this.#status === "complete";
  }
}

export default todoListItemStatus;
