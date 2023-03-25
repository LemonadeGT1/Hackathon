import { postsService } from "../Services/PostsService.js";
import { appState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";
import { getFormData } from "../Utils/FormHandler.js";
import { topicsService } from "../Services/TopicsService.js";

function _drawPosts() {
  let posts = appState.posts
  let template = ''
  posts.forEach(p => template += p.postsTemplate)
  // FIXME add id
  setHTML('posts', template)
}


function _drawActivePost() {
  // console.log('are we in draw active?');
  if (appState.activePost) {
    setHTML('active-post', appState.activePost.activePostTemplate)
  }
}




export class PostsController {
  constructor() {
    console.log('PostController')
    appState.on('posts', _drawPosts)
    appState.on('activePost', _drawActivePost)
  }

  async getPosts(topicId) {
    try {
      console.log('PostsController getPost')
      await postsService.getPosts(topicId)
      topicsService.setActiveTopic(topicId)
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
      // @ts-ignore
      formData.topicId = appState.activeTopic?.id
      await postsService.createPost(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.log(error)
      Pop.error(error)
    }
  }

  setActivePost(postId) {
    console.log('Set Active Post', postId)
    postsService.setActivePost(postId)

  }

  async deletePost() {
    try {
      if (await Pop.confirm('Are you serious? you suck!')) {
        await postsService.deletePost()
      }
    } catch (error) {
      console.log(error)
      Pop.error(error)
    }
  }

  // TODO put in an Update function




}