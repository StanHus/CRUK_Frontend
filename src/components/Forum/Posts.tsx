import { useState, useEffect, Fragment } from "react";
import { IPost } from "../interfaces";
import "../../css/forum.css";

export default function PostsListed() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await fetch(
        "https://dry-gorge-37048.herokuapp.com/posts"
      );
      const jsonData = await response.json();
      setPosts(jsonData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Fragment>
      {posts.map((post: IPost) => (
        <div className="post" key={post.id}>
          <h4>{post.post_text}</h4>
          <h5>
            By {post.username} on {post.date.slice(0, 10)}
          </h5>
        </div>
      ))}
    </Fragment>
  );
}
