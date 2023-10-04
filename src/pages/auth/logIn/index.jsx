
import { Typography } from '@mui/material';
import LoginForm from '../../../components/LoginForm';

export const LogIn =()=> {
    return <>
     <Typography
        variant="h3"
        className="text-blue-600 rounded-md py-2 px-4 font-bold text-center"
      >
        Log In
      </Typography>
    <LoginForm />
      </>
  }
  
  