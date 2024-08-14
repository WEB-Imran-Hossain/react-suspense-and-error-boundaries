import React from "react";
import use from "../hooks/use";
import { fetchData } from "../utils/data";

const Comments = ({ postId }) => {
  const comments = use(
    fetchData(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  );

  return (
    <div>
      <h2 className="text-xl font-bold my-5">Comments:</h2>

      <ul>
          {comments.map((comment) => (
            <li key={comment?.id}>{comment?.name}</li>
          ))}
        </ul>
      </div>
  );
};

export default Comments;
