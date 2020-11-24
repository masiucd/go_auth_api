class TodoView {
  app: HTMLDivElement
  title: HTMLHeadElement
  form: HTMLFormElement
  input: HTMLInputElement
  submitButton: HTMLButtonElement

  constructor() {
    this.app = this.getElement("root")
  }

  createElement(tag, className = null) {
    const element = document.createElement(tag) as HTMLElement
    if (className) element.classList.add(className)
    return element
  }

  getElement(selector) {
    const element = document.querySelector(selector)
    return element
  }

  render() {}
}
