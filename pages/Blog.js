import React from "react";
import { Header, Footer, Ourblog, Allblogpost, Loader } from "../Component";
import { useState } from "react";

const Blog = () => {
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
      <Ourblog />
      <Allblogpost />
      <Footer />
    </div>
  );
};
export default Blog;
