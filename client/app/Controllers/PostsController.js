import { postsService } from "../Services/PostsService.js";
import { appState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";
import { getFormData } from "../Utils/FormHandler.js";

function _drawPosts() {
  let posts = appState.posts
  let template = ''
  posts.forEach(p => template += p.postsTemplate)
  // FIXME add id
  setHTML('posts', template)
}
export class PostsController {
  constructor() {
    console.log('PostController')
    this.getPosts()
    appState.on('posts', _drawPosts)
  }

  async getPosts() {
    try {
      console.log('PostsController getPost')
      await postsService.getPosts()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }



  async createPost() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      const formData = getFormData(form)
      await postsService.createPost(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.log(error)
      Pop.error(error)
    }
  }

}