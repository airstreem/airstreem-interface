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
      w="250px"
      h="300px"
      boxShadow="lg"
      rounded="25px"
      p={6}
      overflow="hidden"
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
        <Text color="gray.500" pb="20px">
          {"owner: vitalik.eth"}
        </Text>
      </VStack>
    </Box>
  );
};

export default ReceivingParentCard;
