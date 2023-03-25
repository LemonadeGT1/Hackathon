

export class Topic {
  constructor(data) {
    this.id = data._id
    this.title = data.title
    this.body = data.body
  }


  get dropdownTemplate() {

    return `
    <li class="border-bottom d-flex pt-3 ps-3 align-items-center selectable" onclick="app.postsController.getPosts('${this.id}')"   title="${this.body}">
      <p id="${this.id}">${this.title}</p>
    </li>
    `
  }



}