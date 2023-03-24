import { dbContext } from "../db/DbContext.js"




class TopicsService{

    async createTopic(topicData) {
        const newTopic = await dbContext.Topics.create(topicData)
        return newTopic
    }

}

export const topicsService = new TopicsService()