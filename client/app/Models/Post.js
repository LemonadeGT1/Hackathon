

export class Post {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.imgUrl = data.imgUrl
    this.body = data.body
  }

  get postsTemplate() {

    // FIXME add template from HTML
    return `
    `
  }
}