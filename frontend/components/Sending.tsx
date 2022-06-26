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
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Select,
  FormControl,
  Input,
  FormLabel,
  Icon,
} from "@chakra-ui/react";
import Moralis from "moralis";
import { useRef, useState } from "react";
import { IoMdImage } from "react-icons/io";
import { useMoralis, useMoralisFile } from "react-moralis";
import SendingCard from "./SendingCard";
// import listReactFiles from "list-react-files";

const Sending = () => {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  const { saveFile } = useMoralisFile();
  const [fileTarget, setFileTarget] = useState("");

  const inputRef = useRef();

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

  const onStartStream = async () => {
    // Save file input to IPFS

    // saveFile("ape.png", fileTarget, {
    //   type: "image/png",
    //   onSuccess: (result) => console.log(result),
    //   onError: (error) => console.log(error),
    // });

    const file = new Moralis.File("apestream.png", fileTarget);
    var find = require("list-files");

    find(
      function (result) {
        console.log(result);
        // => './dirname/a.js'
        //=> './dirname/b.js'
      },
      {
        dir: "apes/",
        name: "png",
      }
    );
    // listReactFiles(__dirname).then((files) => console.log(files));
    // await file.saveIPFS();
    // console.log(file.ipfs());
    // console.log(file.hash());

    // TODO: send hash to backend
  };

  return (
    <Box p={12} boxShadow="2xl" m="20px 20% 20px 20%" rounded={25} bg="white">
      <VStack spacing={4} align="stretch">
        <Flex justify={"stretch"}>
          <Heading>Sending</Heading>
          <Spacer />
          <Button
            onClick={onOpen}
            fontSize={"xl"}
            h="50px"
            colorScheme={"blue"}
            rounded="25px"
          >
            Create Stream
          </Button>
        </Flex>
        <SimpleGrid columns={3} spacing={10} pt={10}>
          {Cards.map((c) => (
            <SendingCard
              key={c.id}
              title={c.title}
              body={c.body}
              header={c.header}
              slug={c.slug}
            />
          ))}
        </SimpleGrid>
      </VStack>
      <Modal onClose={onClose} size={"2xl"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <VStack align={"stretch"} spacing={4} p={12}>
            {/* intro */}
            <Heading>New Stream</Heading>

            <Text>Holders of which NFT collection are you streaming to?</Text>
            <Select placeholder="Select collection..">
              <option value="option1">BAYC 1</option>
              <option value="option2">BAYC 2</option>
              <option value="option3">BAYC 3</option>
            </Select>

            {/* new collection */}
            <Heading pt={4} fontSize={"xl"}>
              Create new collection
            </Heading>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" placeholder="Bored Apes Yacht Club" h="50px" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="symbol">Symbol</FormLabel>
              <Input id="name" placeholder="BAYC" h="50px" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="files">Upload files</FormLabel>

              {/* File Upload */}
              <Center w="full">
                <VStack
                  borderColor="gray.300"
                  w="full"
                  borderStyle="dashed"
                  borderWidth="2px"
                  // position="relative"
                  // backgroundPosition="center"
                  // backgroundRepeat="no-repeat"
                  // backgroundSize="cover"
                  // backgroundImage={file}
                >
                  <Icon as={IoMdImage} color="gray.300" w={16} h={16} />
                  <Input
                    type="file"
                    height="full"
                    width="full"
                    position="absolute"
                    opacity="0"
                    aria-hidden="false"
                    accept="image/*"
                    onChange={(e) => {
                      setFileTarget(e.target.files[0]);
                    }}
                    _hover={{
                      cursor: "pointer",
                    }}
                  />
                  <Text>{fileTarget.name}</Text>
                </VStack>
              </Center>
            </FormControl>
            <Text>
              Note: images and metadata file names should match the existent
              collection.
            </Text>

            {/* spacer */}
            <Box pt={4}></Box>

            {/* upload */}
            <Button onClick={onStartStream} fontSize="xl" height={"50px"}>
              Start Stream
            </Button>
          </VStack>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Sending;
