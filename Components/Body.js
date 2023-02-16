import { AspectRatio, Box, Button, Container } from "@chakra-ui/react";
import Image from "next/image";
import { Text } from "@chakra-ui/react";
import Sologan from "../public/assets/slogan.png";
import GetLit from "../public/assets/getLit-With PX.png";
import ArtBannerMobile from "../public/assets/mobile/arte-banner-mobile.png";
import item from "../public/assets/items.png";
import MobileLevels from "../public/assets/mobile/levels-mobile.jpg";
import LootBox from "../public/assets/loot-box.jpg";
import MediaIcons from "../public/assets/icons-media.jpg";
import Rewards from "../public/assets/REWARDS.png";
import Pic1 from "../public/assets/pic1.png";
import Pic2 from "../public/assets/pic2.jpg";
import DiscordButton from "../public/assets/botao-join-discord.jpg";
import Avatar from "../public/assets/avatar-meio.jpg";
import LinkImage from "../public/assets/ink.jpg";
import LabImg from "../public/assets/lab-1001-logo.png";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
// import Animatedvideo from "../public/assets/Video/fanpower-anim-loop.mp4";
import { Input } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { FiMail } from "react-icons/fi";
import ReactPlayer from "react-player";
import { useRef, useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import VideoPlayer from "./VideoPlayer";
function Body() {
  const video1Url = "./assets/video/fanpower-anim-loop.mp4";
  const video2Url = "./assets/video/lootbox_turn_LP.mp4";
  return (
    <Box bg="black">
      <Container>
        <Box mb="10px" py="20px">
          <Image src={Sologan} quality={100} />
        </Box>
        <Box my="30px">
          <Image src={GetLit} quality={100} />
        </Box>
        <Box
          marginY="25px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            fontSize="2xl"
            fontWeight="light"
            color="white"
            textAlign="center"
          >
            PX is the ultimate digital avatar Plateform, connecting you with
            your favorite creaters, teams, and like-minded fans.Collaborate and
            create epic experiences togather.
          </Text>
        </Box>
        <Box>
          <Image src={ArtBannerMobile} quality={100} alt="artbanner" />
        </Box>
        <Box>
          <Heading
            as="h2"
            color="white"
            size="3xl"
            noOfLines={3}
            textAlign="center"
          >
            <Text color="#802dff">BE THE </Text> ULTIMATE FAN
            <Text color="#802dff">WITH PX.</Text>
          </Heading>
        </Box>
        <Box my="30px">
          <Image src={item} quality={100} alt="artbanner" />
        </Box>
        <Box width="full" my="20px">
          <Heading
            as="h2"
            color="white"
            size="3xl"
            noOfLines={4}
            textAlign="center"
            lineHeight="38px"
          >
            <Text color="#802dff">SCORE</Text>{" "}
            <Text color="#802dff">BIG WITH</Text> PX DROPS
            <Text as="span" color="#802dff">
              !
            </Text>
          </Heading>
        </Box>
        <Box>
          <Heading
            as="h4"
            size="xl"
            fontWeight="semibold"
            color="white"
            textAlign="center"
            lineHeight="33px"
          >
            Get your hands on some seriously epic gear with PX Drops.
          </Heading>
          <Text
            fontSize="2xl"
            fontWeight="light"
            lineHeight="30px"
            color="white"
            textAlign="center"
            my="4px"
          >
            Each drop has a chance to contain one of the six rarity
            levels:Legendry, Epic,Super Rare,Rare,Uncommon,or Commong. It's like
            a virtual slot machine for you avatar -pull the
          </Text>
        </Box>
        <Box my="30px">
          <Image src={MobileLevels} quality={100} alt="levels" />
        </Box>
      </Container>
      <Box
        height="50vh"
        width="full"
        backgroundImage="url(./assets/bg-photo.jpg)"
        backgroundSize="cover"
        backgroundPosition="center center"
      >
        <Heading
          as="h2"
          color="white"
          size="3xl"
          py="70px"
          noOfLines={4}
          textAlign="center"
        >
          <Text>BOOST</Text>
          <Text>YOUR FAN</Text>
          <Text>POWER</Text>
          <Text>WITH PX.</Text>
        </Heading>
      </Box>
      {/* <AspectRatio maxW="560px" ratio={1}>
        <video src="./public/assets/Video/fanpower-anim-loop.mp4" />
      </AspectRatio> */}
      <VideoPlayer videoUrl={video1Url} />
      <Container>
        <Box>
          <Text
            fontSize="2xl"
            fontWeight="light"
            lineHeight="30px"
            color="white"
            textAlign="center"
            my="4px"
          >
            Each PX gives you up to 100% power bonus, making you a force to be
            reckoned with.{" "}
            <Text as="span" fontWeight="bold">
              The rarer your goodies, the more powerful the avatar.
            </Text>
            Get decked out in epic gear and turn heads.
          </Text>
        </Box>
        <Box my="30px">
          <VideoPlayer videoUrl={video2Url} />
        </Box>
        <Box>
          <Heading
            as="h2"
            color="white"
            size="3xl"
            noOfLines={2}
            textAlign="center"
          >
            <Text color="#802dff">PX REWADS YOUR PASSION.</Text>
          </Heading>
        </Box>
        <Text
          fontSize="2xl"
          fontWeight="light"
          lineHeight="30px"
          color="white"
          textAlign="center"
          my="20px"
        >
          PX lets you fully embrace and express your fandom, with rewards for
          activities like watching streams, videos, following your favorite
          content creators, and interacting with other fans.
        </Text>
        <Box
          my="30px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image src={MediaIcons} quality={100} alt="levels" />
        </Box>
        <Box my="30px">
          <Image src={Rewards} quality={100} alt="levels" />
        </Box>
      </Container>
      <Box
        height="50vh"
        width="full"
        backgroundImage="url(./assets/dark-concrete-texture-background.jpg)"
        backgroundSize="cover"
        backgroundPosition="center center"
      >
        <Heading
          as="h2"
          color="white"
          size="3xl"
          py="70px"
          noOfLines={4}
          textAlign="center"
        >
          <Text>DIVE INTO</Text>
          <Text>FURURE</Text>
          <Text>WORLDS</Text>
          <Text>WITH PX.</Text>
        </Heading>
      </Box>
      <Box
        backgroundImage="url(./assets/bg-grunge.jpg)"
        backgroundSize="cover"
        backgroundPosition="center center"
      >
        <Container>
          <Box my="50px">
            <Heading
              as="h4"
              size="lg"
              fontWeight="bold"
              color="white"
              textAlign="center"
            >
              PX is your ticket to a world of endless possibilities.
            </Heading>
            <Text
              fontSize="2xl"
              fontWeight="light"
              lineHeight="30px"
              color="white"
              textAlign="center"
              my="4px"
            >
              Explore multible metaverses, unlock unique experiences, and score
              tons of rewards and interactions.
            </Text>
          </Box>
          <Box my="30px">
            <Image src={Pic1} quality={100} alt="img" />
          </Box>
          <Box>
            <Text
              fontSize="2xl"
              fontWeight="light"
              lineHeight="30px"
              color="white"
              textAlign="center"
              my="4px"
              mx="10px"
            >
              With PX, you'll get preferred access to events, exclusive games,
              and special offers.
            </Text>
          </Box>
          <Box my="30px">
            <Image src={Pic2} quality={100} alt="img" />
          </Box>
          <Box>
            <Text
              fontSize="2xl"
              fontWeight="light"
              lineHeight="30px"
              color="white"
              textAlign="center"
              my="4px"
              mx="10px"
            >
              The world is your playground with PX - are you ready to dive in?
            </Text>
          </Box>
          <Box my="30px">
            <Image src={DiscordButton} quality={100} alt="discord" />
          </Box>
          <Box
            backgroundImage="url(./assets/bg-grunge.jpg)"
            backgroundSize="cover"
            backgroundPosition="center center"
          >
            <Image src={Avatar} quality={100} alt="avatar" zindex="-1" />
          </Box>
        </Container>
      </Box>
      <Box
        backgroundColor="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        py="40px"
      >
        <Heading
          as="h3"
          size="xl"
          noOfLines={3}
          color="#802dff"
          textAlign="center"
          background="white"
        >
          <Text>PX runs on the</Text>
          <Text>solid foundation of</Text>
          <Text color="#802dff" background="white">
            polygon
          </Text>
        </Heading>
        <Text
          fontSize="2xl"
          fontWeight="normal"
          lineHeight="30px"
          color="black"
          background="white"
          textAlign="center"
          my="4px"
        >
          The polygon blockchain offers top-notch security, scalability and
          infrastructure, trusted by big names like Disney, Coca-Cola,
          Starbucks, and Reddit. Trust PX to keep your online experiences smooth
          and secure.
        </Text>
        <Button
          color="white"
          bg="black"
          variant="solid"
          height="56px"
          width="200px"
          borderRadius="20px"
        >
          WHITEPAPER
        </Button>
        <Box my="10px" w="230px">
          <Image src={LinkImage} quality={100} alt="avatar" />
        </Box>
      </Box>
      <Box>
        <Heading
          as="h2"
          color="white"
          size="3xl"
          py="70px"
          noOfLines={3}
          textAlign="center"
          backgroundImage="url(./assets/paw.jpg)"
          backgroundSize="contain"
          backgroundRepeat="no-repeat"
          backgroundPosition="top center"
        >
          <Text>SUBSCRIBE</Text>
          <Text>AND JOIN THE</Text>
          <Text>WAIT LIST</Text>
        </Heading>
        <Container>
          <Box
            bg="white"
            mt="10px"
            mb="20px"
            borderRadius="32px"
            zIndex="1"
            overflow="hidden"
            position="relative"
          >
            <Input
              type="email"
              placeholder="Your e-mail"
              color="gray.50"
              fontSize="16px"
              fontWeight="bold"
              py="26px"
            />
            <Box
              bg="#802dff"
              position="absolute"
              right="3"
              top="1"
              display="flex"
              alignItems="center"
              justifyContent="center"
              rounded="full"
              height="45px"
              width="45px"
            >
              <FiMail color="white" size="30px" bg="#802dff" />
            </Box>
          </Box>
          <Accordion allowToggle mb="8px">
            <AccordionItem my="20px" border="2px solid #802dff">
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="center"
                    color="white"
                    fontSize="xl"
                    fontWeight="semibold"
                  >
                    What is PX?
                  </Box>
                  <AccordionIcon color="#802dff" fontSize="32px" />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color="white"
                textAlign="center"
                fontSize="md"
                lineHeight="28px"
                mx="30px"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem my="20px" border="2px solid #802dff">
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="center"
                    color="white"
                    fontSize="xl"
                    fontWeight="semibold"
                  >
                    How do I access PX?
                  </Box>
                  <AccordionIcon color="#802dff" fontSize="32px" />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color="white"
                textAlign="center"
                fontSize="md"
                lineHeight="28px"
                mx="30px"
              >
                PX is a blockchain-connected platform, and to enjoy all the
                benifits to sync your digital wallet to the site. To learn more
                about creating wallet and syncing to PX,{" "}
                <Text as="span" textDecoration="underline">
                  Click here
                </Text>
                .
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem my="20px" border="2px solid #802dff">
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="center"
                    color="white"
                    fontSize="xl"
                    fontWeight="semibold"
                  >
                    Where Can I Learn More?
                  </Box>
                  <AccordionIcon color="#802dff" fontSize="32px" />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                color="white"
                textAlign="center"
                fontSize="md"
                lineHeight="28px"
                mx="30px"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>
      </Box>
      <Box
        backgroundImage="url(./assets/bg-pattern-px.jpg)"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center center"
        height="40vh"
      >
        <Box display="flex" justifyContent="space-evenly" py="30px">
          <Box
            w="50%"
            height="80px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text fontSize="18px" fontWeight="bold">
              Roadmap
            </Text>
            <Text fontSize="18px" fontWeight="bold">
              FAQ PX
            </Text>
          </Box>
          <Box
            w="50%"
            height="80px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text fontSize="18px" fontWeight="bold">
              Learn more
            </Text>
            <Text fontSize="18px" fontWeight="bold">
              Be a partner
            </Text>
          </Box>
        </Box>
        <Container>
          <Text borderBottom="2px solid #802dff "></Text>
        </Container>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box my="12px">
            <Image src={LabImg} height={65} quality={100} alt="LAB #1001" />
          </Box>
          <Box>
            <Text fontSize="16px" fontWeight="bold">
              Powered by{" "}
              <Text as="span" color="#802dff" textDecoration="underline">
                lab1001.io
              </Text>
            </Text>
          </Box>
          <Box
            display="flex"
            w="50px"
            justifyContent="space-between"
            my="8px"
            py="10px"
          >
            <FaFacebookF />
            <BsInstagram />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Body;
