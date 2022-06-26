import { Box } from "@chakra-ui/react";

import ReceivingParentCard from "./ParentCard";
import SendingChildCard from "./SendingChildCard";

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
      <Box style={{ filter: "brightness(.8)" }}>
        <ReceivingParentCard
          title={title}
          body={body}
          header={header}
          slug={slug}
        />
      </Box>
      <Box ml={"30px"} mt={"-260px"}>
        <SendingChildCard
          title={title}
          body={body}
          header={header}
          slug={slug}
        />
      </Box>
    </Box>
  );
};

export default ReceivingCard;
