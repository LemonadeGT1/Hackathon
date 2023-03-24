import { topicsService } from "../services/TopicsService.js";
import BaseController from "../utils/BaseController.js";




export class TopicsController extends BaseController {
    constructor() {
        super('api/topics')
        this.router
        .post('', this.createTopic)
        .get ('', this.getTopics)
    }

    async createTopic(req, res, next) {
        try {
            const topicData = req.body
            const newTopic = await topicsService.createTopic(topicData)
            res.send(newTopic)
        } catch (error) {
            next(error)
        }
    }

    async getTopics(req,res, next) {
        try {
            const query = req.query
            const topics = await topicsService.getTopics(query)
            res.send(topics)
        } catch (error) {
            next(error)
        }
    }
}