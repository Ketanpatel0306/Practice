import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import Style from "../styles/Background.module.css";

export const Background = () => {
  return (
    <div className={Style.Background}>
      <Image src="./images/Background.svg" className="w-100" />
      <Container className={Style.Background_container}>
        <div className={Style.Background_firstmain_div}>
          <div className={Style.Background_first_div}>
            <h2 className={Style.Background_first_div_h2}>
              We want to serve the world around us
            </h2>
            <p className={Style.Background_first_div_p}>
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit, sed do.
            </p>
            <Button className={Style.Background_first_div_btn}>Visit</Button>
          </div>
          <Image src="./images/Quote icon.svg" className="w-25" />
        </div>
      </Container>
    </div>
  );
};
