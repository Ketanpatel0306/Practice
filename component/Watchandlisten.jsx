import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Style from "../styles/watchandlisten.module.css";
import jsonwatch from "../json/Watchandlisten.json";
export const Watchandlisten = () => {
  const [data] = useState(jsonwatch);
  return (
    <div className={Style.Watchandlisten}>
      <Container  className={Style.Watchandlisten_container}>
        <h5 className={Style.Watchandlisten_h5}>Watch and listen</h5>
        <h2 className={Style.Watchandlisten_h2}>
          THE benefits of joining our church
        </h2>
        <Row>
          {data.map((i) => {
            return (
              <Col
                xl={3}
                lg={3}
                md={6}
                sm={12}
                xs={12}
                className={Style.Watchandlisten_Col}
              >
                <div className={Style.Watchandlisten_Col_div}>
                  <Image
                    src={i.img}
                    className={Style.Watchandlisten_Col_div_img}
                  />
                  <div className={Style.Watchandlisten_Col_div_text_div}>
                    <h6 className={Style.Watchandlisten_Col_div_h6}>{i.h6}</h6>
                    <p className={Style.Watchandlisten_Col_div_p}>{i.p}</p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
