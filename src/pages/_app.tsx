import * as React from "react";
import { AppProps } from "next/app";

import "../styles/main.css";

const App: React.VFC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
export default App;
