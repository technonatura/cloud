import Head from "next/head";

import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "components/home/Header";
import Footer from "components/home/Footer";

import Hero from "components/home/Hero";
import HC from "components/home/HC";

// import Footer from "../components/home/Footer" // will add this in the part 2

// @ts-ignore
export default function Home(props) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Hero />
      <HC />
      {props.children}
      <Footer />
    </>
  );
}
