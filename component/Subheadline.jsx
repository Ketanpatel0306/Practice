import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import Style from "../styles/Subheadline.module.css";
import Masonry from "react-masonry-css";


export const Subheadline = () => {
  const breakpoints = { default: 3, 1199: 3, 767: 2, 500: 1 };
  return (
    <div className={Style.Subheadline}>
      <Container className={Style.Subheadline_container}>
        <div className="d-flex flex-column">
          {" "}
          <h5 className={Style.Subheadline_h5}>SUB-HEADLINE</h5>
          <h2 className={Style.Subheadline_h2}>love and compassion</h2>
          <h6 className={Style.Subheadline_h6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </h6>
          <Button className={Style.Subheadline_btn}>Read more</Button>
        </div>

        <Row>
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            <Col
              xl={4}
              lg={4}
              md={6}
              sm={12}
              xs={12}
              className={Style.Subheadline_col1}
            >
              <Image src="./images/1.svg" className={Style.Subheadline_img} />
            </Col>
            <Col
              xl={4}
              lg={4}
              md={6}
              sm={12}
              xs={12}
              className={Style.Subheadline_col2}
            >
              <Image src="./images/2.svg" className={Style.Subheadline_img1} />
            </Col>
            <Col
              xl={4}
              lg={4}
              md={6}
              sm={12}
              xs={12}
              className={Style.Subheadline_col3}
            >
              <Image src="./images/3.svg" className={Style.Subheadline_img} />
            </Col>
          </Masonry>
        </Row>
        <h5 className={Style.Subheadline_bottom_h5}>our mission & vision</h5>
        <h2 className={Style.Subheadline_bottom_h2}>celebrate WITH US</h2>
        <p className={Style.Subheadline_bottom_p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="d-flex justify-content-center">
          <p className={Style.Subheadline_bottom_p2}>Read More</p>
          <Image src="./images/Shape.svg" />
        </div>
      </Container>
    </div>
  );
};
