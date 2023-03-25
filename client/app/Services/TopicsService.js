import { server } from "./AxiosService.js"
import { Topic } from "../Models/Topic.js"
import { appState } from "../AppState.js"

class TopicsService {


  async getTopics() {
    const res = await server.get('api/topics')
    console.log('get Topics from Service')
    appState.topics = res.data.map(t => new Topic(t))
    console.log(appState.topics)
  }


}

export const topicsService = new TopicsService()