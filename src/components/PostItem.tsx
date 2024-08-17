import React from "react";
import { PostType } from "../utils/dataFetch";

interface PostItemProps extends React.HTMLAttributes<HTMLParagraphElement> {
  post: PostType;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return <p>{post.title || "No title"}</p>;
};

export default PostItem;
