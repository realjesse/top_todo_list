class Status {
  #value;

  constructor(value) {
    if (value !== "complete" || value !== "incomplete") {
      throw new Error("Invalid status");
    }

    this.#value = value;
  }

  isComplete() {
    return this.#value === "complete";
  }
}

export default Status;
