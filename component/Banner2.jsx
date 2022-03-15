import React from "react";
import { Container, Image } from "react-bootstrap";
import Style from "../styles/Banner2.module.css";

export const Banner2 = () => {
  return (
    <div className={Style.Banner2}>
      <Image src="./images/Image.svg" className={Style.Banner2Img} />
      <Container className={Style.Banner2Container}>
        <div className={Style.Banner2div}>
          <h5 className={Style.Banner2h5}>About us</h5>
          <h1 className={Style.Banner2h1}>Serving the world around us</h1>
        </div>
      </Container>
    </div>
  );
};
