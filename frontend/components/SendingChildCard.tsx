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

const SendingChildCard = ({
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
  return (
    <Box
      w="250px"
      h="330px"
      boxShadow="xl"
      rounded="25px"
      p={6}
      overflow="hidden"
      position="relative"
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
        backgroundImage={`url(${header})`}
        zIndex="1"
      />
      <VStack spacing={3} align="stretch">
        <VStack spacing={0} align="stretch">
          <Text fontSize={20} fontWeight="bold">
            {title}
          </Text>
          <Text color="gray.500" mt={"-10px"}>
            {body}
          </Text>
        </VStack>
        <Progress value={80} h="20px" rounded="15px" />
        <Text color="gray.500" pb="20px" align={"center"}>
          {"streaming to: vitalik.eth"}
        </Text>
      </VStack>
    </Box>
  );
};

export default SendingChildCard;
