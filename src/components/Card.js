import { Heading, HStack, Image, Text, VStack, Box, IconButton } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box borderRadius="lg" overflow="hidden" boxShadow="md" bg="white" maxW="sm">
      <Image src={imageSrc} alt={title} objectFit="cover" w="100%" h={200} />
      <VStack align="start" spacing={3} p={4}>
        <Heading size="md">{title}</Heading>
        <Text color="gray.600">{description}</Text>
        <HStack justifyContent="space-between" w="100%">
          <IconButton
            icon={<FontAwesomeIcon icon={faArrowRight} />}
            aria-label="Learn more"
            variant="ghost"
            colorScheme="blue"
          />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
