import BlogList from "../BlogList";
import useFetch from "../useFetch";

const Home = (props) => {
  const { error, isPending, data: blogs } = useFetch(
    "http://localhost:8000/blogs"
  );
  console.log(props.location.state);
  // const handleDelete = (id) => {
  //   const newblogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newblogs);
  // };

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading your blogs...</div>}

      {blogs && <BlogList blogs={blogs} title="All Blogs" />}

      {/* <BlogList
        handleDelete={handleDelete}
        blogs={blogs.filter((blog) => blog.author === "Sohaib")}
        title="Blogs by Sohaib"
      /> */}
    </div>
  );
};

export default Home;
