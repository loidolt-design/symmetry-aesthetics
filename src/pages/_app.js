import { ToastContainer } from "react-toastify";
import ScrollToTop from "react-scroll-to-top";

import "../styles/styles.scss";
import React from "react";

const App = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <ToastContainer position="bottom-left" autoClose={3000} />
      <ScrollToTop
        smooth
        component={<i className="fal fa-arrow-to-top" />}
        style={{
          backgroundColor: "#f7f5f4",
          borderRadius: "999px",
          height: "50px",
          width: "50px",
        }}
      />
    </React.Fragment>
  );
};

export default App;
