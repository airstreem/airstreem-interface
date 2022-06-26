import { ethers } from "ethers";
import { Framework } from "@superfluid-finance/sdk-core";
// import { ObjectID } from "mongodb";

async function startFlow(holderAddress, contractAddress) {
  let provider = new ethers.providers.JsonRpcProvider(
    "https://polygon-mumbai.g.alchemy.com/v2/t6DAudJZCSmbPijYTjG4GA2Ga25GYNTU"
  );

  const sf = await Framework.create({
    chainId: 80001,
    provider: provider,
    customSubgraphQueriesEndpoint: "",
    dataMode: "WEB3_ONLY",
  });
  console.log(sf);
}
await startFlow("", "");
