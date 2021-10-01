import React from "react";

import { Accounts } from "../components/contents/accounts";
import { Developments } from "../components/contents/developments";
import { Contact } from "../components/contents/contact";

const IndexPage: React.FC<{}> = () => {
  return (
    <>
      <Accounts />
      <Contact />
    </>
  );
};

export default IndexPage;
