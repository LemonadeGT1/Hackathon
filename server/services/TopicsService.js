import { dbContext } from "../db/DbContext.js"




class TopicsService{
    
    async createTopic(topicData) {
        const newTopic = await dbContext.Topics.create(topicData)
        return newTopic
    }
    
    async getTopics(query) {
        const topics = await dbContext.Topics.find(query)
        return topics
    }
}

export const topicsService = new TopicsService()