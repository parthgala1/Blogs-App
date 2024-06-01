import { useState, useEffect } from "react";

export const useDeletePostById = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const deletePost = async (postId) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:6969/api/posts/deletePosts/${postId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete post");
      }
      setData(true);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { deletePost };
};
