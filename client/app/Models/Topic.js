

export class Topic {
  constructor(data) {
    this.id = data._id
    this.title = data.title
    this.body = data.body
  }


  get dropdownTemplate() {
    // Copy Once Isaac finishes dropdown
    return `
    <p>ID: ${this.id}</p>
    `
  }



}