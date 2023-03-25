import { dev } from './env.js'
import { EventEmitter } from './Utils/EventEmitter.js'
import { isValidProp } from './Utils/isValidProp.js'
import { Topic } from "./Models/Topic.js"
import { Comment } from "./Models/Comment.js"
import { Post } from "./Models/Post.js"


class AppState extends EventEmitter {
  user = {}
  /** @type {import('./Models/Account.js').Account} */
  // @ts-ignore
  account = {}
  /** @type {import('./Models/Value').Value[]} */
  values = []
  socketData = []

  /** @type {import('./Models/Topic').Topic[]} */

  topics = []

  /** @type {import('./Models/Topic').Topic|null} */
  activeTopic = null


  /** @type {import('./Models/Post').Post[]} */
  posts = []

  /** @type {import('./Models/Post').Post|null} */

  activePost = null

  /** @type {import('./Models/Comment').Comment[]} */
  comments = []
  activeComments = []

}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

if (dev) {
  // @ts-ignore
  window.appState = appState
}
