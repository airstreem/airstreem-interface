import {
  AspectRatio,
  Input,
  Icon,
  Text,
  VStack,
  Center,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { IoMdImage } from "react-icons/io";

const FileUpload = () => {
  const [file, setFile] = useState("");
  const inputRef = useRef();

  return (
    <Center w="full">
      <VStack
        borderColor="gray.300"
        w="full"
        borderStyle="dashed"
        borderWidth="2px"
        // position="relative"
        // backgroundPosition="center"
        // backgroundRepeat="no-repeat"
        // backgroundSize="cover"
        // backgroundImage={file}
      >
        <Icon as={IoMdImage} color="gray.300" w={16} h={16} />
        <Input
          type="file"
          height="full"
          width="full"
          position="absolute"
          opacity="0"
          aria-hidden="false"
          accept="image/*"
          onChange={() => {
            setFile(inputRef.current.files[0].name);
          }}
          ref={inputRef}
          _hover={{
            cursor: "pointer",
          }}
        />
        <Text>{file}</Text>
      </VStack>
    </Center>
  );
};

export default FileUpload;
