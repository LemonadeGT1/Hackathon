import { Auth0Provider } from "@bcwdev/auth0provider";
import { postsService } from "../services/PostsService.js";
import BaseController from "../utils/BaseController.js";




export class PostsController extends BaseController {
    constructor() {
        super('api/posts')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createPost)
    }

    async createPost(req, res, next) {
        try {
            const postData = req.body
            const userId = req.userInfo.id
            postData.authorId = userId
            const newPost = await postsService.createPost(postData)
            res.send(newPost)
        } catch (error) {
            next(error)
        }
    }
}