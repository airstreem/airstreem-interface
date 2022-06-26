import type { NextPage } from "next";
import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import WalletModal from "../components/WalletModal";
import NavBar from "../components/NavBar";
import Receiving from "../components/Receiving";
import Sending from "../components/Sending";
import Collection from "../components/Collection";
import { useMoralisWeb3Api } from "react-moralis";

const Home: NextPage = () => {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();
  const Web3Api = useMoralisWeb3Api();
  const [userNFTs, setUserNFTs] = useState(null);

  const fetchNFTs = async () => {
    const nfts = await Web3Api.account.getNFTs({
      chain: "mumbai",
      address: user!.get("ethAddress"),
    });
    setUserNFTs(nfts);
  };

  useEffect(() => {
    if (isAuthenticated) {
      console.log(user!.get("ethAddress"));
      fetchNFTs();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    console.log(userNFTs);
  }, [userNFTs]);

  return (
    <Box
      as="main"
      w="full"
      // minH="2000px"
      // maxWidth={1100}
      alignContent={"center"}
      justifyContent={"center"}
      margin="0 auto"
      bg={isAuthenticated ? "gray.100" : "white"}
      pb={12}
    >
      {!isAuthenticated && <WalletModal />}
      {isAuthenticated && (
        <>
          <NavBar />
          <Collection />
          <Receiving />
          <Sending />
        </>
      )}
    </Box>
  );
};

export default Home;
