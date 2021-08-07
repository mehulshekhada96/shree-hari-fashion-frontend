import Link from "next/link";
import Head from "next/head";
import Navbar from "./Navbar";
export default function Layout({children}) {
  return (
    <>
      <Head>
      <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
      </Head>
      <Navbar />
      <section className='container mx-auto lg:px-5 px-5'>
      {children}
      </section>
    </>
  );
}
