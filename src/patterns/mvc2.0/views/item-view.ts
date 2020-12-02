export class Item {
  parentElement: HTMLDivElement
  data: string
  constructor(parentElement: HTMLDivElement, data: string) {
    this.parentElement = parentElement
    this.data = data
  }

  render() {
    const html = `
      <p id="apa">${this.data}</p>
    `
    document.getElementById("apa")?.addEventListener("click", () => {
      console.log(this, "student has been clicked")
    })
    this.parentElement.insertAdjacentHTML("beforeend", html)
  }
}
