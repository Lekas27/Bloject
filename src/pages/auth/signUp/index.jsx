import { Typography } from "@mui/material"
import SignUpForm from "../../../components/SignForm"

export const SignUp =()=> {
    return <>
     <Typography
        variant="h3"
        className="text-blue-600 rounded-md py-2 px-4 font-bold text-center"
      >
        Sign Up
      </Typography>
    <div>
      <SignUpForm />
    </div>
      </>
  }
  
  