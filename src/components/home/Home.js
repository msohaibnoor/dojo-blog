import { useState, useEffect } from "react";
import BlogList from "../BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new Website", author: "Sohaib", body: "Lorem .....", id: 1 },
    { title: "My new Website", author: "AZ", body: "Lorem .....", id: 2 },
    { title: "My new Website", author: "Sohaib", body: "Lorem .....", id: 3 },
  ]);
  // useEffect(() => {
  //   console.log("hi");
  // }, [blogs]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Sohaib")}
        title="Blogs by Sohaib"
      />
    </div>
  );
};

export default Home;
