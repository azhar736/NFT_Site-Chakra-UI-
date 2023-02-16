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
      <Box border="4px solid red" w={[300, 400, 800]}>
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
