import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Pageanimation } from "../component";

function MyApp({ Component, pageProps }) {
  // const [loading, setLoading] = React.useState(false);
  // React.useEffect(() => {
  //   setTimeout(() => setLoading(true), 3000);
  // });
  // const nextFile = () => {
  //   setTimeout(() => setLoading(false));
  // };

  return (
    // <>
    // {!loading ? (
    // <React.Fragment>
    <Component {...pageProps} />
    // </React.Fragment>
    // ) : (
    // <Pageanimation setLoadingClick={() => nextFile()}/>
    // )}
    // </>
  );
}

export default MyApp;
