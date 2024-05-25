import react, { useState, useEffect } from "react";

export const useGetPostById = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getPostById = async (id) => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:6969/api/posts/getPosts/${id}`
        );
        const data = await response.json();
        // console.log(data);
        setPost(data);
      } catch (err) {
        console.log("Error: ", err);
      } finally {
        setLoading(false);
      }
    };

    getPostById();
  }, []);

  return { loading, post };
};
