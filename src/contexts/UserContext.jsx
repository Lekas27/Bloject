import { createContext, useState } from "react";
import jwtDecode from "jwt-decode";

export const UserContext = createContext(null);

const { Provider } = UserContext;
const tokenKey = "token";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem(tokenKey)
      ? jwtDecode(localStorage.getItem(tokenKey))
      : null
  );

  const handleUserLogin = (token) => {
    const userObject = jwtDecode(token);

    setUser(userObject);
    localStorage.setItem(tokenKey, token);
  };

  const handleUserLogout = () => {
    localStorage.removeItem(tokenKey);
    setUser(null);
  };

  return (
    <Provider value={{ user, handleUserLogin, handleUserLogout }}>
      {children}
    </Provider>
  );
};
