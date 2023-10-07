import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { blogService } from "../../service/blogs";

const { createBlog } = blogService;

export const BlogForm = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      console.log("Form Data Submitted:", data);

      await createBlog(data);

      console.log("Blog created successfully!");

      setData({
        title: "",
        content: "",
      });
    } catch (error) {
      console.error("Error creating blog:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-screen-md mx-auto mt-4">
      <div className="flex flex-col space-y-4 w-full sm:w-2/3 md:w-2/3 lg:w-3/4 xl:w-3/4 mx-auto">
        <TextField
          label="Title"
          variant="outlined"
          name="title"
          value={data.title}
          onChange={handleChange}
          className="w-full"
          disabled={loading}
          required
        />
        <TextField
          label="Content"
          variant="outlined"
          name="content"
          value={data.content}
          onChange={handleChange}
          className="w-full"
          disabled={loading}
          required
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          className="w-full"
          disabled={loading}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};
