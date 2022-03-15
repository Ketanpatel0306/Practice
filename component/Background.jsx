import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import Style from "../styles/Background.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export const Background = () => {
  return (
    <div className={Style.Background}>
      <AnimationOnScroll animateIn="animate__bounceIn">
        <Image src="./images/Background.svg" className={Style.BackgroundfirstImg} />
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
      </AnimationOnScroll>
    </div>
  );
};
