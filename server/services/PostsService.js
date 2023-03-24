import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"




class PostsService {
    
    async getPosts(query) {
        const posts = await dbContext.Posts.find(query).populate('author', 'name picture').populate('userCount')
        return posts
    }
    
    async getPostById(postId) {
        const foundPost = await dbContext.Posts.findById(postId).populate('author', 'name picture').populate('userCount')
        if (!foundPost) {
            throw new BadRequest("No post found")
        }
    }

    async createPost(postData) {
        const newPost = await dbContext.Posts.create(postData)
        await newPost.populate('author', 'name picture')
        return newPost
    }

}

export const postsService = new PostsService()