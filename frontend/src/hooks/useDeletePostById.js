import { useState, useEffect } from "react";

export const useDeletePostById = (postId) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const deletePost = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/posts/deletePosts/${postId}`, {
          method: "DELETE",
        });
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

    if (postId) {
      deletePost();
    }
  }, [postId]);

  return { loading, error, data };
};