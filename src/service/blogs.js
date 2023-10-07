import { callApi } from "./api";

class BlogService {
  getAllBlogs = async () => await callApi({ url: "/Blogs/" });

  getBlog = async (id) => await callApi({ url: `/Blogs/${id}/` });

  createBlog = async (data) =>
    await callApi({ url: "/Blogs/", method: "POST", data });

  editBlog = async (id, data) =>
    callApi({ url: `/Blogs/${id}/`, method: "PUT", data });

  deleteBlog = async (id) =>
    await callApi({ url: `/Blogs/${id}/`, method: "DELETE" });
}

export const blogService = new BlogService();
