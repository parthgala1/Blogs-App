import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext.jsx";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    name,
    username,
    password,
    confirmPassword,
    profilePicture, // Add profilePicture to the parameters
  }) => {
    const success = handleInputErrors({
      name,
      username,
      password,
      confirmPassword,
      profilePicture, // Pass profilePicture to handleInputErrors
    });

    if (!success) return;

    setLoading(true);
    try {
      // If upload successful, proceed with user registration
      const res = await fetch("http://localhost:6969/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          username,
          password,
          confirmPassword,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      //localStorage
      localStorage.setItem("blog-user", JSON.stringify(data));

      //context
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

function handleInputErrors({ name, username, password, confirmPassword }) {
  if (!name || !username || !password || !confirmPassword) {
    toast.error("Please fill all the fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Your Password should be at least 6 characters long");
    return false;
  }
  return true;
}
