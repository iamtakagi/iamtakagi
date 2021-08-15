import React from "react";
import { FiGithub } from "react-icons/fi";

export const Footer: React.FC<{}> = () => {
  return (
    <footer className="desc w-full my-6 space-y-1 mt-7">
      <p className="text-sm">© 2021- takagi</p>
      <a
        className="text-sm underline"
        href="https://github.com/iamtakagi-net/iamtakagi.net"
      >
        View on GitHub
        <FiGithub className="inline block ml-1" />
      </a>
    </footer>
  );
};
