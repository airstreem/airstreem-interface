import {
  Button,
  Center,
  Heading,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  VStack,
  Text,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { useMoralis } from "react-moralis";

const WalletModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { authenticate, isAuthenticated } = useMoralis();

  const login = async ({ provider }) => {
    if (!isAuthenticated) {
      await authenticate({
        provider: provider,
        signingMessage: "Log in using Moralis",
      })
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
    <>
      <Center>
        <Button onClick={onOpen} mt={20}>{`Connect Wallet`}</Button>
      </Center>

      <Modal onClose={onClose} size={"lg"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <Button
            h={250}
            onClick={() => {
              login("metamask");
            }}
          >
            <VStack>
              <Image src="./metamask.svg" boxSize={20}></Image>
              <Heading fontSize={"2xl"}>Metamask</Heading>
              <Text fontSize={"md"} textColor="gray.500">
                Connect with your Metamask wallet
              </Text>
            </VStack>
          </Button>

          <Button
            h={250}
            onClick={() => {
              login("walletconnect");
            }}
          >
            <VStack>
              <Image src="./walletconnect.svg" boxSize={20}></Image>
              <Heading fontSize={"2xl"}>WalletConnect</Heading>
              <Text fontSize={"md"} textColor="gray.500">
                Scan with WalletConnect to connect
              </Text>
            </VStack>
          </Button>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WalletModal;
