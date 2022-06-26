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
  name,
  description,
  image,
  slug,
}: {
  name?: string;
  description?: string;
  image?: string;
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
        backgroundImage={`url(${image})`}
      />
      <VStack spacing={"4px"} align="stretch">
        <Text fontSize={20} fontWeight="bold">
          {name}
        </Text>
        <Text color="gray.500">{description}</Text>
      </VStack>
    </Box>
  );
};

export default ReceivingParentCard;
