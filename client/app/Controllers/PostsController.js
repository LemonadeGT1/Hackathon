import { postsService } from "../Services/PostsService.js";
import { appState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";
import { getFormData } from "../Utils/FormHandler.js";


export class PostsController {
  constructor() {
    appState.on()
  }
  async getPosts() {
    try {
      await postsService.getPosts()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  async createPost() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      const formData = getFormData(form)
      await postsService.createPost(formData)
      form.reset()
    } catch (error) {

    }

  }

}