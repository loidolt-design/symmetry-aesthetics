import Head from "next/head";

import withScrollFixed from "../../common/withScrollFixed";
import FooterTwo from "../Footer/FooterTwo";
import Header from "../Header/Header";

let ScrollFixedHeader = withScrollFixed(Header);

export default function Layout(props) {
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
