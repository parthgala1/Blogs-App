import { useState, useEffect } from "react";

export const useCreatePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createPost = async (post) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:6969/api/posts/addPosts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });
      if (!response.ok) {
        throw new Error("Failed to create post");
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { createPost, loading, error };
};
