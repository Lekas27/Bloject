import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { authService } from "../../service/auth";

const { signedInUser } = authService;

export const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      await signedInUser(data);

      navigate("/log-in");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-8 px-4 md:px-0 md:w-1/2 lg:w-1/3 mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField
          label="Username"
          variant="outlined"
          name="username"
          value={data.username}
          onChange={handleChange}
          disabled={loading}
          fullWidth
          required
        />
        <TextField
          label="First Name"
          variant="outlined"
          name="first_name"
          value={data.first_name}
          onChange={handleChange}
          disabled={loading}
          fullWidth
          required
        />
        <TextField
          label="Last Name"
          variant="outlined"
          name="last_name"
          value={data.last_name}
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
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};
