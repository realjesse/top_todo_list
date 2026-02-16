class todoListItemPriority {
  #priority;

  static #rankMap = {
    none: 0,
    low: 1,
    medium: 2,
    high: 3,
  };

  constructor(priority) {
    if (!todoListItemPriority.#rankMap[priority]) {
      throw new Error("Invalid priority");
    }

    this.#priority = priority;
  }

  #rank() {
    return todoListItemPriority.#rankMap[this.#priority];
  }

  getPriority() {
    return this.#priority;
  }

  isHigherThan(otherPriority) {
    return this.#rank() > otherPriority.#rank();
  }

  isLowerThan(otherPriority) {
    return this.#rank() < otherPriority.#rank();
  }

  isEqual(otherPriority) {
    return this.#rank() === otherPriority.#rank();
  }
}

export default todoListItemPriority;
