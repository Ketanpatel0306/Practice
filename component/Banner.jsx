import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import Style from "../styles/Banner.module.css";
// 
export const Banner = () => {
  return (
    <>
      <div className={Style.Banner}>
        <Image
          src="./images/woman-in-orange-coat-with-black-and-brown-scarf-5418305.svg"
          className={Style.Banner_img}
        /> 
        <Container className={Style.Banner_container}>
         
            <div className={Style.Banner_first_div}>
            <AnimationOnScroll animateIn="animate__bounceIn">
              {/* <Row> */}
              {/* <Col xl={7} lg={7} md={7} sm={7} xs={7}> */}
              <h4 className={Style.Banner_h4}>Welcome to our CHURCH</h4>
              <h1 className={Style.Banner_h1}>
                Become a part of <br /> our community
              </h1>
              {/* <Button className={Style.nav_btn}>Contact us</Button> */}
              <Button className={Style.Banner_btn}>Learn more</Button>
              <div className="d-flex">
                <hr
                  className={Style.Banner_hr}
                  style={{ width: "20px", height: "5px", color: " #FFD2A4" }}
                />
                <h6 className={Style.Banner_h6}>
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit, sed do.
                </h6>
              </div>
              {/* </Col> */}
              {/* <Col xl={5} lg={5} md={5} sm={5} xs={5}></Col> */}
              {/* </Row> */}
              </AnimationOnScroll>
            </div>
         
        </Container>
      </div>
    </>
  );
};
