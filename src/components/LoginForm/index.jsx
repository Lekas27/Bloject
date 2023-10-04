import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { authService } from "../../service/auth";
import jwtDecode from "jwt-decode";

const { getLoggedInUser } = authService;

function LoginForm() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

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

      const decodedToken = jwtDecode(response.token);

      console.log(decodedToken);
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
}

export default LoginForm;
