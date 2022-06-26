import { Box } from "@chakra-ui/react";
import ReceivingChildCard from "./ReceivingChildCard";
import ReceivingParentCard from "./ParentCard";
import { useRouter } from "next/router";
import Link from "next/link";

const ReceivingCard = ({
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
      _hover={{
        transform: "translateY(-2px)",
        cursor: "pointer",
      }}
      onClick={() => {
        router.push(
          "https://app.superfluid.finance/streams/mumbai/0xa54822ad63b4fd1fbeeffeef634609e3b9c3e1f88c118a25380721e613770432/148/v1"
        );
        // router.push(`/receiving/${slug}`);
      }}
    >
      <Box zIndex={"0"} style={{ filter: "brightness(.8)" }}>
        <ReceivingParentCard
          name={name}
          description={description}
          image={image}
          slug={slug}
        />
      </Box>
      <Box ml={"30px"} mt={"-260px"} zIndex={"1"}>
        <ReceivingChildCard />
      </Box>
    </Box>
  );
};

export default ReceivingCard;
