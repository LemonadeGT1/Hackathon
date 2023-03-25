import { appState } from "../AppState.js"


export class Comment {
  constructor(data) {
    this.id = data.id
    this.body = data.body
    this.postId = data.postId
  }

  get commentTemplate() {
    return `
    <div class="my-3 p-3  comment-style rounded">
    <div class="col-12">


      <p><span class="circle-style"><i class="mdi mdi-circle-outline"></i></span>${this.body}</p>
    </div>
    <div class="col-12 d-flex justify-content-between align-items-center mb-2">
      <div class="d-flex">
        <h5 class="">0</h5>
        <h5 class="me-3 selectable" onclick="">❤️</h5>
        <h5 class="">0</h5>
        <h5 class="selectable" onclick="">🤮</h5>


      </div>
      <div>
        <button class="btn btn-outline-info listings-button" data-bs-toggle="modal"
          data-bs-target="#edit-comment-modal"><i class="mdi mdi-pencil"></i></button>
        <button class="btn btn-outline-danger" onclick="app.commentsController.deleteComment('${this.id}')"><i
            class="mdi mdi-delete"></i></button>
      </div>
    </div>
  </div>`
  }


}
