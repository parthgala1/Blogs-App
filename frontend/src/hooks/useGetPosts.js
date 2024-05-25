import react, { useState, useEffect } from "react";

export const useGetPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "http://localhost:6969/api/posts/getAllPosts"
        );
        const data = await response.json();
        // console.log(data);
        setPosts(data);
      } catch (err) {
        console.log("Error: ", err);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  return { loading, posts };
};
