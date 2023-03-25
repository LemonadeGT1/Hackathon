import { server } from "./AxiosService.js"
import { Post } from "../Models/Post.js"
import { appState } from "../AppState.js"

class PostsService {
  async setActivePost(postId) {
    console.log('set Active Post Service', postId)
    const response = await server.get(`api/posts/${postId}`)
    appState.activePost = response
    console.log(appState.activePost)
    return response
  }

  async createPost(formData) {
    const res = await server.post('api/posts', formData)
    appState.posts.push(new Post(res.data))
    appState.emit('posts')
  }
  async getPosts(topicId) {
    const res = await server.get(`api/posts/?topicId=${topicId}`)
    console.log('PostsService getPosts', res)
    appState.posts = res.data.map(p => new Post(p))
  }

}

export const postsService = new PostsService()