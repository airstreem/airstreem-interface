import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

import ReceivingParentCard from "./ParentCard";
import SendingChildCard from "./SendingChildCard";

const SendingCard = ({ nfts }) => {
  const router = useRouter();
  console.log("my nfts", nfts);

  return (
    <Box
      _hover={{
        transform: "translateY(-2px)",
        cursor: "pointer",
      }}
      onClick={() => {
        // router.push(`/sending/${slug}`);
      }}
    >
      <Box style={{ filter: "brightness(.8)" }}>
        <ReceivingParentCard
          name={nfts[0].name}
          description={nfts[0].description}
          image={nfts[0].image}
          slug={nfts[0].slug}
        />
      </Box>
      <Box ml={"30px"} mt={"-260px"}>
        <SendingChildCard
          name={nfts[nfts.length - 1].name}
          description={nfts[nfts.length - 1].description}
          image={nfts[nfts.length - 1].image}
          slug={nfts[nfts.length - 1].slug}
        />
      </Box>
    </Box>
  );
};

export default SendingCard;
