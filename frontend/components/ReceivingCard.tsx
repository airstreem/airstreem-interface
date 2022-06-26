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
          "https://app.superfluid.finance/streams/mumbai/0x5493b94a949e3fb0858b5ed337ee529cbaf50ad52b15543ae00f8249f98ea8ca/34/v1"
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
