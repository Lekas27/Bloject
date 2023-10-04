import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { blogService } from "../../service/blogs";

const { createBlog, getAllBlogs } = blogService;

export const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
  });

  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const blogPosts = await getAllBlogs();
        const uniqueAuthors = [
          ...new Set(blogPosts.map((post) => post.author)), // Use author
        ];
        setAuthors(uniqueAuthors);
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };

    fetchAuthors();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Form Data Submitted:", formData);

      formData.author = parseInt(formData.author);

      await createBlog(formData);

      console.log("Blog created successfully!");

      setFormData({
        title: "",
        content: "",
        author: "",
      });
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-screen-md mx-auto mt-4">
      <div className="flex flex-col space-y-4 w-full sm:w-2/3 md:w-2/3 lg:w-3/4 xl:w-3/4 mx-auto">
        <TextField
          label="Title"
          variant="outlined"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full"
          required
        />
        <TextField
          label="Content"
          variant="outlined"
          name="content"
          value={formData.content}
          onChange={handleChange}
          className="w-full"
          required
        />
        <label htmlFor="author">Author</label>
        <select
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="w-full"
          required
        >
          <option value="">Select an author</option>
          {authors.map((author) => (
            <option key={author} value={author}>
              {author}
            </option>
          ))}
        </select>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className="w-full"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};
