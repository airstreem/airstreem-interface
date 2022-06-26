import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  SimpleGrid,
  Modal,
  Button,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import CollectionCard from "./CollectionCard";

const Collection = () => {
  const Cards = [
    {
      id: "1",
      title: "#001",
      body: "Bored Apes Yacht Club",
      header: "ape.png",
      slug: "aaa",
    },
    {
      id: "2",
      title: "#002",
      body: "Bored Apes Yacht Club",
      header: "ape.png",
      slug: "aaa",
    },
    {
      id: "3",
      title: "#003",
      body: "Bored Apes Yacht Club",
      header: "ape.png",
      slug: "aaa",
    },
  ];

  return (
    <Box
      p={12}
      boxShadow="2xl"
      m="20px 20% 20px 20%"
      rounded={25}
      bg="white"
      minW="800px"
    >
      <VStack spacing={4} align="stretch">
        <Heading fontSize={"3xl"}>My Collection</Heading>

        <SimpleGrid columns={3} spacing={4} pt={4}>
          {Cards.map((c) => (
            <CollectionCard
              key={c.id}
              title={c.title}
              body={c.body}
              header={c.header}
              slug={c.slug}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Collection;
