import { AuthController } from './Controllers/AuthController.js';
import { ValuesController } from './Controllers/ValuesController.js';
import { TopicsController } from "./Controllers/TopicsController.js";

class App {
  authController = new AuthController();
  valuesController = new ValuesController();

  topicsController = new TopicsController();
}

// @ts-ignore
window.app = new App()
