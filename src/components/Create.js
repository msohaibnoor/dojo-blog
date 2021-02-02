import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("yoshi");
  const [body, setBody] = useState("");
  const [isPending, setIsPending] = useState(false);

  const history = useHistory();
  // console.log(history);

  const onSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      history.push("/", body);
    });
  };
  console.log(isPending);

  return (
    <div className="create">
      <h2 style={{ color: "black" }}>Create a new blog</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="">Blog title:</label>
        <input
          type="text"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="">Blog body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label htmlFor="">Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button>Adding your blog...</button>}
      </form>
    </div>
  );
};

export default Create;
