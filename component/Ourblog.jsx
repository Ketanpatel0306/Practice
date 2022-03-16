import React from "react";
import { Container, Row, Image, Col, Button } from "react-bootstrap";
import Style from "../styles/Ourblog.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export const Ourblog = () => {
  return (
    <div className={Style.Ourblog}>
      <AnimationOnScroll animateIn="animate__bounceIn">
        <Container>
          <h5 className={Style.Ourblogh5}>OUR BLOG</h5>
          <h2 className={Style.Ourblogh2}>most recent post</h2>
          <div className={Style.OurblogMainDiv}>
            <Row className={Style.OurblogRow}>
              <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                <div className={Style.OurblogColFirstDiv}>
                  <Image src="./Images/Blog2.png" className="w-100 h-100" />
                </div>
              </Col>
              <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                <div className={Style.OurblogColSecoundDiv}>
                  <div className={Style.OurblogColSecoundDivTextDiv}>
                    <h5 className={Style.OurblogColSecoundDivH5}>
                      Tuesday 13 May, 2022
                    </h5>
                    <h5 className={Style.OurblogColSecoundDivH51}>
                      By John Hunau Deo
                    </h5>
                  </div>
                  <h4 className={Style.OurblogColSecoundDivH4}>
                    Church was doing what he often did when dropped An oracle{" "}
                  </h4>
                  <h2 className={Style.OurblogColSecoundDivH7}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor.
                  </h2>
                  <button className={Style.OurblogColSecoundDivBtn}>
                    Read More
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </AnimationOnScroll>
    </div>
  );
};
