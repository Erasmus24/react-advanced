import { Image, Card } from "@chakra-ui/react";

const CardComponent = ({ title, description, imageSrc }) => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image
        src={imageSrc} alt={title} objectFit="cover" w="100%" h={200}
      />
      <Card.Body gap="2">
        <Card.Title>{title}</Card.Title>
        <Card.Description>
          {description}
        </Card.Description> 
      </Card.Body>
    </Card.Root>
  );
};

export default CardComponent;
