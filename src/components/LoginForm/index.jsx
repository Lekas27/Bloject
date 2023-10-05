import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";

import { authService } from "../../service/auth";
import { UserContext } from "../../contexts/UserContext";

const { getLoggedInUser } = authService;

export const LoginForm = () => {
  const { handleUserLogin } = useContext(UserContext);
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await getLoggedInUser(data);

      handleUserLogin(response.tokenkey);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="py-8 px-4 md:px-0 md:w-1/3 mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField
          label="Username"
          variant="outlined"
          type="text"
          name="username"
          value={data.username}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          fullWidth
          required
        />
        <div className="flex justify-center">
          <Button type="submit" variant="contained" color="primary">
            Log In
          </Button>
        </div>
      </form>
    </div>
  );
};
