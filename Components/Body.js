import { Box, Button, Container } from "@chakra-ui/react";
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
import { Heading } from "@chakra-ui/react";
function Body() {
  return (
    <Container border="2px solid blue" mt="20px" mb="20px">
      <Box border="1px solid white" my="10px">
        <Image src={Sologan} quality={100} />
      </Box>
      <Box border="1px solid yellow" my="30px">
        <Image src={GetLit} quality={100} />
      </Box>
      <Box
        border="2px solid red"
        marginY="25px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text
          fontSize="2xl"
          fontWeight="normal"
          color="white"
          textAlign="center"
        >
          PX is the ultimate digital avatar Plateform, connecting you with your
          favorite creaters, teams, and like-minded fans.Collaborate and create
          epic experiences togather.
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
      <Box border="2px solid red">
        <Heading
          as="h4"
          size="lg"
          fontWeight="bold"
          color="white"
          textAlign="center"
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
          levels:Legendry, Epic,Super Rare,Rare,Uncommon,or Commong. It's like a
          virtual slot machine for you avatar -pull the
        </Text>
      </Box>
      <Box my="30px">
        <Image src={MobileLevels} quality={100} alt="levels" />
      </Box>
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
        <Image src={LootBox} quality={100} alt="levels" />
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
      <Box my="30px">
        <Image src={MediaIcons} quality={100} alt="levels" />
      </Box>
      <Box my="30px">
        <Image src={Rewards} quality={100} alt="levels" />
      </Box>
      <Box border="2px solid red">
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
          Explore multible metaverses, unlock unique experiences, and score tons
          of rewards and interactions.
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
          With PX, you'll get preferred access to events, exclusive games, and
          special offers.
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
      <Box>
        <Image src={Avatar} quality={100} alt="avatar" />
      </Box>
      <Box
        backgroundColor="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        border="2px solid red"
      >
        <Heading
          as="h3"
          size="xl"
          noOfLines={3}
          color="#802dff"
          textAlign="center"
          background="white"
        >
          PX runs on the solid foundation of{" "}
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
        <Image src={LinkImage} quality={100} alt="avatar" />
      </Box>
    </Container>
  );
}

export default Body;
