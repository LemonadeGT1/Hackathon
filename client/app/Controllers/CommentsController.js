import { commentsService } from "../Services/CommentsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";
import { getFormData } from "../Utils/FormHandler.js"
import { appState } from "../AppState.js";

function _drawActiveComments() {
  const activeComments = appState.activeComments
  let template = ''
  activeComments.forEach(c => template += c.commentTemplate)
  setHTML('comments', template)
}
export class CommentsController {
  constructor() {
    this.getComments()
    appState.on('activePost', this.getActiveComments)
    appState.on('activeComments', _drawActiveComments)
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

  async getActiveComments() {
    try {
      await commentsService.getActiveComments()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  async deleteComment(commentId) {
    try {
      await commentsService.deleteComment(commentId)
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