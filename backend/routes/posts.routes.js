import express from "express";
import { getPosts, addPosts } from "../controllers/posts.controllers.js";

const router = express();

router.get("/getAllPosts", getPosts);
router.post("/addPosts", addPosts);
router.get("/getPosts/:id", getPosts);

export default router;
