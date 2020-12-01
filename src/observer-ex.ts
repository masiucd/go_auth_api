import { Observer } from "./patterns/observers"
;(() => {
  const createElement = (tag: string, className: string): HTMLElement => {
    const element = document.createElement(tag)
    element.classList.add(className)
    return element
  }

  const wrapper = createElement("div", "wrapper")

  const input = createElement("input", "js-input") as HTMLInputElement
  input.type = "text"

  const p1 = createElement("p", "p1")
  const p2 = createElement("p", "p2")
  const p3 = createElement("p", "p3")

  const updateP1 = (text: string) => (p1.textContent = text)
  const updateP2 = (text: string) => (p2.textContent = text)
  const updateP3 = (text: string) => (p3.textContent = text)

  const headingsObserver = new Observer()

  headingsObserver.subscribe(updateP1)
  headingsObserver.subscribe(updateP2)
  headingsObserver.subscribe(updateP3)

  input.addEventListener("keyup", (e: any) => {
    headingsObserver.fire(e.target.value)
  })

  wrapper.append(input, p1, p2, p3)
  document.getElementById("root")?.appendChild(wrapper)
})()
