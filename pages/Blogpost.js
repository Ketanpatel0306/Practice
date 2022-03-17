import React from "react";
import { Banner3, Footer, Header } from "../Component";

const Blogpost = () => {
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
      <Banner3 />
      <Footer />
    </div>
  );
};
export default Blogpost;
