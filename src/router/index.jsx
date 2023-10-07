import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute, PublicRoute } from "./Routes";
import { HomePage } from "../pages/home";
import { CreatePost } from "../pages/createpost";
import { Blog } from "../pages/blog";
import { SignUp } from "../pages/auth/sign-up";
import { LogIn } from "../pages/auth/log-in";
import { SingleBlog } from "../pages/single-blog";
import { ProfilePage } from "../pages/profile";
import { AppLayout } from "../layout";

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <ProtectedRoute element={<AppLayout />} />,
      children: [
        {
          index: true,
          element: <HomePage />,
          exact: true,
        },
        { path: "profile", element: <ProfilePage /> },
        { path: "createpost", element: <CreatePost /> },
        { path: "blogs", element: <Blog /> },
        { path: "blogs/:id", element: <SingleBlog /> },
      ],
    },

    { path: "sign-up", element: <PublicRoute element={<SignUp />} /> },
    { path: "log-in", element: <PublicRoute element={<LogIn />} /> },
    { path: "*", element: <h1>404 Not found</h1> },
  ]);

  return <RouterProvider router={router} />;
};
