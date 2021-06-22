import { Head } from "next/document";
import React from "react";
import ThemeSwitch from "../widgets/ThemeSwitch";

const ogImageUrl = 'https://iamtakagi.net/og-image.png'

export const Header: React.VFC<{}> = () => {
  return (
    <header>
       <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;800&display=swap"
            rel="stylesheet"
          />

          <title>iamtakagi.net</title>
          <meta property="og:title" content="iamtakagi.net" />
          <meta property="og:description" content="iamtakagi.netu" />
          <meta property="og:url" content="https://iamtakagi.net/" />
          <meta property="og:image" content={ogImageUrl} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={ogImageUrl} />
          <meta name="twitter:title" content="iamtakagi.net" />
          <meta name="twitter:description" content="iamtakagi.net" />
          <meta name="twitter:site" content="@iam_takagi" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="mt-5">
        <ThemeSwitch />
      </div>

      <div className="desc w-full my-6 space-y-1">
        <p className="text-xl">iamtakagi.net</p>
        <p className="text-sm">Welcome. (⋈◍＞◡＜◍)。✧♡</p>
      </div>
    </header>
  );
};
