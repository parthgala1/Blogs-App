import express from "express";
import { getPosts, addPosts } from "../controllers/posts.controllers.js";

const router = express();

router.get("/getAllPosts", getPosts);
router.post("/addPosts", addPosts);

export default router;
