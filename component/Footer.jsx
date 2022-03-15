import React from "react";
import { Col, Container, Row, Image, Form, Button } from "react-bootstrap";
import Style from "../styles/Footer.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export const Footer = () => {
  return (
    <div className={Style.footer_main_div}>
      <Container>
        <Row className={Style.footer_main_div_row}>
          <Col xl={4} lg={4} md={4} sm={12} xs={12}>
            <AnimationOnScroll animateIn="animate__bounceIn">
              <div className={Style.footer_first_div}>
                <Image
                  src="./images/Vector.svg"
                  className={Style.footer_first_div_img}
                />
                <h2 className={Style.footer_first_div_h2}>
                  © Copyright Finsweet 2022
                </h2>
                <h5 className={Style.footer_first_div_h5}>(480) 555-0103</h5>
                <h5 className={Style.footer_first_div_h5}>
                  4517 Washington Ave.{" "}
                </h5>
                <h5 className={Style.footer_first_div_h5}>
                  finsweet@example.com
                </h5>
              </div>
            </AnimationOnScroll>
          </Col>
          <Col xl={2} lg={2} md={2} sm={12} xs={12}>
            <AnimationOnScroll animateIn="animate__bounceIn">
              <div className={Style.footer_secound_div}>
                <h1 className={Style.footer_secound_div_h1}>Quicklinks</h1>
                <h5 className={Style.footer_secound_div_h5}>About us</h5>
                <h5 className={Style.footer_secound_div_h5}>Sermons</h5>
                <h5 className={Style.footer_secound_div_h5}>Events</h5>
                <h5 className={Style.footer_secound_div_h5}>Blog</h5>
              </div>
            </AnimationOnScroll>
          </Col>
          <Col xl={2} lg={2} md={2} sm={12} xs={12}>
            <AnimationOnScroll animateIn="animate__bounceIn">
              <div className={Style.footer_third_div}>
                <h3 className={Style.footer_third_h3}>Connect </h3>
                <Image
                  src="./images/Negative 1.svg"
                  className={Style.footer_third_img}
                />
                <Image
                  src="./images/Negative.svg"
                  className={Style.footer_third_img}
                />
                <Image
                  src="./images/Group.svg"
                  className={Style.footer_third_img}
                />
              </div>
            </AnimationOnScroll>
          </Col>
          <Col xl={4} lg={4} md={4} sm={12} xs={12}>
            <AnimationOnScroll animateIn="animate__bounceIn">
              <div className={Style.footer_four_div}>
                <h1 className={Style.footer_four_h3}>
                  Subscribe to get Latest Updates and News
                </h1>
                <Form className={Style.footer_four_from}>
                  <Form.Control
                    type="email"
                    placeholder="Enter Your email"
                    className={Style.footer_four_from_control}
                  />
                  <Button type="submit" className={Style.footer_four_btn}>
                    Subscribe
                  </Button>
                </Form>
              </div>
            </AnimationOnScroll>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
