import { commentsService } from "../Services/CommentsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";
import { getFormData } from "../Utils/FormHandler.js"
import { appState } from "../AppState.js";

function _drawActiveComments() {
  const activeId = appState.activePost?.id
  const activeComments = appState.comments.forEach(c => c.postId == activeId)
  appState.activePost.
}
export class CommentsController {
  constructor() {
    this.getComments()
    console.log('CommentsController')
  }

  async getComments() {
    try {
      await commentsService.getComments()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  async createComment() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      const formData = getFormData(form)
      await commentsService.createComment(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}