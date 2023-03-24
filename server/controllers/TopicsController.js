import { topicsService } from "../services/TopicsService.js";
import BaseController from "../utils/BaseController.js";




export class TopicsController extends BaseController {
    constructor() {
        super('api/topics')
        this.router
        .post('', this.createTopic)
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
}