import { Container, Typography } from "@mui/material";
import myImage from "../../assets/banner.png";

import { HomeCards } from "./components/cards";

export const HomePage = () => {
  return (
    <>
      <Container maxWidth="full" className="relative mx-4">
        <img
          src={myImage}
          className="w-full h-[20rem] lg:h-[37.5rem] object-cover mb-4"
        />
        <Typography variant="h4" className="mb-4">
          Recently added:
        </Typography>
        <HomeCards />
      </Container>
    </>
  );
};
