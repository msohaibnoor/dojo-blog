import React from "react";

const BlogList = ({ blogs, title }) => {
  const handleDelete = (id) => {
    const newblogs = blogs.filter((blog) => blog.id !== id);
    console.log(newblogs);
    // setBlogs(newblogs);
  };
  return (
    <div>
      <h2>{title}</h2>
      {blogs.map(({ title, author, body, id }) => (
        <div className="blog-preview" key={id}>
          <div>
            <h1>{title}</h1>
            <p>{id}</p>
            <p>{body}</p>
            <p>Written by {author}</p>
          </div>
          <button id="delBtn" onClick={() => handleDelete(id)}>
            Delete
          </button>
        </div>
      ))}
      {blogs.length === 0 ? (
        <h1 className="no-blogs">No blogs left to read!</h1>
      ) : null}
    </div>
  );
};

export default BlogList;
