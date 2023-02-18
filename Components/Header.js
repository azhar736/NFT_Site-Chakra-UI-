import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Image from "next/image";
import DiscordTop from "../public/assets/discord-top.png";

export default function Simple() {
  return (
    <>
      <Box
        pl={["8px"]}
        position="absolute"
        top="0%"
        left="0%"
        right="0%"
        mt="20px"
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          mx={["5px", "30px", "80px", "160px"]}
        >
          <Flex alignItems={"center"}>
            <Flex w="100px" justifyContent="space-between">
              <Box
                color="white"
                bg="#802dff"
                fontSize="22px"
                h={["30px", "30px", "30px", "40px"]}
                w={["30px", "30px", "30px", "40px"]}
                display="flex"
                alignItems="center"
                justifyContent="center"
                rounded="full"
              >
                <FaFacebookF style={{ fontSize: "18px" }} />
              </Box>
              <Box
                color="white"
                bg="#802dff"
                fontSize="22px"
                h={["30px", "30px", "30px", "40px"]}
                w={["30px", "30px", "30px", "40px"]}
                display="flex"
                alignItems="center"
                justifyContent="center"
                rounded="full"
              >
                <BsInstagram style={{ fontSize: "18px" }} />
              </Box>
            </Flex>
          </Flex>
          <Flex alignItems={"center"} mt="12px">
            <Flex
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              w={["200px", "220px", "240px", "260px", "280px"]}
            >
              <Image src={DiscordTop} />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
