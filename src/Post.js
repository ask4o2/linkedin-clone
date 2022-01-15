import { Avatar } from "@mui/material";
import { Chat, Send, Share, ThumbUpAlt } from "@mui/icons-material";
import React from "react";
import { connect } from "react-redux";
import InputOption from "./InputOption";
import "./Post.css";

const Post = ({ name, description, photoUrl, message, user }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar>{photoUrl}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p> {message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAlt} title="like" color="gray" />
        <InputOption Icon={Chat} title="comment" color="gray" />
        <InputOption Icon={Share} title="share" color="gray" />
        <InputOption Icon={Send} title="send" color="gray" />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Post);
