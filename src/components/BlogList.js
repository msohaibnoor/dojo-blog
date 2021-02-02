import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div>
      <h2>{title}</h2>
      {blogs.map(({ title, author, body, id }) => (
        <div className="blog-preview" key={id}>
          <div>
            <Link to={`/blog/${id}`} className="link">
              <h1>{title}</h1>
            </Link>
            <p>{id}</p>
            {/* <p>{body}</p> */}
            <p>Written by {author}</p>
          </div>
          {/* <button id="delBtn" onClick={() => handleDelete(id)}>
            Delete
          </button> */}
        </div>
      ))}
      {blogs.length === 0 ? (
        <h1 className="no-blogs">No blogs left to read!</h1>
      ) : null}
    </div>
  );
};

export default BlogList;
