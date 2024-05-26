import Post from "../models/posts.models.js";
import User from "../models/user.models.js";

export const getPosts = async (req, res) => {
  try {
    const post = await Post.find();
    if (!post) throw new Error("No post found");
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addPosts = async (req, res) => {
  try {
    const { title, summary, content, link } = req.body;
    if (!title || !summary || !content)
      throw new Error("All fields are required");
    const userId = req.user._id;
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");
    const newPost = new Post({
      title,
      summary,
      content,
      link,
      name: user.name,
    });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    // console.log(post);
    if (!post) throw new Error("No post found");
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updatePostById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, summary, content, link } = req.body;
    if (!title || !summary || !content)
      throw new Error("All fields are required");
    const updatedPost = { title, summary, content, link };
    const post = await Post.findByIdAndUpdate(id, updatedPost, { new: true });
    if (!post) throw new Error("No post found");
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
