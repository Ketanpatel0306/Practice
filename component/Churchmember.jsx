import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Style from "../styles/Churchmember.module.css";
import Churchmemberjson from "../json/Churchmember.json";

export const Churchmember = () => {
  const [data] = useState(Churchmemberjson);
  return (
    <div className={Style.Churchmember}>
      <Container>
        <Row className={Style.ChurchmemberRow}>
          <h5 className={Style.ChurchmemberH5}>church members</h5>
          <h1 className={Style.ChurchmemberH1}> meet our Inspirational team</h1>
          {data.map((i) => {
            return (
              <Col xl={3} lg={3} md={6} sm={12} xs={12}>
                <div className={Style.ChurchmemberFirstDiv}>
                  <Image src={i.img} className={Style.ChurchmemberImg} />
                  <div className= {Style.ChurchmemberSecoundDiv}>
                    <h2 className={Style.ChurchmemberH}>{i.h2}</h2>
                    <div className= {Style.ChurchmemberThirdDiv}>
                      <h6 className={Style.ChurchmemberH6}>{i.h6}</h6>
                      <div className={Style.ChurchmemberFourdiv}>
                        <Image
                          src={i.img1}
                          className={Style.ChurchmemberImg1}
                        />
                        <Image
                          src={i.img2}
                          className={Style.ChurchmemberImg1}
                        />
                        <Image
                          src={i.img3}
                          className={Style.ChurchmemberImg1}
                        />
                      </div>
                    </div>
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
