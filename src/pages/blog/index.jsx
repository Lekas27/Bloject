import { useState, useEffect, Fragment, useContext } from "react";
import { blogService } from "../../service/blogs";
import { MediaCard } from "../../components/card";
import { Button, TextField, Grid } from "@mui/material";
import { UserContext } from "../../contexts/UserContext";

const { getAllBlogs, deleteBlog, editBlog } = blogService;

export const Blog = () => {
  const { user } = useContext(UserContext);
  const [blogPosts, setBlogPosts] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);

  const fetchData = async () => {
    try {
      const data = await getAllBlogs();
      setBlogPosts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    (async () => await fetchData())();
  }, []);

  const handleEdit = (blog) => {
    setEditingBlog(blog);
  };

  const handleSaveEdit = async (id, updatedData) => {
    try {
      await editBlog(id, updatedData);
      setEditingBlog(null);

      await fetchData();
      console.log(`Blog with ID ${id} edited successfully.`);
    } catch (error) {
      console.error(`Error editing blog with ID ${id}:`, error);
    }
  };

  const handleCancelEdit = () => {
    setEditingBlog(null);
  };

  const handleDelete = async (id) => {
    try {
      await deleteBlog(id);

      await fetchData();
      console.log(`Blog with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error(`Error deleting blog with ID ${id}:`, error);
    }
  };

  return (
    <Grid container spacing={3}>
      {blogPosts.map((post) => {
        const { id, title, content, author } = post;
        console.log(user.user, author);
        return (
          <Fragment key={id}>
            {editingBlog && editingBlog.id === id ? (
              <div className="flex flex-col gap-y-4">
                <TextField
                  label="Title"
                  variant="outlined"
                  value={editingBlog.title}
                  onChange={(e) =>
                    setEditingBlog({ ...editingBlog, title: e.target.value })
                  }
                  className="w-full "
                />
                <TextField
                  label="Content"
                  variant="outlined"
                  value={editingBlog.content}
                  onChange={(e) =>
                    setEditingBlog({ ...editingBlog, content: e.target.value })
                  }
                  className="w-full h-64"
                  multiline
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleSaveEdit(editingBlog.id, editingBlog)}
                >
                  Save
                </Button>
                <Button onClick={handleCancelEdit}>Cancel</Button>
              </div>
            ) : (
              <MediaCard
                title={title}
                content={content}
                {...(user?.user - 1 === author && {
                  actionButtons: (
                    <>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleEdit(post)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleDelete(id)}
                      >
                        Delete
                      </Button>
                    </>
                  ),
                })}
              />
            )}
          </Fragment>
        );
      })}
    </Grid>
  );
};
