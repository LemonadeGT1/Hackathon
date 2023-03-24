import { Auth0Provider } from "@bcwdev/auth0provider";
import { postsService } from "../services/PostsService.js";
import BaseController from "../utils/BaseController.js";




export class PostsController extends BaseController {
    constructor() {
        super('api/posts')
        this.router
            .get('', this.getPosts)
            .get('/:postId', this.getPostById)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createPost)
            .delete('/:postId', this.deletePost)
    }
    
    
    async getPosts(req, res, next) {
        try {
            const query = req.query
            const posts = await postsService.getPosts(query)
            res.send(posts)
        } catch (error) {
            next(error)
        }
    }
    
    async getPostById(req, res, next) {
        try {
            const postId = req.params.postId
            const post = await postsService.getPostById(postId)
            res.send(post)
        } catch (error) {
            next(error)
        }
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

    async deletePost(req, res, next) {
        try {
            const userId = req.userInfo.id
            const postId = req.params.id
            await postsService.deletePost(userId, postId)
            res.send('Post has been deleted')
        } catch (error) {
            next(error)
        }
    }
}