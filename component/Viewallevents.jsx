import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Style from "../styles/Viewallevents.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import Viewalleventsjson from "../json/Viewallevents.json";

export const Viewallevents = () => {
  const [data] = useState(Viewalleventsjson);
  return (
    <div className={Style.Viewallevents}>
      <Container>
        <Row className={Style.ViewalleventsRow}>
          <h1 className={Style.Viewalleventsh1}>View All Events</h1>
          {data.map((i, k) => {
            return (
              <Col
                xl={3}
                lg={3}
                md={6}
                sm={12}
                xs={12}
                key={k + "Viewallevents"}
                className={Style.Upcomingsermons_container_col1}
              >
                <AnimationOnScroll animateIn="animate__slideInLeft">
                  <div className={Style.Viewalleventsmaindiv}>
                    <div
                      className={Style.Upcomingsermons_container_first_col_div}
                    >
                      <h5
                        className={Style.Upcomingsermons_container_first_col_h5}
                      >
                        {i.h5}
                      </h5>
                      <div className="d-flex flex-column">
                        <h6
                          className={
                            Style.Upcomingsermons_container_first_col_h6
                          }
                        >
                          {i.h6}
                        </h6>
                        <h4
                          className={
                            Style.Upcomingsermons_container_first_col_h6
                          }
                        >
                          {i.h4}
                        </h4>
                      </div>
                    </div>
                    <h3
                      className={Style.Upcomingsermons_container_first_col_h3}
                    >
                      {i.h3}
                    </h3>
                    <p className={Style.Upcomingsermons_container_first_col_p}>
                      {i.p}
                    </p>
                    <div
                      className={
                        Style.Upcomingsermons_container_first_col_secound_div
                      }
                    >
                      <Image src={i.img} />
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
                          {i.h7}
                        </h7>
                      </div>
                    </div>
                    <div
                      className={
                        Style.Upcomingsermons_container_first_col_third_div
                      }
                    >
                      <Image src={i.img1} />
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
                          {i.h72}
                        </h7>
                      </div>
                    </div>
                  </div>
                </AnimationOnScroll>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
