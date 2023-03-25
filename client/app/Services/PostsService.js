import { server } from "./AxiosService.js"
import { Post } from "../Models/Post.js"
import { appState } from "../AppState.js"

class PostsService {

  async setActivePost(postId) {
    console.log('set Active Post Service', postId)
    const response = await server.get(`api/posts/${postId}`)
    console.log("RESPONSE", response.data);
    appState.activePost = new Post(response.data)
    appState.emit('activePost')
    console.log(appState.activePost)
    return response
  }

  async createPost(formData) {
    // @ts-ignore
    const activeId = appState.activeTopic.id
    formData.topicId = activeId
    const res = await server.post('api/posts', formData)
    appState.posts.push(new Post(res.data))
    appState.emit('posts')
  }
  async getPosts(topicId) {
    const res = await server.get(`api/posts/?topicId=${topicId}`)
    console.log('PostsService getPosts', res)
    appState.posts = res.data.map(p => new Post(p))
  }

  async deletePost() {
    const postId = appState.activePost?.id
    // const post = appState.activePost
    // const res = await server.delete(`api/posts/${postId}`)
    const res = await server.delete('api/posts/' + postId)
    const newPosts = appState.posts.filter(i => i.id != postId)
    appState.posts = newPosts
    appState.emit('posts')
    console.log('deleted post', res.data);
  }
}

export const postsService = new PostsService()