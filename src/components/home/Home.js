import { useState, useEffect } from "react";

const Home = () => {
  // const onClick = (e) => {
  //   setName("Azhar");
  //   setPerson({ city: e.target.innerHTML });
  // };
  // const [name, setName] = useState("Sohaib");
  // const [person, setPerson] = useState({ city: "Lahore" });
  const handleDelete = (id) => {
    const newblogs = blogs.filter((blog) => blog.id !== id);
    console.log(newblogs);
    setBlogs(newblogs);
  };
  const [blogs, setBlogs] = useState([
    { title: "My new Website", author: "Sohaib", body: "Lorem .....", id: 1 },
    { title: "My new Website", author: "Sohaib", body: "Lorem .....", id: 2 },
    { title: "My new Website", author: "Sohaib", body: "Lorem .....", id: 3 },
  ]);
  // useEffect(() => {
  //   console.log("hi");
  // }, [blogs]);
  return (
    <div className="home">
      {/* <h1 className="home-h1">Homepage</h1>
      <p>
        My name is {name} and I live in {person.city}
      </p>
      <button onClick={onClick}>Click Me</button> */}
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

export default Home;
