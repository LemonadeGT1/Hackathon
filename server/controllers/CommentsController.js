import BaseController from "../utils/BaseController.js";
import { commentsService } from "../services/CommentsService.js";
import { Auth0Provider } from "@bcwdev/auth0provider";



export class CommentsController extends BaseController {
  constructor() {
    super('/api/comments')
    this.router
      .get('', this.getComments)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createComment)
      .delete('/:commentId', this.deleteComment)
  }


  async getComments(req, res, next) {
    try {
      const query = req.query
      const comments = await commentsService.getComments(query)
      return res.send(comments)
    } catch (error) {
      next(error)
    }
  }


  async createComment(req, res, next) {
    try {
      const commentData = req.body
      const userId = req.userInfo.id
      commentData.authorId = userId
      const newComment = await commentsService.createComment(commentData)
      res.send(newComment)

    } catch (error) {
      next(error)
    }
  }


  async deleteComment(req, res, next) {
    try {
      const userId = req.userInfo.id
      const commentId = req.params.commentId
      await commentsService.deleteComment(userId, commentId)
      res.send(`Comment Deleted: ${commentId}`)
    } catch (error) {
      next(error)
    }

  }
}