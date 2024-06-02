import express from "express";
import {
  getPosts,
  addPosts,
  deletePostById,
  getPostById,
  updatePostById,
} from "../controllers/posts.controllers.js";
import authMiddleware from "../middlewares/auth.middlewares.js";

const router = express();

router.get("/getAllPosts", getPosts);
router.post("/addPosts", addPosts);
router.get("/getPosts/:id", getPostById);
router.put("/updatePosts/:id", updatePostById);
router.delete("/deletePosts/:id", deletePostById);

export default router;
