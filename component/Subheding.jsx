import React, { useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Style from "../styles/Subheading.module.css";
import jsondata from "../json/Subheading.json";

export const Subheading = () => {
  const [data] = useState(jsondata);
  return (
    <div className={Style.Subheading}>
      <Container className={Style.Subheading_container}>
        <Row className={Style.Subheading_row}>
          <h5 className={Style.Subheading_h5}>sub-headline</h5>
          <h2 className={Style.Subheading_h2}>a church that's relevant</h2>
          {data.map((i) => {
            return (
              <Col
                xl={4}
                lg={4}
                md={6}
                sm={12}
                xs={12}
                className={Style.Subheading_col}
              >
                <Image Src={i.img} />
                <h2 className={Style.Subheading_h2_2}>{i.h2}</h2>
                <p className={Style.Subheading_p}>{i.p}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
