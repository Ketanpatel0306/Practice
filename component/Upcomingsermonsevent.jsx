import React from "react";
import { Col, Container, Row, Image, Form, Button } from "react-bootstrap";
import Style from "../styles/Upcomingsermonsevent.module.css";

export const Upcomingsermonsevent = () => {
  return (
    <div className={Style.Upcomingsermonsevent}>
      <Container>
        <Row className={Style.UpcomingsermonseventRow}>
          <Col xl={7} lg={7} md={7} sm={12} xs={12}>
            <Image src="./Images/Sermons.svg" className="w-100 mt-4" />
            <h6 className={Style.Banner3H6}>Upcoming Event</h6>
            <h3 className={Style.Banner3H3}>HOW TO TRULY TRUST SOMEONE</h3>
            <p className={Style.Banner3P}>
              Aenean vel elit scelerisque mauris. Imperdiet sed euismod nisi
              porta lorem mollis aliquam. Quis vel eros donec ac odio tempor
              orci dapibus ultrices. Elementum eu facilisis sed odio morbi. Nam
              at lectus urna duis convallis convallis tellus id. Feugiat pretium
              nibh ipsum consequat nisl vel. Elementum pulvinar etiam non quam
              lacus. Sit amet porttitor eget.
            </p>
            <h4 className={Style.Banner3H4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
              faucibus in ornare quam viverra orci sagittis eu volutpat.
            </h4>
            <p className={Style.Banner3P}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation. Ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Non tellus orci ac auctor augue mauris augue neque
              gravida.
            </p>
          </Col>
          <Col
            xl={5}
            lg={5}
            md={5}
            sm={12}
            xs={12}
            className={Style.UpcomingsermonseventSecoundCol}
          >
            <div className={Style.UpcomingsermonseventSecoundColDiv}>
              <h2 className={Style.UpcomingsermonseventSecoundColDivH2}>
                rEGISTER nOW
              </h2>
              <div className={Style.UpcomingsermonseventSecoundColImgDiv}>
                <div className="d-flex justify-content-around">
                  <Image
                    src="./Images/Icon (4).svg"
                    className="align-self-start"
                  />
                  <h7 className={Style.UpcomingsermonseventSecoundColImgDivH7}>
                    No 233 Main St. New York,
                    <br /> United States
                  </h7>
                </div>
                <div
                  className={Style.UpcomingsermonseventSecoundColImgDivH7Div}
                >
                  <Image
                    src="./Images/Clock Icon.svg"
                    className="align-self-start"
                  />
                  <h7 className={Style.UpcomingsermonseventSecoundColImgDivH7}>
                    13 May, 2018
                  </h7>
                </div>
              </div>
              <Form>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="email"
                  className={Style.UpcomingsermonseventSecoundColDivFromInput}
                />
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  className={Style.UpcomingsermonseventSecoundColDivFromInput}
                />
              </Form>
              <Button className={Style.UpcomingsermonseventSecoundColDivBtn}>
                Register now
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
