import React from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();

  const { data: blog, isPending, error } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );

  const onDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={onDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
