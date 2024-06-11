import { useEffect, useState } from "react";

export const useUpdatePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updatePost = async (post, content, id) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:6969/api/posts/updatePosts/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(post),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update post");
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { updatePost, loading, error };
};
