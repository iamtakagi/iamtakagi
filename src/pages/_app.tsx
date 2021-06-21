import * as React from "react";
import { AppProps } from "next/app";

import "../styles/main.css";

import { Header } from "../components/global/Header";
import { Footer } from "../components/global/Footer";

const App: React.VFC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <div className="container mx-auto text-left">
    <Header />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default App;
