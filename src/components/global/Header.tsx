import { Head } from "next/document";
import * as React from "react";
import ThemeSwitch from "../widgets/ThemeSwitch";

export const Header: React.VFC<{}> = () => {
  return (
    <header className="flex">
      <div className="desc w-full my-6 space-y-1">
        <p className="text-xl">iamtakagi.net</p>
        <p className="text-sm">Welcome. (⋈◍＞◡＜◍)。✧♡</p>
      </div>

      <div className="mt-5">
        <ThemeSwitch />
      </div>

    </header>
  );
};
