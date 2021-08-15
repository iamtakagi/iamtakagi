import React from "react";
import ThemeSwitch from "./theme-switch";

export const Header: React.FC<{}> = () => {
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
