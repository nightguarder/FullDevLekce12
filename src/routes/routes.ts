import express from "express";

import { PostController } from "../controller/PostController";

//Router musi byt Assynchroni jinak  at __awaiter (/Users/cyrils/Developer/Projects/RobotDreams/FullDevLekce12/src/controller/PostController.ts:4:12)

//Pro pouziti vytvor instanci v main.ts..
export async function createRouter(controller: PostController) {
  const router = express.Router();

  //add new post
  router.post("/", controller.createPost);

  //get All posts
  router.get("/", controller.getAllPost);

  //get single post
  router.get("/:id", controller.getPost);

  //update
  router.put("/:id", controller.updatePost);

  //delete
  router.delete("/:id", controller.deletePost);

  return router;
}
