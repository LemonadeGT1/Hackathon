

export class Post {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.imgUrl = data.imgUrl
    this.body = data.body
    this.createdAt = new Date(data.createdAt)
  }

  get postsTemplate() {
    return `
    <div class=" card p-3 elevation-4 mb-3">
          <div class="row justify-content-end">
            <div class="col-2">
              <img class="post-img elevation-4 img-fluid"
                src="${this.imgUrl}"
                alt="bat dead parent">
            </div>
            <div class="col-10 d-flex flex-column justify-content-between selectable ps-4" data-bs-toggle="offcanvas" data-bs-target="#favoritesOffcanvas" onclick="app.postsController.setActivePost('${this.id}')">
              <div>
                <h4>${this.title}</h4>
                <p>${this.body}</p>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex justify-content-center">
                  <p>
                    <img class="profile-pic"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvBR5bnG1AfHRJ8kX79I-1Z1EfNvxKyZqiM27HASBL&s"
                      alt="random dude">
                    Username: [[Id: ${this.id}]] [[Created: ${(this.createdAt).toLocaleDateString()}]]
                  </p>
                </div>
                <div class="d-flex align-items-center">
                  <p>❤️</p>
                  <p>10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    `
  }
}