import { Box } from "@chakra-ui/react";
import Image from "next/image";
import BannnerImage from "../public/assets/PX-main-3d.png";
function Banner() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="75vh"
      backgroundImage="url(./assets/bg-top.png)"
      backgroundSize="cover"
      backgroundPosition="center center"
    >
      <Box
        w={["100%", "90%", "80%", "70%", "60%"]}
        mt={["3vw", "2vw", "2rem", "6rem"]}
      >
        <img
          src="/assets/PX-main-3d.png"
          quality={100}
          alt="Banner"
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
        />
      </Box>
    </Box>
  );
}

export default Banner;
