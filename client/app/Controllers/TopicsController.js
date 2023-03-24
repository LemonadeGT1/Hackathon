import { appState } from "../AppState.js";
import { Topic } from "../Models/Topic.js";
import { topicsService } from "../Services/TopicsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawTopics() {

}

export class TopicsController {
  constructor() {

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