import { appState } from "../AppState.js";
import { server } from "./AxiosService.js";


class CommentsService {
  async getComments() {
    const res = await server.get('/api/comments')

    appState.comments = res.data.map(c => new Comment(c))
    console.log('comment service', appState.comments)
  }

}

export const commentsService = new CommentsService()