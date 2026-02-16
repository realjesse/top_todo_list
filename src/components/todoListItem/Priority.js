class Priority {
  #value;

  static #rankMap = {
    none: 0,
    low: 1,
    medium: 2,
    high: 3,
  };

  constructor(value) {
    if (!Priority.#rankMap[value]) {
      throw new Error("Invalid priority");
    }

    this.#value = value;
  }

  #rank() {
    return Priority.#rankMap[this.#value];
  }

  getPriority() {
    return this.#value;
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

export default Priority;
