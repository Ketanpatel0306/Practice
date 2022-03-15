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
      <AnimationOnScroll animateIn="animate__bounceInLeft">
        <Container className={Style.WelcomeContainer}>
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

          {/* <Row> */}
            {/* <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          > */}
            {/* <Col
              xl={4}
              lg={4}
              md={6}
              sm={12}
              xs={12}
              className={Style.WelcomeCol}
            > */}
              <div className={Style.WelcomeMasonry}>
                <figure className={Style.Welcomefigure}>
                  <Image src="./images/1.svg" className={Style.WelcomeImg} />
                </figure>

                {/* </Col>
          <Col
            xl={4}
            lg={4}
            md={6}
            sm={12}
            xs={12}
            className={Style.WelcomeCol}
          > */}
                <figure className={Style.Welcomefigure}>
                  <Image src="./images/2.svg" className={Style.WelcomeImg} />
                </figure>
                {/* </Col>
          <Col
            xl={4}
            lg={4}
            md={6}
            sm={12}
            xs={12}
            className={Style.WelcomeCol}
          > */}
                <figure className={Style.Welcomefigure}>
                  <Image src="./images/3.svg" className={Style.WelcomeImg} />
                </figure>
              </div>
            {/* </Col> */}
            {/* </Masonry> */}
          {/* </Row> */}
        </Container>
      </AnimationOnScroll>
    </div>
  );
};
