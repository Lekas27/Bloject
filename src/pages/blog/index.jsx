import { useState, useEffect } from "react";
import { blogService } from "../../service/blogs";
import { MediaCard } from "../../components/card";

const { getAllBlogs, deleteBlog } = blogService;

export const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllBlogs();
        setBlogPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteBlog(id);

      setBlogPosts((prevBlogPosts) =>
        prevBlogPosts.filter((post) => post.id !== id)
      );
      console.log(`Blog with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error(`Error deleting blog with ID ${id}:`, error);
    }
  };

  return (
    <div className="flex gap-4 flex-wrap items-center justify-evenly">
      {blogPosts.map((post) => (
        <div key={post.id}>
          <MediaCard
            title={post.title}
            content={post.content}
            author={post.author}
          />

          <button
            onClick={() => {
              handleDelete(post.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
