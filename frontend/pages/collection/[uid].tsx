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
  Center,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

const CollectionCardPage = () => {
  const router = useRouter();
  const { isAuthenticated, user, account } = useMoralis();
  const Web3Api = useMoralisWeb3Api();
  const [userNFTs, setUserNFTs] = useState([]);
  const [NFT, setNFT] = useState({
    id: "1",
    title: "#001",
    body: "Bored Apes Yacht Club",
    header: "ape.png",
    slug: "BAYC_#001",
    image:
      "https://ipfs.io/ipfs/bafkreib7r7oduyr3bi36ffm42e7szvovubo3rkgghzbg55gwkspxt7hagi",
  });

  const fetchNFTs = async () => {
    const nfts = await Web3Api.account.getNFTs({
      chain: "mumbai",
      address: user!.get("ethAddress"),
    });
    setUserNFTs(nfts);
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchNFTs();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (userNFTs) {
      //   userNFTs.map((nft) => {
      //     const { uid } = router.query;
      //     const uid_name = uid!.toString().split("_");
      //     console.log(uid_name);
      //     if (
      //       nft.get("symbol") === uid_name[0] &&
      //       nft.get("name") === uid_name[1]
      //     ) {
      //       setNFT(nft);
      //     }
      //   });
    }
  }, [userNFTs]);

  return (
    <Center w="full" h="1000px">
      <Center
        w="60%"
        h="70%"
        minW="800px"
        boxShadow="2xl"
        mt={"-10%"}
        rounded={25}
        bg="white"
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* <HStack>
          <Image src={NFT.get("image")} />
        </HStack> */}
      </Center>
    </Center>
  );
};

export default CollectionCardPage;
