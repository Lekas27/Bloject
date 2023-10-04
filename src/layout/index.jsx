import { useState, useEffect } from "react";
import { Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import { Menu as MenuIcon, Book as BlogIcon } from "@mui/icons-material";

export const AppLayout = () => {
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
          <h3 className="text-xl font-bold text-blue-500">My Blog</h3>
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
            <NavLink to="/blog" className={handleLinkClassName}>
              <Button>Blog</Button>
            </NavLink>
            <NavLink to="/createpost" className={handleLinkClassName}>
              <Button>Create Post</Button>
            </NavLink>
            <NavLink to="/sign-up" className={handleLinkClassName}>
              <Button variant="contained">Sign Up</Button>
            </NavLink>
            <NavLink to="/log-in" className={handleLinkClassName}>
              <Button variant="outlined">Log In</Button>
            </NavLink>
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
            <NavLink to="/blog" className={handleLinkClassName}>
              <ListItem>
                <ListItemText primary="Blog" />
              </ListItem>
            </NavLink>
            <NavLink to="/createpost" className={handleLinkClassName}>
              <ListItem>
                <ListItemText primary="Create Post" />
              </ListItem>
            </NavLink>
            <NavLink to="/sign-up" className={handleLinkClassName}>
              <ListItem>
                <ListItemText primary="Sign Up" />
              </ListItem>
            </NavLink>
            <NavLink to="/log-in" className={handleLinkClassName}>
              <ListItem>
                <ListItemText primary="Log In" />
              </ListItem>
            </NavLink>
          </List>
        </div>
      </Drawer>

      <Outlet />
    </>
  );
};
