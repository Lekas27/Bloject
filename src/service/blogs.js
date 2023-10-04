import { callApi } from "./api";

class BlogService {
  getAllBlogs = () => callApi({ url: "/Blogs/" });

  createBlog = (data) => callApi({ url: "/Blogs/", method: "POST", data });

  deleteBlog = (id) => callApi({ url: `/Blogs/${id}/`, method: "DELETE" });

  editBlog = (id, data) =>
    callApi({ url: `/Blogs/${id}/`, method: "PUT", data });
}

export const blogService = new BlogService();
