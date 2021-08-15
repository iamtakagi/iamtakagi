import React from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export const Layout: React.FC<{ Component, pageProps }> = ({ Component, pageProps }) => (
    <div className="container mx-auto text-left">
        <Header />
        <Component {...pageProps} />
        <Footer />
    </div>
)