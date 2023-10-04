import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layout";
import { HomePage } from "../pages/home";
import { CreatePost } from "../pages/createpost";
import { Blog } from "../pages/blog";
import { SignUp } from "../pages/auth/signUp";
import { LogIn } from "../pages/auth/logIn";

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
          exact: true,
        },
        { path: "createpost", element: <CreatePost /> },
        { path: "blog", element: <Blog /> },
        { path: "signUp", element: <SignUp /> },
        { path: "logIn", element: <LogIn /> },
      ],
    },
    { path: "*", element: <h1>404 Not found</h1> },
  ]);

  return <RouterProvider router={router} />;
};
