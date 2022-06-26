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
import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { SwapWidget } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";

const Receiving = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuthenticated, user } = useMoralis();
  const [userNFTs, setUserNFTs] = useState([]);
  const [provider, setProvider] = useState(null);

  const fetchNFTs = async () => {
    // Provider
    const provider = new ethers.providers.AlchemyProvider(
      "matic",
      "eQZqsNJtnWqZ82KGuOd58PIYn5qAy4LP"
    );
    setProvider(provider);

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

  const fetchStream = async () => {
    type Paging = { take: number; skip?: number; lastId?: string };
    const provider = new ethers.providers.AlchemyProvider(
      "matic",
      "eQZqsNJtnWqZ82KGuOd58PIYn5qAy4LP"
    );

    const sf = await Framework.create({
      networkName: "matic",
      provider,
    });
    await sf.cfaV1.getFlow({
      superToken: "",
      sender: "",
      receiver: user!.get("ethAddress"),
      providerOrSigner: provider,
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
          <Heading fontSize={"3xl"}>Receiving</Heading>
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
        <SimpleGrid columns={3} spacing={4} pt={4}>
          {userNFTs.map((c) => (
            <ReceivingCard
              key={c.address}
              name={c.name}
              description={c.description}
              image={c.image}
              slug={"aaa"}
            />
          ))}
        </SimpleGrid>
      </VStack>
      <Modal onClose={onClose} size={"lg"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent borderRadius={25}>
          <SwapWidget
            provider={provider}
            jsonRpcEndpoint={
              "https://polygon-mumbai.g.alchemy.com/v2/t6DAudJZCSmbPijYTjG4GA2Ga25GYNTU"
            }
            width={530} // Custom width in pixels
          />
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Receiving;
