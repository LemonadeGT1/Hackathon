import { appState } from "../AppState.js";
import { Topic } from "../Models/Topic.js";
import { topicsService } from "../Services/TopicsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawTopics() {
  console.log('_drawTopics')
  let topics = appState.topics
  let template = ''
  topics.forEach(topic => template += topic.dropdownTemplate)
  setHTML('dropdown-topic', template)
}

export class TopicsController {
  constructor() {
    console.log('TopicsController')
    appState.on('topics', _drawTopics)
    this.getTopics()
  }

  async getTopics() {
    try {
      await topicsService.getTopics()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}