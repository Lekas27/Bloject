import { Typography } from "@mui/material";
import { LoginForm } from "../../../components/LoginForm";
import { NavLink } from "react-router-dom";

export const LogIn = () => {
  return (
    <>
      <Typography
        variant="h3"
        className="text-blue-600 rounded-md py-2 px-4 font-bold text-center"
      >
        Log In
      </Typography>
      <LoginForm />
      <div className="flex flex-col justify-center items-center">
        <p>Dont have account?</p>
        <NavLink to="/sign-up">Sign Up</NavLink>
      </div>
    </>
  );
};
