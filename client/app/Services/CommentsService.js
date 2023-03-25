import { appState } from "../AppState.js";
import { Comment } from "../Models/Comment.js";
import { server } from "./AxiosService.js";


class CommentsService {

  async getComments() {
    const res = await server.get(`/api/comments`)

    appState.comments = res.data.map(c => new Comment(c))
    console.log('comment service', appState.comments)
  }

  async createComment(formData) {
    const activeId = appState.activePost.id
    formData.postId = activeId
    const res = await server.post('api/comments', formData)

    appState.comments.push(new Comment(res.data))
    appState.emit('comments')
  }

}

export const commentsService = new CommentsService()