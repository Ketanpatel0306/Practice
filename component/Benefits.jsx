import React, { useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Style from "../styles/Benefits.module.css";
import Benefitsjson from "../json/Benefits.json";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export const Benefits = () => {
  const [data] = useState(Benefitsjson);
  return (
    <div className={Style.Benefits}>
      <Container>
        <AnimationOnScroll animateIn="animate__bounceIn">
          <h5 className={Style.BenefitsH5}>BENEFITS </h5>
          <h2 className={Style.BenefitsH2}>
            THE benefits of
            <br /> joining our church
          </h2>
        </AnimationOnScroll>
        <Row>
          {data.map((i, k) => {
            {
              if (k % 2 == 0) {
                return (
                  <div key={k + "Benefitsif"} className={Style.Benefitskey}>
                    <Col
                      xl={6}
                      lg={6}
                      md={6}
                      sm={12}
                      xs={12}
                      className={Style.BenefitsCol}
                    >
                      <AnimationOnScroll animateIn="animate__bounceInLeft">
                        <div className={Style.BenefitsFirstdiv1}>
                          <h4 className={Style.BenefitsFirstdivH4}>{i.h4}</h4>
                          <p className={Style.BenefitsFirstdivP}>{i.p}</p>
                        </div>
                      </AnimationOnScroll>
                    </Col>
                    <Col
                      xl={6}
                      lg={6}
                      md={6}
                      sm={12}
                      xs={12}
                      className={Style.BenefitsCol2}
                    >
                      <AnimationOnScroll animateIn="animate__bounceInRight">
                        <Image src={i.img} className="w-100 h-100 " />
                      </AnimationOnScroll>
                    </Col>
                  </div>
                );
              } else if (k % 2 == 1) {
                return (
                  <div
                    className={Style.BenefitsSecoundConditiondiv}
                    key={k + "Benefits"}
                  >
                    <Col
                      xl={6}
                      lg={6}
                      md={6}
                      sm={12}
                      xs={12}
                      className={Style.BenefitsCol2}
                    >
                      <AnimationOnScroll animateIn="animate__bounceInLeft">
                        <Image src={i.img} className="w-100 h-100" />
                      </AnimationOnScroll>
                    </Col>
                    <Col
                      xl={6}
                      lg={6}
                      md={6}
                      sm={12}
                      xs={12}
                      className={Style.BenefitsCol}
                    >
                      <AnimationOnScroll animateIn="animate__bounceInRight">
                        <div className={Style.BenefitsFirstdiv}>
                          <h4 className={Style.BenefitsFirstdivH4}>{i.h4}</h4>
                          <p className={Style.BenefitsFirstdivP}>{i.p}</p>
                        </div>
                      </AnimationOnScroll>
                    </Col>
                  </div>
                );
              }
            }
          })}
        </Row>
      </Container>
    </div>
  );
};
