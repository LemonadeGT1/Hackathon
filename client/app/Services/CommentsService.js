import { appState } from "../AppState.js";
import { Comment } from "../Models/Comment.js";
import { server } from "./AxiosService.js";


class CommentsService {
  async deleteComment(commentId) {
    await server.delete('api/comments/' + commentId)
    let res = appState.activeComments.filter(i => i.id != commentId)
    appState.activeComments = res
    appState.emit('activeComments')


  }

  async getComments() {
    const res = await server.get(`/api/comments`)

    appState.comments = res.data.map(c => new Comment(c))
    console.log('comment service', appState.comments)
  }

  getActiveComments() {
    const activeComments = appState.comments.filter(c => appState.activePost?.id == c.postId)
    appState.activeComments = activeComments
  }

  async createComment(formData) {
    const activeId = appState.activePost.id
    formData.postId = activeId
    const res = await server.post('api/comments', formData)

    appState.comments.push(new Comment(res.data))
    appState.emit('activePost')

  }

}

export const commentsService = new CommentsService()