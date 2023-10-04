import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { authService } from "../../service/auth";
import jwtDecode from "jwt-decode";

const { getSignedInUser } = authService;

function SignUpForm() {
  const [data, setData] = useState({
    username: "",
    first_name: "",
    lastName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await getSignedInUser(data);

      const decodedToken = jwtDecode(response.token);

      console.log(decodedToken);

      setData({
        username: "",
        first_name: "",
        last_name: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
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
          fullWidth
          required
        />
        <TextField
          label="First Name"
          variant="outlined"
          name="first_name"
          value={data.first_name}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Last Name"
          variant="outlined"
          name="last_name"
          value={data.last_name}
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
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
