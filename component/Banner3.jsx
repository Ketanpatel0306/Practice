import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Style from "../styles/Banner3.module.css";

export const Banner3 = () => {
  return (
    <div className={Style.Banner3}>
      <Container>
        <h6 className={Style.Banner3H6}>Relationship</h6>
        <h1 className={Style.Banner3H1}>HOW TO SHOW COMPASSION</h1>
        <h5 className={Style.Banner3H5}>13 May, 2018 By Mathew Johnson</h5>
        <Image src="./Images/blogpost.svg" className={Style.Banner3Img} />
        <Row>
          <Col xl={2} lg={2} md={2}></Col>
          <Col xl={8} lg={8} md={8} sm={12} xs={12}>
            <h2 className={Style.Banner3H2}>LOREM IPSUM DOLOR SIT AMET</h2>
            <p className={Style.Banner3P}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation. Ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Non tellus orci ac auctor augue mauris augue neque
              gravida. <br /> <br />
              Aenean vel elit scelerisque mauris. Imperdiet sed euismod nisi
              porta lorem mollis aliquam. Quis vel eros donec ac odio tempor
              orci dapibus ultrices. Elementum eu facilisis sed odio morbi. Nam
              at lectus urna duis convallis convallis tellus id. Feugiat pretium
              nibh ipsum consequat nisl vel. Elementum pulvinar etiam non quam
              lacus. Sit amet porttitor eget.
            </p>
            <Image src="./Images/Blogpostimg2.svg" className="w-100 mt-4" />
            <h3 className={Style.Banner3H3}>LOREM IPSUM DOLOR SIT AMET</h3>
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
            <h3 className={Style.Banner3H3}>
              LOREM IPSUM DOLOR SIT AMET CONSECTETUR
            </h3>
            <p className={Style.Banner3P}>
              We both celebrate and challenge the culture around us as we orient
              our lives around Jesus. We want to serve the world around us. It’s
              why we support mission work all across the globe Regardless of
              what your next step in faith is, we want to help you take that
              next step Our church is10% of our annual income to
            </p>
            <ul className={Style.Banner3Ul}>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
              <li>Purus sit amet luctus venenatis lectus magna</li>
              <li>Aenean vel elit scelerisque mauris. Imperdiet sed euismod</li>
            </ul>
            <p className={Style.Banner3P}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation. Ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Non tellus orci ac auctor augue mauris augue neque
              gravida.
              <br /> <br />
              Saepe magni aut maxime vel voluptatem. Ab eveniet neque placeat
              qui porro ab minus voluptas. Dicta praesentium neque vero mollitia
              aperiam sed enim. Lacinia quis vel eros donec ac odio.
            </p>
          </Col>
          <Col xl={2} lg={2} md={2}></Col>
        </Row>
      </Container>
    </div>
  );
};
