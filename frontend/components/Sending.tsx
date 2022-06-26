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
import { useEffect, useRef, useState } from "react";
import { IoMdImage } from "react-icons/io";
import { useMoralis, useMoralisFile } from "react-moralis";
import SendingCard from "./SendingCard";

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
  const [newNFT, setNewNFT] = useState({
    name: "",
    symbol: "",
    parent_holder: "0x80d2ab2b94969204ccfc86267ef09d8010e1b8b8",
  });
  const [fileTarget, setFileTarget] = useState("");
  const [metaTarget, setMetaTarget] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userNFTs, setUserNFTs] = useState([]);

  const fetchNFTs = async () => {
    // Setup request options:
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    // Replace with your Alchemy API key:
    const apiKey = "eQZqsNJtnWqZ82KGuOd58PIYn5qAy4LP";
    const baseURL = `https://polygon-mainnet.g.alchemy.com/v2/${apiKey}/getNFTs/`;
    // Replace with the wallet address you want to query:
    const ownerAddr = user!.get("ethAddress");
    const fetchURL = `${baseURL}?owner=${ownerAddr}`;

    // Make the request and print the formatted response:
    fetch(fetchURL, requestOptions).then(async (response) => {
      const res = await response.json();
      console.log(res);

      if (res) {
        // console.log(res);
        let nfts = [];
        res.ownedNfts.map((nft) => {
          // if (
          //   nft.contract.address ===
          //   "0xe0f3cf3a8f27b3504ecb7f82621f7f9cdc0ad625"
          // )
          if (nft.metadata.name === "#003") {
            nfts.push({
              address: nft.contract.address,
              name: nft.metadata.name,
              description: nft.metadata.description,
              image: nft.metadata.image,
            });
          }
          setUserNFTs(nfts);
        });
      }
    });
  };

  // console.log(userNFTs);

  useEffect(() => {
    if (isAuthenticated) {
      fetchNFTs();
    }
  }, [isAuthenticated]);

  const onStartStream = async () => {
    // Save file input to IPFS
    const file = new Moralis.File(fileTarget.name, fileTarget);
    await file.saveIPFS();

    const reqCreateNFTs = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: newNFT.name,
        symbol: newNFT.symbol,
        parent_holders: [newNFT.parent_holder],
        child_metadata: [
          {
            name: "#001",
            description: "This is mutant #001",
            file_url: file.ipfs(),
          },
        ],
      }),
    };

    // Send request
    // fetch("http://localhost:3001/createNFTs", reqCreateNFTs)
    const insertedId = await fetch(
      "http://172.105.107.228:3001/createNFTs",
      reqCreateNFTs
    )
      .then(async (response) => {
        const req = await response.json();
        return req.insertedId;
      })
      .catch((err) => {
        console.log(err);
      });

    const reqCreateCoins = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: insertedId,
      }),
    };
    fetch("http://172.105.107.228:3001/createCoins", reqCreateCoins)
      .then(async (response) => {
        console.log("COINS CREATED");
        console.log(await response.json());
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        <Flex justify={"stretch"}>
          <Heading fontSize={"3xl"}>Sending</Heading>
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
        <SimpleGrid columns={3} spacing={4} pt={4}>
          {userNFTs.map((c) => (
            <SendingCard
              key={c.address}
              name={c.name}
              description={c.description}
              image={c.image}
              slug={"aaa"}
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

            <Text>Which NFT holder are you streaming to?</Text>
            <Select placeholder="Select NFT holder..">
              <option value="option1">BAYC #003</option>
              <option value="option2">BAYC #004</option>
              <option value="option3">BAYC #005</option>
            </Select>

            {/* new collection */}
            <Heading pt={4} fontSize={"xl"}>
              Create new collection
            </Heading>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                value={newNFT.name}
                onChange={(e) => {
                  setNewNFT({ ...newNFT, name: e.target.value });
                }}
                placeholder="Bored Apes Collection"
                h="50px"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="symbol">Symbol</FormLabel>
              <Input
                id="symbol"
                value={newNFT.symbol}
                onChange={(e) => {
                  setNewNFT({ ...newNFT, symbol: e.target.value });
                }}
                placeholder="Bored Apes Collection"
                h="50px"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="files">Upload NFT image</FormLabel>

              {/* Image Upload */}
              <Center w="full">
                <VStack
                  borderColor="gray.300"
                  w="full"
                  borderStyle="dashed"
                  borderWidth="2px"
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

            <FormControl isRequired>
              <FormLabel htmlFor="files">Upload files</FormLabel>

              {/* Metadata Upload */}
              <Center w="full">
                <VStack
                  borderColor="gray.300"
                  w="full"
                  borderStyle="dashed"
                  borderWidth="2px"
                >
                  <Icon as={IoMdImage} color="gray.300" w={16} h={16} />
                  <Input
                    type="file"
                    height="full"
                    width="full"
                    position="absolute"
                    opacity="0"
                    aria-hidden="false"
                    accept="json/*"
                    onChange={(e) => {
                      setMetaTarget(e.target.files[0]);
                    }}
                    _hover={{
                      cursor: "pointer",
                    }}
                  />
                  <Text>{metaTarget.name}</Text>
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
