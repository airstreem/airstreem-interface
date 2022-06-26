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
  Center,
} from "@chakra-ui/react";
import { FaLock } from "react-icons/fa";

const ReceivingChildCard = () => {
  return (
    <Box
      w="220px"
      h="300px"
      boxshadow="xl"
      rounded="25px"
      overflow="hidden"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundImage={`url(${"ape.png"})`}
      position="relative"
      bg="rgb(25, 25, 25, 1)"
    >
      <VStack spacing={4} align="stretch" p={10} zIndex="5">
        <Center zIndex="2" pb="6">
          <FaLock color="white" size="100px" />
        </Center>
        <Progress value={80} h="20px" rounded="25px" zIndex="2" />
        <Text color="white" zIndex="2" align={"center"} fontSize="lg">
          16/20 tokens needed to unlock
        </Text>
      </VStack>
    </Box>
  );
};

export default ReceivingChildCard;
