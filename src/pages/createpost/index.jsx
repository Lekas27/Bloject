import { Typography } from "@mui/material";
import { BlogForm } from "../../components/Form";

export const CreatePost = () => {
  return (
    <>
      <Typography
        variant="h3"
        className="text-blue-600 rounded-md py-2 px-4 font-bold text-center"
      >
        Create Your Blog:
      </Typography>
      <div>
        <BlogForm />
      </div>
    </>
  );
};
