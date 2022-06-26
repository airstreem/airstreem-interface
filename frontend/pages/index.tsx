import type { NextPage } from "next";

import Receiving from "../components/Receiving";
import Sending from "../components/Sending";
import Collection from "../components/Collection";

const Home: NextPage = () => {
  // const { isAuthenticated, user, account } = useMoralis();

  return (
    <>
      <Collection />
      <Receiving />
      <Sending />
    </>
  );
};

export default Home;
