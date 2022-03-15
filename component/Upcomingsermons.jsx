import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Style from "../styles/Upcomingsermons.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
export const Upcomingsermons = () => {
  return (
    <div className={Style.Upcomingsermons}>
     <AnimationOnScroll animateIn="animate__bounceIn">
      <h5 className={Style.Upcomingsermons_h5}>Upcoming SERMONS</h5>
      <h2 className={Style.Upcomingsermons_h2}>
        join us and become part <br /> of something great
      </h2>
      </AnimationOnScroll>
      <Container className={Style.Upcomingsermons_container}>
        <Row className={Style.Upcomingsermons_container_row}>
          <Col
            xl={{ span: 5, order: 1 }}
            lg={{ span: 5, order: 1 }}
            md={{ span: 12, order: 1 }}
            sm={{ span: 12, order: 1 }}
            xs={{ span: 12, order: 1 }}
            className={Style.Upcomingsermons_container_col1}
          >
            <AnimationOnScroll animateIn="animate__slideInLeft">
              <div className={Style.Upcomingsermons_container_first_col_div}>
                <h5 className={Style.Upcomingsermons_container_first_col_h5}>
                  Upcoming Event
                </h5>
                <div className="d-flex flex-column">
                  <h6 className={Style.Upcomingsermons_container_first_col_h6}>
                    20
                  </h6>
                  <h4 className={Style.Upcomingsermons_container_first_col_h6}>
                    JULY
                  </h4>
                </div>
              </div>
              <h3 className={Style.Upcomingsermons_container_first_col_h3}>
                WATCH AND LISTEN <br />
                TO OUR SERMONS
              </h3>
              <p className={Style.Upcomingsermons_container_first_col_p}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <div
                className={
                  Style.Upcomingsermons_container_first_col_secound_div
                }
              >
                <Image src="./images/icon (4).svg" />
                <div
                  className={
                    Style.Upcomingsermons_container_first_col_secound_div_text
                  }
                >
                  <h7
                    className={
                      Style.Upcomingsermons_container_first_col_secound_div_text_h7
                    }
                  >
                    Friday 23:39 IST
                    <br /> Saturday 11:20 ISD
                  </h7>
                </div>
              </div>
              <div
                className={Style.Upcomingsermons_container_first_col_third_div}
              >
                <Image src="./images/Clock icon.svg" />
                <div
                  className={
                    Style.Upcomingsermons_container_first_col_third_div_text
                  }
                >
                  <h7
                    className={
                      Style.Upcomingsermons_container_first_col_third_div_text_h7
                    }
                  >
                    No 233 Main St. New York,
                    <br /> United States
                  </h7>
                </div>
              </div>
              <div className="d-flex">
                <Button className={Style.Upcomingsermons_container_col1_btn}>
                  Register
                </Button>
              </div>
            </AnimationOnScroll>
          </Col>
          <Col
            xl={{ span: 7, order: 1 }}
            lg={{ span: 7, order: 1 }}
            md={{ span: 12, order: 2 }}
            sm={{ span: 12, order: 2 }}
            xs={{ span: 12, order: 2 }}
            className={Style.Upcomingsermons_container_col}
          >
            <AnimationOnScroll animateIn="animate__slideInRight">
              <div className={Style.Upcomingsermons_container_col2}>
                <Image
                  src="./images/Image.png"
                  className={Style.Upcomingsermons_container_col2_img1}
                />
              </div>
            </AnimationOnScroll>
          </Col>
        </Row>
        <div className="d-flex justify-content-end  pb-5">
          <h3 className={Style.Upcomingsermons_container_last_btn}>
            View all Sermons
          </h3>
          <Image src="./images/Arrow.svg" />
        </div>
      </Container>
    </div>
  );
};
