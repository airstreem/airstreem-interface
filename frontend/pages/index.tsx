import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import WalletModal from "./components/WalletModal";
import NavBar from "./components/NavBar";

const Home: NextPage = () => {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  useEffect(() => {
    if (isAuthenticated) {
      // add your logic here
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const loginMetamask = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user!.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <Box
      as="main"
      width="full"
      // maxWidth={1100}
      margin="0 auto"
    >
      {!isAuthenticated && <WalletModal />}
      {isAuthenticated && (
        <>
          <NavBar />
        </>
      )}
    </Box>
  );
};

export default Home;
