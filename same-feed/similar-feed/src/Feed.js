import React, { useState, useEffect } from "react";
import axios from "axios";

function Feed(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function handleLike(postId) {
    axios
      .post("/api/likes", { postId: postId })
      .then((response) => {
        // do something if successful
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button onClick={() => handleLike(post.id)}>Like</button>
        </div>
      ))}
    </div>
  );
}

export default Feed;
