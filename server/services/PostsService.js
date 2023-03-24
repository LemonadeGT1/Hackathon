import { dbContext } from "../db/DbContext.js"




class PostsService {

    async createPost(postData) {
        const newPost = await dbContext.Posts.create(postData)
        await newPost.populate('author', 'name picture')
        return newPost
    }

}

export const postsService = new PostsService()