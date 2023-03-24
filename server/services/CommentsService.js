import { dbContext } from "../db/DbContext.js"


class CommentsService {
  async getComments(query) {
    const comments = await dbContext.Comments.find(query)
    return comments
  }

}

export const commentsService = new CommentsService()