import React from "react";
import LikeIcon from "../assets/like.png";
import "./Post.css";

function Post({ post, username }) {
  return (
    <div className="post">
      <div className="title">
        <p>{post.title}</p>
        <div className="icon like">
          <img src={LikeIcon} alt="eye" />
        </div>
      </div>
      <div className="description">
        {post.description.map((description_, index) => {
          return <p key={index}>{description_}</p>;
        })}
      </div>
      <div className="post__details">
        <p className="post__type">
          <span className="type">{post.type}</span> by {username}
        </p>
        <p>
          {post.date} • {post.read} Read • {post.Views} Views
        </p>
      </div>
    </div>
  );
}

export default Post;