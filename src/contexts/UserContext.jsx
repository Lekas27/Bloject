import { useState, useEffect, createContext } from "react";
import { authService } from "../service/auth";

export const UserContext = createContext(null);
const { getLoggedInUser, logOutUser } = authService;
const { Provider } = UserContext;
const tokenKey = "token";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const currentToken = localStorage.getItem(tokenKey);
      if (currentToken) await fetchUser(currentToken);
    })();
  }, []);

  const fetchUser = async (token) => {
    const userObject = await getLoggedInUser(token);
    setUser(userObject);
  };

  const handleUserLogin = async (token) => {
    await fetchUser(token);
    localStorage.setItem(tokenKey, token);
  };

  const handleUserLogout = async () => {
    await logOutUser(localStorage.getItem(tokenKey));
    localStorage.removeItem(tokenKey);
    setUser(null);
  };

  return (
    <Provider value={{ user, handleUserLogin, handleUserLogout }}>
      {children}
    </Provider>
  );
};
