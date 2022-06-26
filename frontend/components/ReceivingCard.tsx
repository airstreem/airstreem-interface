import { Box } from "@chakra-ui/react";
import ReceivingChildCard from "./ReceivingChildCard";
import ReceivingParentCard from "./ParentCard";

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
  return (
    <Box
      _hover={{
        transform: "translateY(-2px)",
        cursor: "pointer",
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
