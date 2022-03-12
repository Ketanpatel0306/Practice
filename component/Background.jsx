import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import Style from "../styles/Background.module.css";

export const Background = () => {
  return (
    <div className={Style.Background}>
      <Image src="./images/Background.svg" className="w-100" />
      <Container className={Style.Backgroundcontainer}>
        <div className={Style.Backgroundfirstmaindiv}>
          <div className={Style.Backgroundfirstdiv}>
            <h2 className={Style.Backgroundfirstdivh2}>
              We want to serve the world around us
            </h2>
            <p className={Style.Backgroundfirstdivp}>
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit, sed do.
            </p>
            <Button className={Style.Backgroundfirstdivbtn}>Visit</Button>
          </div>
          <Image src="./images/Quote icon.svg" className="w-25" />
        </div>
      </Container>
    </div>
  );
};
