import React from "react";
import Head from "next/head";

const Header = (props) => {
  const { title } = props;

  return (
    <>
      <Head>
        {title && <title>{title}</title>}

        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
    </>
  );
};

export default Header;
