import { Box } from "@chakra-ui/react";
import Image from "next/image";
import BannnerImage from "../public/assets/PX-main-3d.png";
function Banner() {
  return (
    <Box
      border="1px solid red"
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="50vh"
    >
      <Image src={BannnerImage} quality={100} alt="Banner" />
    </Box>
  );
}

export default Banner;
