class Priority {
  #value;

  static #rankMap = {
    none: 1,
    low: 2,
    medium: 3,
    high: 4,
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
