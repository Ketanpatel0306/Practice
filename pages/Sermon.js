import React from "react";
import {
  Banner2,
  Footer,
  Header,
  Upcomingsermons,
  Viewallevents,
  Loader,
} from "../component";
import { useState } from "react";

const Sermon = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const OnCange = () => {
    setToggleMenu(true);
    setTimeout(() => {
      setToggleMenu(false);
    }, 3000);
  };
  return (
    <div>
      {toggleMenu && (
        <div
          style={{
            zIndex: 999999999999,
            position: "absolute",
            height: "100vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Loader />
        </div>
      )}
      <Header onAboutChange={() => OnCange()} />
      <Banner2 />
      <Upcomingsermons />
      <Viewallevents />
      <Footer />
    </div>
  );
};
export default Sermon;
