import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import ThemeSwitch from "../widgets/ThemeSwitch";

export const Footer: React.VFC<{}> = () => {
  return (
    <footer className="desc w-full my-6 space-y-1 mt-7">
      <a
        className="text-sm underline"
        href="https://github.com/iamtakagi-net/iamtakagi.net"
      >
        View code of this page
        <FiGithub className="inline block ml-1" />
      </a>
    </footer>
  );
};
