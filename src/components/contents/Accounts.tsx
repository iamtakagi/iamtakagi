import * as React from "react";

const accounts = [
  {
    name: "Twitter",
    url: "https://twitter.com/iam_takagi",
    label: "https://twitter.com/iam_takagi",
  },
  {
    name: "Scrapbox",
    url: "https://scrapbox.io/iamtakagi",
    label: "https://scrapbox.io/iamtakagi",
  },
  {
    name: "GitHub",
    url: "https://github.com/iamtakagi",
    label: "https://github.com/iamtakagi",
  },
  {
    name: "GitHub Org",
    url: "https://github.com/iamtakagi-net",
    label: "https://github.com/iamtakagi-net",
  },
  {
    name: "Annict",
    url: " https://annict.jp/@Takagi",
    label: "https://annict.jp/@Takagi",
  },
  {
    name: "Blog",
    url: " https://blog.iamtakagi.net",
    label: "https://blog.iamtakagi.net",
  },
  {
    name: "Discord Server",
    url: "https://discord.gg/XSwGKpYcgn",
    label: "https://discord.gg/XSwGKpYcgn",
  },
];

export const Accounts: React.VFC<{}> = () => {
  return (
    <div className="desc w-full my-6 space-y-1 text-left">
      <p className="text-lg">Accounts / アカウント</p>

      {accounts.map((account, i) => (
        <li className="text-sm" key={i}>
          {account.name}:{" "}
          <a className="underline text-blue-500" href={account.url}>
            {account.label}
          </a>
        </li>
      ))}
    </div>
  );
};
