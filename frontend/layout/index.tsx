import { Box } from "@chakra-ui/react";

import { ReactNode, useState } from "react";
import { useEffect } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

import NavBar from "../components/NavBar";
import WalletModal from "../components/WalletModal";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { isAuthenticated } = useMoralis();

  return (
    <>
      {!isAuthenticated && <WalletModal />}
      {isAuthenticated && (
        <>
          <NavBar />
          <Box
            as="main"
            width="full"
            margin="0 auto"
            pt="10px"
            pb="10px"
            bg={isAuthenticated ? "gray.100" : "white"}
          >
            {children}
          </Box>
        </>
      )}
    </>
  );
};

export default Layout;
