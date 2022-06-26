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
import { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

import CollectionCard from "./CollectionCard";

const Collection = () => {
  const { isAuthenticated, user } = useMoralis();
  const [userNFTs, setUserNFTs] = useState([]);
  const [NFT, setNFT] = useState({
    address: "1",
    name: "#001",
    description: "Bored Apes Yacht Club",
    slug: "BAYC_#001",
    image:
      "https://ipfs.io/ipfs/bafkreib7r7oduyr3bi36ffm42e7szvovubo3rkgghzbg55gwkspxt7hagi",
  });

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
      // console.log(res);

      if (res) {
        // console.log(res);
        let nfts = [];
        res.ownedNfts.map((nft) => {
          if (
            nft.contract.address ===
            "0xe0f3cf3a8f27b3504ecb7f82621f7f9cdc0ad625"
          ) {
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
          {userNFTs.map((c) => (
            <CollectionCard
              key={c.address}
              name={c.name}
              description={c.description}
              image={c.image}
              slug={"aaa"}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Collection;
