import { AuthController } from './Controllers/AuthController.js';
import { ValuesController } from './Controllers/ValuesController.js';
import { TopicsController } from "./Controllers/TopicsController.js";
import { CommentsController } from "./Controllers/CommentsController.js";
import { PostsController } from "./Controllers/PostsController.js";

class App {
  authController = new AuthController();
  valuesController = new ValuesController();
  topicsController = new TopicsController();
  commentsController = new CommentsController();
  postsController = new PostsController()

}

// @ts-ignore
window.app = new App()
