import React from "react";
import { Avatar, Image, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Erasmus!";
const bio1 = "A frontend developer";
const bio2 = "specialising in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    {/* <Avatar></Avatar>     */}
    <Avatar.Root size="2xl">
        <Avatar.Image  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04"/>
    </Avatar.Root>
    <Heading>{greeting}</Heading>
    <VStack>
    <Text fontSize="5xl">{bio1}</Text></VStack>
    <VStack fontSize="5xl">{bio2}</VStack>
    
  </FullScreenSection>
);

export default LandingSection;
