import { UserProvider } from "./contexts/UserContext";
import { AppRouter } from "./router";

export const App = () => {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  );
};
