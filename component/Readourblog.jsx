import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Style from "../styles/Readourblog.module.css";
import jsondata from "../json/Readingourblog.json";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
export const Readourblog = () => {
  const [data] = useState(jsondata);
  return (
    <div className={Style.Readourblog}>
      <Container>
        <Row className={Style.Readourblog_row}>
          <h6 className={Style.Readourblog_h6}>Read our Blog</h6>
          <h1 className={Style.Readourblog_h1}>SHARE, INSPIRE, INNOVATE</h1>
          {data.map((i, k) => {
            return (
              <Col
                xl={3}
                lg={3}
                md={6}
                sm={12}
                xs={12}
                key={k + "Readingblog"}
                className={Style.Readourblog_col}
              >
                <AnimationOnScroll animateIn="animate__bounceIn">
                  <div className={Style.Readourblog_col_first_div}>
                    <h6 className={Style.Readourblog_col_first_div_h6}>
                      {i.h6}
                    </h6>
                    <h3 className={Style.Readourblog_col_first_div_h3}>
                      {i.h3}
                    </h3>
                    <p className={Style.Readourblog_col_first_div_p}>{i.p}</p>
                    <div
                      className={Style.Readourblog_col_first_div_last_addres}
                    >
                      <h5
                        className={
                          Style.Readourblog_col_first_div_last_addres_h5_1
                        }
                      >
                        {i.h51}
                      </h5>
                      <h5
                        className={
                          Style.Readourblog_col_first_div_last_addres_h5_2
                        }
                      >
                        {i.h52}
                      </h5>
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
