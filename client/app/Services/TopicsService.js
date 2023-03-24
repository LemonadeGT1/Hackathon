import { server } from "./AxiosService.js"
import { Topic } from "../Models/Topic.js"
import { appState } from "../AppState.js"

class TopicsService {


  async getTopics() {
    const res = await server.get('api/topics')
    appState.topics = res.data.map(t => new Topic(t))
  }


}

export const topicsService = new TopicsService()