import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";

import { authService } from "../../service/auth";
import { UserContext } from "../../contexts/UserContext";

const { logInUser } = authService;

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    event.preventDefault();

    try {
      const response = await logInUser(data);
      handleUserLogin(response.tokenkey);
      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
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
          disabled={loading}
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
          disabled={loading}
          fullWidth
          required
        />
        <div className="flex justify-center">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
            loading={loading}
          >
            Log In
          </Button>
        </div>
      </form>
    </div>
  );
};
