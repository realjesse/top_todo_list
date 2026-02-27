class Title {
  #value;

  constructor(value) {
    if (typeof value !== "string") {
      throw new Error("Title must be a string");
    } else if (value.length < 1) {
      throw new Error("Title must be greater than 0 chars");
    }
    this.#value = value;
  }

  getTitle() {
    return this.#value;
  }
}

export default Title;
