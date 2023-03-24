import BaseController from "../utils/BaseController.js";
import { commentsService } from "../services/CommentsService.js";



export class CommentsController extends BaseController {
  constructor() {
    super('/api/comments')
    this.router
      .get('', this.getComments)
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
}