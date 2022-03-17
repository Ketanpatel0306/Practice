import React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import Style from "../styles/Froms.module.css";

export const Froms = () => {
  return (
    <div className={Style.Froms}>
      <Container>
        <Row className={Style.FromsRow}>
          <Col xl={7} lg={7} md={7} sm={12} xs={12} className={Style.FromsCol}>
            <h3 className={Style.FromsH3}>Contact form:</h3>
            <div className={Style.FromsFirstColDiv}>
              <Form>
                <Form.Control
                  type="text"
                  placeholder="Your full Name"
                  className={Style.FromsFirstColDivInput}
                />
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  className={Style.FromsFirstColDivInput}
                />
                <Form.Control
                  type="text"
                  placeholder="Query Related"
                  className={Style.FromsFirstColDivInput}
                />
                <Form.Control
                  as="textarea"
                  placeholder="Message"
                  rows={3}
                  className={Style.FromsFirstColDivInput}
                />
                <div className="d-flex flex-column">
                  <Button className={Style.FromsFirstColDivBtn}>
                    Send message
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
          <Col xl={5} lg={5} md={5} sm={12} xs={12}>
            <div className={Style.FromsSecoundColDiv}>
              <h7 className={Style.FromsFirstColDivH7}>Address</h7>
              <h3 className={Style.FromsFirstColDivH3}>
                NH 234 Public Square San Francisco 65368
              </h3>
              <h7 className={Style.FromsFirstColDivH7}>Contact Details</h7>
              <h3 className={Style.FromsFirstColDivH3}>
                (480) 555-0103 <br />
                finsweet@example.com
              </h3>
              <h7 className={Style.FromsFirstColDivH7}>Find us here</h7>
              <div>
                <Image src="./Images/Negative 1.svg" className="mx-1" />
                <Image src="./Images/Negative.svg" className="mx-1" />
                <Image src="./Images/Group.svg" className="mx-1" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
