import React from "react";
import Style from "../styles/Welcome.module.css";
import { Col, Container, Row, Image } from "react-bootstrap";
// import Masonry from "react-masonry-css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export const Welcome = () => {
  // const breakpoints = { default: 3, 1199: 3, 767: 2, 500: 1 };
  return (
    <div className={Style.Welcome}>
      <Container className={Style.WelcomeContainer}>
        <AnimationOnScroll animateIn="animate__bounceIn">
          <div className="d-flex flex-column">
            <h5 className={Style.Welcomeh5}>Welcome to our CHURCH</h5>
            <h2 className={Style.Welcomeh2}>love and compassion</h2>

            <h6 className={Style.Welcomeh6}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. <br /> Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </h6>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__bounceIn">
          <div className={Style.WelcomeMasonry}>
            <figure className={Style.Welcomefigure}>
              <Image src="./images/1.svg" className={Style.WelcomeImg1} />
            </figure>

            <figure className={Style.Welcomefigure}>
              <Image src="./images/2.svg" className={Style.WelcomeImg2} />
            </figure>

            <figure className={Style.Welcomefigure}>
              <Image src="./images/3.svg" className={Style.WelcomeImg3} />
            </figure>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__bounceInLeft">
          <Row className={Style.Welcomerow}>
            <Col xl={2} lg={2} md={2}></Col>
            <Col
              xl={4}
              lg={4}
              md={4}
              sm={12}
              xs={12}
              className={Style.Welcomecol}
            >
              <h6 className={Style.Welcome2H6}>OUR MISSIOn & Vision</h6>
              <h4 className={Style.Welcome2H4}>
                STRIVING FOR A BETTER TOMORROW
              </h4>
              <p className={Style.Welcomep}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum.
              </p>
            </Col>

            <Col
              xl={4}
              lg={4}
              md={4}
              sm={12}
              xs={12}
              className={Style.Welcomecol}
            >
              <h6 className={Style.Welcome2H6}>WHAT WE DO</h6>
              <h4 className={Style.Welcome2H4}>
                BRINgING PEACE AND JOY TO THE WORLD
              </h4>
              <p className={Style.Welcomep}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum.
              </p>
            </Col>
            <Col xl={2} lg={2} md={2}></Col>
          </Row>
        </AnimationOnScroll>
      </Container>
    </div>
  );
};
