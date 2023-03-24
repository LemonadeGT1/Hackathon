import { server } from "./AxiosService.js"
import { Post } from "../Models/Post.js"
import { appState } from "../AppState.js"

class PostsService {
  async getPosts() {
    const res = await server.get('api/posts')
    appState.posts = res.data.map(p => new Post(p))
  }

}

export const postsService = new PostsService()