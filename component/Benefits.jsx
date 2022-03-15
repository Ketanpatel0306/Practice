import React, { useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Style from "../styles/Benefits.module.css";
import Benefitsjson from "../json/Benefits.json";

export const Benefits = () => {
  const [data] = useState(Benefitsjson);
  return (
    <div className={Style.Benefits}>
      <Container>
        <h5 className={Style.BenefitsH5}>BENEFITS </h5>
        <h2 className={Style.BenefitsH2}>THE benefits of joining our church</h2>
        <Row>
          {data.map((i, k) => {
            {/* { */}
              {/* if (k % 2 == 0) { */}
                return (
                  <>
                    <Col
                      xl={6}
                      lg={6}
                      md={6}
                      sm={12}
                      xs={12}
                      className={Style.BenefitsCol}
                    >
                      <div className={Style.BenefitsFirstdiv}>
                        <h4 className={Style.BenefitsFirstdivH4}>{i.h4}</h4>
                        <p className={Style.BenefitsFirstdivP}>{i.p}</p>
                      </div>
                    </Col>
                    <Col
                      xl={6}
                      lg={6}
                      md={6}
                      sm={12}
                      xs={12}
                      className={Style.BenefitsCol2}
                    >
                      <Image src={i.img} className="w-100 h-100" />
                    </Col>
                  </>
                );
              {/* } */}
            {/* } */}
          })}
        </Row>
      </Container>
    </div>
  );
};
