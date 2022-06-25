import { Box } from "@chakra-ui/react";
import ReceivingChildCard from "./ReceivingChildCard";
import ReceivingParentCard from "./ReceivingParentCard";

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
    <Box>
      <Box>
        <ReceivingParentCard
          title={title}
          body={body}
          header={header}
          slug={slug}
        />
      </Box>
      <Box ml={"30px"} mt={"-260px"}>
        <ReceivingChildCard />
      </Box>
    </Box>
  );
};

export default ReceivingCard;
