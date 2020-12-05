import { Admin, init } from "../models/admin"

export class AdminView {
  parentElement: HTMLDivElement
  admin: Admin
  constructor(parentElement: HTMLDivElement) {
    this.parentElement = parentElement
    this.admin = init().admin
  }

  render(): void {
    // console.log("admin", this.admin, this.parentElement)
    const html = `
      <div class="admin-wrapper wrapper-${this.admin.firstName}">
        <button id="admin-profile-btn" class="button">Admin Profile</button>

        <div class="admin-content">
          <h3> Mr Admin ${this.admin.firstName}</h3>
          <p>${this.admin.slug}</p>
        </div>

      </div>
    `
    this.parentElement.innerHTML = html

    const adminContent = document.querySelector(".admin-content") as HTMLDivElement
    document.getElementById("admin-profile-btn")?.addEventListener("click", () => {
      adminContent.classList.toggle("show-admin-content")
    })
  }
}
