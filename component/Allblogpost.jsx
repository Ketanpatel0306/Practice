import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from "../styles/Allblogpost.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import Allblogpostjson from "../json/Allblogpost.json";

export const Allblogpost = () => {
  const [data] = useState(Allblogpostjson);
  return (
    <div className={Style.Allblogpost}>
      <Container>
        <Row className={Style.AllblogpostRow}>
          <h1 className={Style.Allblogposth1}>ALL BLOG POSTS</h1>
          {data.map((i, k) => {
            return (
              <Col
                xl={3}
                lg={3}
                md={6}
                sm={12}
                xs={12}
                key={k + "Allblogpost"}
                className={Style.Upcomingsermons_container_col1}
              >
                <AnimationOnScroll animateIn="animate__slideInLeft">
                  <div className={Style.Viewalleventsmaindiv}>
                    <div
                      className={Style.Upcomingsermons_container_first_col_div}
                    >
                      <div className="">
                        <h6
                          className={
                            Style.Upcomingsermons_container_first_col_h6
                          }
                        >
                          {i.h6}
                        </h6>
                        <h4
                          className={
                            Style.Upcomingsermons_container_first_col_h4
                          }
                        >
                          {i.h4}
                        </h4>
                      </div>
                    </div>

                    <p className={Style.Upcomingsermons_container_first_col_p}>
                      {i.p}
                    </p>
                    <div
                      className={
                        Style.Upcomingsermons_container_first_col_secound_div
                      }
                    >
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
                        <h8
                          className={
                            Style.Upcomingsermons_container_first_col_third_div_text_h7
                          }
                        >
                          {i.h8}
                        </h8>
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
