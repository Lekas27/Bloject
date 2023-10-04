import { Container } from "@mui/material";
import myImage from "../../assets/banner.png";
import { MediaCard } from "../../components/card";

export const HomePage = () => {
  return (
    <>
      <Container maxWidth="full" className="relative mb-3">
        <img
          src={myImage}
          className="w-full h-[20rem] lg:h-[37.5rem] object-cover"
        />
      </Container>

      <MediaCard />
    </>
  );
};
