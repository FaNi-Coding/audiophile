import * as React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Head from "next/head";
import { LayoutProps } from "./Interface";
import Main from "./Main";

export default function Layout({
  children,
  title,
  description,
  keywords,
  component,
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="description" content={keywords} />
      </Head>
      <Navbar>{component && component}</Navbar>
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
