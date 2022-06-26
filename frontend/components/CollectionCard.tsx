import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Divider,
  HStack,
  Spacer,
  Progress,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

const ReceivingParentCard = ({
  title,
  body,
  header,
  slug,
}: {
  title?: string;
  body?: string;
  header?: string;
  slug?: string;
}) => {
  const router = useRouter();

  return (
    <Box
      w="220px"
      h="300px"
      boxShadow="xl"
      rounded="25px"
      p={6}
      overflow="hidden"
      bg="white"
      _hover={{
        transform: "translateY(-1px)",
        cursor: "pointer",
      }}
      onClick={() => {
        router.push(`/collection/${slug}`);
      }}
    >
      <Box
        h="180px"
        bg="gray.100"
        mt={-6}
        mx={-6}
        mb={3}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundImage={`url(${header})`}
      />
      <VStack spacing={"4px"} align="stretch">
        <Text fontSize={20} fontWeight="bold">
          {title}
        </Text>
        <Text color="gray.500">{body}</Text>
      </VStack>
    </Box>
  );
};

export default ReceivingParentCard;
