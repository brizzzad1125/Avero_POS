import React from "react";
import NextHead from "next/head";
import { string } from "prop-types";

const defaultDescription = "Avero - Revolutionizing Hospitality";
const defaultTitle = "Avero - Point of Sale";

const Head = props =>
  <div>
    <NextHead>
      <meta charSet="UTF-8" />
      <title>
        {props.title || defaultTitle}
      </title>
      <meta
        name="description"
        content={props.description || defaultDescription}
      />
      <meta property="og:title" content={props.title || defaultTitle} />
    </NextHead>
    <style global jsx>{`
      body {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', arial, sans-serif;
        height: 100%;
      }
      html {
        height: 100%;
      }
      #__next {
        height: 100%;
      }
    `}</style>
  </div>;

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
};

export default Head;
