import React from "react";
import {
  Header,
  Footer,
  Viewallevents,
  Loader,
  Upcomingsermonsevent,
} from "../Component";
import { useState } from "react";

const Sermonevent = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const OnCange = () => {
    setToggleMenu(true);
    setTimeout(() => {
      setToggleMenu(false);
    }, 3000);
  };
  return (
    <div style={{ background: "#E5E5E5" }}>
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
      <Upcomingsermonsevent />
      <Viewallevents />
      <Footer />
    </div>
  );
};

export default Sermonevent;
