import React from "react";
import ThemeSwitch from "../widgets/ThemeSwitch";

export const Header: React.VFC<{}> = () => {
  return (
    <div>
      <div className="mt-5">
        <ThemeSwitch />
      </div>

      <div className="desc w-full my-6 space-y-1">
        <p className="text-xl">iamtakagi.net</p>
        <p className="text-sm">Welcome. (⋈◍＞◡＜◍)。✧♡</p>
      </div>
    </div>
  );
};
