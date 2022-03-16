import React, { useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Style from "../styles/Subheading.module.css";
import jsondata from "../json/Subheading.json";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export const Subheading = () => {
  const [data] = useState(jsondata);
  return (
    <div className={Style.Subheading}>
      <AnimationOnScroll animateIn="animate__bounceInLeft">
        <Container className={Style.Subheading_container}>
          <Row className={Style.Subheading_row}>
            <h5 className={Style.Subheading_h5}>sub-headline</h5>
            <h2 className={Style.Subheading_h2}>a church that's relevant</h2>
            {data.map((i, k) => {
              return (
                <Col
                  xl={4}
                  lg={4}
                  md={6}
                  sm={12}
                  xs={12}
                  key={k + "Subheding"}
                  className={Style.Subheading_col}
                >
                  <AnimationOnScroll animateIn="animate__bounceInRight">
                    <Image Src={i.img} />
                    <h2 className={Style.Subheading_h2_2}>{i.h2}</h2>
                    <p className={Style.Subheading_p}>{i.p}</p>
                  </AnimationOnScroll>
                </Col>
              );
            })}
          </Row>
        </Container>
      </AnimationOnScroll>
    </div>
  );
};
