import React, { useState } from "react";

const accounts = [
  {
    name: "Twitter",
    url: "https://twitter.com/iam_takagi",
    label: "@iam_takagi",
  },
  {
    name: "Scrapbox",
    url: "https://scrapbox.io/iamtakagi",
    label: "https://scrapbox.io/iamtakagi",
  },
  {
    name: "GitHub Personal",
    url: "https://github.com/iamtakagi",
    label: "https://github.com/iamtakagi",
  },
  {
    name: "GitHub Organization",
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
    url: "https://discord.com/invite/XSwGKpYcgn",
    label: "Invite Link",
  },
];

const products = [
  {
    label: "Animelist Generator",
    url: "https://github.com/iamtakagi-net/animelist-generator",
    description: "アニメリストを生成するWebアプリ",
  },
  {
    label: "火曜日になりました 絶滅",
    url: "https://github.com/iamtakagi-net/kayoubi-zetsumetsu",
    description: "火曜日になりました 絶滅 #kayoubi_zetsumetsu for Twitter App",
  },
  {
    label: "びく民bot",
    url: "https://github.com/iamtakagi/bikumin",
    description: "マリオカート8DX 大規模模擬Discord鯖bot",
  },
  {
    label: "単語を覚えるれんちょんbot",
    url: "https://github.com/iamtakagi/renchon",
    description: "TLから名詞を拾ってテンプレ通りにつぶやくbot",
  },
  {
    label: "My MK Times",
    url: "https://github.com/iamtakagi/my-mk-times",
    description: "TimeTrial Records management app / iOS・Android",
  },
];

const IndexPage: React.VFC<{}> = () => {
  const accountList = accounts.map((account, i) => (
    <li className="text-sm" key={i}>
      {account.name}:{" "}
      <a className="underline text-blue-500" href={account.url}>
        {account.label}
      </a>
    </li>
  ));

  const productList = products.map((product, i) => (
    <li className="text-sm" key={i}>
      <a className="underline text-blue-500" href={product.url}>
        {product.label}
      </a>
      : {product.description}
    </li>
  ));

  return (
    <div>
      <div className="desc w-full my-6 space-y-1 text-left">
        <p className="text-sm">プログラミングとゲームとアニメと音楽が好き。</p>
      </div>

      <div className="desc w-full my-6 space-y-1 text-left">
        <p className="text-lg">Accounts / アカウント</p>

        {accountList}
      </div>

      <div className="desc w-full my-6 space-y-1 text-left">
        <p className="text-lg">Products / 作ったもの</p>

        {productList}
      </div>

      <div className="desc w-full my-6 space-y-1 text-left">
        <p className="text-lg">Contact / 連絡</p>
        <p className="text-sm">
          ご依頼承ります。依頼の内容によってはお断りさせて頂く場合もございますが、お気軽にご相談ください。
        </p>
        <p className="text-sm">E-Mail: iamtakagi.contact@gmail.com</p>
      </div>
    </div>
  );
};

export default IndexPage;
