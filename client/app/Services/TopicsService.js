import { server } from "./AxiosService.js"
import { Topic } from "../Models/Topic.js"
import { appState } from "../AppState.js"

class TopicsService {
  setActiveTopic(topicId) {
    const topic = appState.topics.find(t => t.id == topicId)
    // console.log(topic);
    if (topic) {
      appState.activeTopic = topic
      console.log(appState.activeTopic, 'active');
    } return
  }

  // setActiveTopic(topicId) {
  //   console.log('set Active Topic Service', topicId)
  //   const response = await server.get(`api/topics/${topicId}`)
  //   console.log("RESPONSE", response.data);
  //   appState.activePost = new Post(response.data)
  //   appState.emit('activePost')
  //   console.log(appState.activePost)
  //   return response
  // }


  async getTopics() {
    const res = await server.get('api/topics')
    console.log('get Topics from Service')
    appState.topics = res.data.map(t => new Topic(t))
    console.log(appState.topics)
  }


}

export const topicsService = new TopicsService()