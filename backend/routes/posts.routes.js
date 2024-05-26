import express from "express";
import { getPosts, addPosts } from "../controllers/posts.controllers.js";
import authMiddleware from "../middlewares/auth.middlewares.js";

const router = express();

router.get("/getAllPosts", getPosts);
router.post("/addPosts", authMiddleware, addPosts);
router.get("/getPosts/:id", getPosts);

export default router;
