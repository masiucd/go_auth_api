class Backend {
  constructor() {
    this.baseUrl = ""
  }
  setBaseUrl(url) {
    this.baseUrl = url
  }
  async get(endpoint) {
    try {
      const response = await fetch(this.baseUrl + endpoint)
      return await response.json()
    } catch (err) {
      throw new Error(err)
    }
  }
}

//sample usage
const API = new Backend()
API.setBaseUrl("https://api.learnjavascript.online/demo")

API.get("/notifications/new.json")
  .then(data => {
    console.log(data.count)
  })
  .catch(error => {
    console.log("There was an error", error)
  })
