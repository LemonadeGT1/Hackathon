import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"




class PostsService {
    
    
    async getPosts(query) {
        const posts = await dbContext.Posts.find(query)
        // .populate('author', 'name picture').populate('userCount')
        return posts
    }
    
    async getPostById(postId) {
        const foundPost = await dbContext.Posts.findById(postId)
        // .populate('author', 'name picture').populate('userCount')
        if (!foundPost) {
            throw new BadRequest("No post found")
        }
        return foundPost
    }

    async createPost(postData) {
        const newPost = await dbContext.Posts.create(postData)
        await newPost.populate('author', 'name picture')
        return newPost
    }

    async deletePost(userId, postId) {
        const foundPost = await this.getPostById(postId)
        if (foundPost.authorId !=userId) {
            throw new Forbidden("You're not able to delete this post")
        }
        await foundPost.remove()
    }
}

export const postsService = new PostsService()