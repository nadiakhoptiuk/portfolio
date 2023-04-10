import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#fff" />
        <meta
          name="description"
          content="Full Stack Developer Nadiia Khoptiuk's portfolio"
        />

        <link
          rel="canonical"
          href="https://portfolio-nadiia-khoptiuk.vercel.app/"
        />
        <link
          rel="alternate"
          href="https://portfolio-nadiia-khoptiuk.vercel.app/"
        />

        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;900&family=Roboto:wght@100;300;400;500&display=swap"
          rel="stylesheet"
        />

        <meta
          name="twitter:description"
          content="Full Stack Developer Nadiia Khoptiuk's portfolio"
        />
        <meta
          name="twitter:title"
          content="Full Stack Developer Nadiia Khoptiuk's portfolio"
        />
        <meta name="twitter:card" content="summary" />

        <meta property="og:image" content={'/preview.jpg'} />
        <meta property="og:image:width" content="903" />
        <meta property="og:image:height" content="626" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Full Stack Developer Nadiia Khoptiuk's portfolio"
        />
        <meta
          property="og:title"
          content="Full Stack Developer Nadiia Khoptiuk's portfolio"
        />
      </Head>

      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
