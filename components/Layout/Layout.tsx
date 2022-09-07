import * as React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Head from "next/head";

export interface LayoutProps {
  children: React.ReactNode;
  title: string | "Audiophile | texchnology";
  description: string | "alot of technologies";
  keywords: string | "tech, headphones, earphones, speakers";
}

export default function Layout({
  children,
  title,
  description,
  keywords,
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="description" content={keywords} />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
