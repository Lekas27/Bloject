import { Typography } from "@mui/material";
import { SignUpForm } from "../../../components/SignForm";
import { NavLink } from "react-router-dom";
export const SignUp = () => {
  return (
    <>
      <Typography
        variant="h3"
        className="text-blue-600 rounded-md py-2 px-4 font-bold text-center"
      >
        Sign Up
      </Typography>
      <div>
        <SignUpForm />
      </div>
      <div className="flex flex-col justify-center items-center">
        <p>Already have account?</p>
        <NavLink to="/log-in">Log In</NavLink>
      </div>
    </>
  );
};
