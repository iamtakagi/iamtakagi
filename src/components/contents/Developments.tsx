import * as React from "react";

const developments = [
  
  {
    label: "Dispotify",
    url: "https://github.com/iamtakagi/dispotify",
    description: "Spotify to Discord notifier / Spotifyで再生中の音楽をDiscordに通知するWebアプリ",
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
