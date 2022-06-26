import { Box } from "@chakra-ui/react";
import ReceivingChildCard from "./ReceivingChildCard";
import ReceivingParentCard from "./ParentCard";
import { useRouter } from "next/router";

const ReceivingCard = ({
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
      _hover={{
        transform: "translateY(-2px)",
        cursor: "pointer",
      }}
      onClick={() => {
        router.push(`/receiving/${slug}`);
      }}
    >
      <Box zIndex={"0"} style={{ filter: "brightness(.8)" }}>
        <ReceivingParentCard
          title={title}
          body={body}
          header={header}
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
