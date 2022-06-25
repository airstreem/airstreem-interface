import {
  Box,
  Flex,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Heading,
  Center,
  VStack,
  SimpleGrid,
  Spacer,
  useDisclosure,
  ModalContent,
  Modal,
  Image,
  ModalOverlay,
} from "@chakra-ui/react";
import { useMoralis } from "react-moralis";
import ReceivingCard from "./ReceivingCard";

const Receiving = () => {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  const { isOpen, onOpen, onClose } = useDisclosure();

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
    <Box p={12} boxShadow="2xl" m="20px 20% 20px 20%" rounded={25} bg="white">
      <VStack spacing={4} align="stretch">
        <Flex justify={"stretch"}>
          <Heading>Receiving</Heading>
          <Spacer />
          <Button
            onClick={onOpen}
            fontSize={"xl"}
            h="50px"
            colorScheme={"blue"}
            rounded="25px"
          >
            Swap Tokens
          </Button>
        </Flex>
        <SimpleGrid columns={3} spacing={10} pt={10}>
          {Cards.map((c) => (
            <ReceivingCard
              key={c.id}
              title={c.title}
              body={c.body}
              header={c.header}
              slug={c.slug}
            />
          ))}
        </SimpleGrid>
      </VStack>
      <Modal onClose={onClose} size={"lg"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <Center h="500px" w="500px">
            <Heading>Swap Tokens</Heading>
          </Center>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Receiving;
