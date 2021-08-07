import Link from "next/link";
import Head from "next/head";
import Navbar from "./Navbar";
export default function Layout({children}) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <Navbar />
      {children}
    </>
  );
}
