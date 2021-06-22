import React from "react";

import { Top } from "../components/contents/Top";
import { Accounts } from "../components/contents/Accounts";
import { Developments } from "../components/contents/Developments";
import { Contact } from "../components/contents/Contact";

const IndexPage: React.VFC<{}> = () => {
  return (
    <>
      <Top />
      <Accounts />
      <Developments />
      <Contact />
    </>
  );
};

export default IndexPage;
