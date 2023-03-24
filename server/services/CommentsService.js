import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"



class CommentsService {

  async getComments(query) {
    const comments = await dbContext.Comments.find(query)
    return comments
  }



  async createComment(commentData) {
    const newComment = await dbContext.Comments.create(commentData)
    // await newComment.populate('author', 'name picture')
    return newComment
  }



  async editComment(commentEdits, commentId) {
    const originalComment = await dbContext.Comments.findById(commentId)
    if (!originalComment) {
      throw new BadRequest("Cannot Edit Nonexistent Comment")
    } else {
      originalComment.body = commentEdits.body ? commentEdits.body : originalComment.body
      await originalComment.save()
      return originalComment
    }
  }



  async deleteComment(userId, commentId) {
    const foundComment = await dbContext.Comments.findById(commentId)
    if (!foundComment) {

      throw new BadRequest("Incorrect Comment")

    } else {

      if (foundComment.authorId != userId) {
        throw new Forbidden("Hands off Villain")
      }
      await foundComment.remove()

    }



  }


}

export const commentsService = new CommentsService()