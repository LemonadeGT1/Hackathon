import { commentsService } from "../Services/CommentsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";
import { getFormData } from "../Utils/FormHandler.js"
import { appState } from "../AppState.js";


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
      const formData = getFormData()
      await commentsService.createComment(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}