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
      <Box>
        <Image
          src={BannnerImage}
          height={340}
          width={350}
          quality={100}
          alt="Banner"
        />
      </Box>
    </Box>
  );
}

export default Banner;
