import * as React from "react";

const developments = [
  {
    label: "services",
    url: "https://github.com/iamtakagi-net/services",
    description: "Services",
  },
  {
    label: "anyboard",
    url: "https://github.com/iamtakagi/anyboard",
    description: "掲示板",
  },
  {
    label: "spotify2image",
    url: "https://github.com/iamtakagi/spotify2image",
    description: "Spotify embed to image",
  },
  {
    label: "火曜日になりました 絶滅",
    url: "https://github.com/iamtakagi/kayoubi-zetsumetsu",
    description: "火曜日になりました 絶滅 #kayoubi_zetsumetsu for Twitter App",
  },
  {
    label: "びく民bot",
    url: "https://github.com/iamtakagi/bikumin",
    description: "マリオカート8DX びく民鯖 Bot",
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

export const Developments: React.VFC<{}> = () => {
  return (
    <div className="desc w-full my-6 space-y-1 text-left">
      <p className="text-lg">Developments / 作ったもの</p>

      {developments.map((development, i) => (
        <li className="text-sm" key={i}>
          <a className="underline text-blue-500" href={development.url}>
            {development.label}
          </a>
          : {development.description}
        </li>
      ))}
    </div>
  );
};
