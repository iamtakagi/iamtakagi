import  React from "react";

import "../styles/tailwind.scss";
import "../styles/main.scss";

import { Layout } from "../components/layout";

const App: React.FC<{ Component, pageProps }> = ({ Component, pageProps }) => (
  <Layout Component={Component} pageProps={pageProps} />
);

export default App;
