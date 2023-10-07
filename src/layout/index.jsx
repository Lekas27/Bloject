import { useState, useEffect, useContext } from "react";
import { Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import { Menu as MenuIcon, Book as BlogIcon } from "@mui/icons-material";
import { UserContext } from "../contexts/UserContext";
import { Footer } from "../components/footer";

export const AppLayout = () => {
  const { user, handleUserLogout } = useContext(UserContext);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleLinkClassName = ({ isActive }) => (isActive ? "" : "");
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 850);
  };

  useEffect(() => {
    window.addEventListener("resize", checkIsMobile);
    checkIsMobile();
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <>
      <div className="flex justify-between items-center m-1">
        <div className="flex items-center">
          <BlogIcon className="w-8 h-8 mr-2 text-blue-500" />
          <h3 className="text-xl font-bold text-blue-500">Blogbook</h3>
        </div>
        {isMobile ? (
          <Button onClick={toggleDrawer}>
            <MenuIcon />
          </Button>
        ) : (
          <nav className="flex gap-4 m-4">
            <NavLink to="/" className={handleLinkClassName}>
              <Button>Home</Button>
            </NavLink>
            <NavLink to="/blogs" className={handleLinkClassName}>
              <Button>Blog</Button>
            </NavLink>
            <NavLink to="/createpost" className={handleLinkClassName}>
              <Button>Create Post</Button>
            </NavLink>
            <NavLink to="/log-in" className={handleLinkClassName}>
              <Button>{user?.username}</Button>
            </NavLink>
            <Button
              variant="contained"
              color="primary"
              onClick={handleUserLogout}
            >
              Log Out
            </Button>
          </nav>
        )}
      </div>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <div
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            <NavLink to="/" className={handleLinkClassName}>
              <ListItem>
                <ListItemText primary="Home" />
              </ListItem>
            </NavLink>
            <NavLink to="/blogs" className={handleLinkClassName}>
              <ListItem>
                <ListItemText primary="Blog" />
              </ListItem>
            </NavLink>
            <NavLink to="/createpost" className={handleLinkClassName}>
              <ListItem>
                <ListItemText primary="Create Post" />
              </ListItem>
            </NavLink>

            <ListItem>
              <ListItemText primary={`Logged in as: ${user?.username}`} />
            </ListItem>
            <NavLink to="/log-in" className={handleLinkClassName}>
              <ListItem>
                <ListItemText primary="Log Out" onClick={handleUserLogout} />
              </ListItem>
            </NavLink>
          </List>
        </div>
      </Drawer>

      <Outlet />
      <Footer />
    </>
  );
};
