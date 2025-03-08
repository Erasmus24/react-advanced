import React from "react";
import { Avatar, Image, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Erasmus!";
const bio1 = "A great frontend developer";
const bio2 = "who is specialising in React!";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar.Root size="2xl">
        <Avatar.Image  src="https://images.unsplash.com/photo-1570158268183-d296b2892211?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fG1hbidzJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D"/>
    </Avatar.Root>
    <Heading>{greeting}</Heading>
    <VStack>
        <Text fontSize="5xl">{bio1}</Text></VStack>
    <VStack fontSize="5xl">{bio2}</VStack>
  </FullScreenSection>
);

export default LandingSection;
