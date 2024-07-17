/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=NTR&display=swap" rel="stylesheet" />
        <link rel="icon" href="/glaceon.png" type="image/png" />
        <title>Raja Ahmed :D</title>
      </Head>
      <body className="bg-bodyColor w-full h-screen font-bodyFont text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
