import React from "react";
import Head from "next/head";

import FooterTwo from "../Footer/FooterTwo";
import withScrollFixed from "../../common/withScrollFixed";
import HeaderOne from "../Header/HeaderOne";

let ScrollFixedHeader = withScrollFixed(HeaderOne);

export default function LayoutOne(props) {
  return (
    <>
      <Head>
        <title>{props.title || "Eliah | React"}</title>
      </Head>
      <ScrollFixedHeader container={props.container} />
      {props.children}
      <FooterTwo />
    </>
  );
}
