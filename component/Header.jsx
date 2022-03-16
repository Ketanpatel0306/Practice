import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav, Image, Button } from "react-bootstrap";
import Style from "../styles/Header.module.css";

export const Header = (props) => {
  const { onAboutChange } = props;

  return (
    <div className={Style.Header_main_div}>
      <Navbar expand="lg" className={Style.Headr_navbar}>
        <Container>
          <div className="d-flex">
            <Image src="./images/logo.svg" />
            <div class={Style.Header_main_div_vr} style={{ height: "50px" }}>
              <div class="vr"></div>
            </div>
          </div>
          <Navbar.Toggle
            id="toggle"
            aria-controls="basic-navbar-nav"
            className={Style.Toggler}
          />
          <Navbar.Collapse id="basic-navbar-nav" className={Style.Collapse}>
            <Nav className={Style.nav}>
              <Nav.Link href="/home" className={Style.nav_text}>
                Home
              </Nav.Link>

              <Nav.Link
                href="/aboutus"
                className={Style.nav_text}
                onClick={() => onAboutChange()}
              >
                About us
              </Nav.Link>

              <Nav.Link
                href="/sermon"
                className={Style.nav_text}
                onClick={() => onAboutChange()}
              >
                Sermon
              </Nav.Link>
              <Nav.Link href="/blog" className={Style.nav_text}>
                Blog
              </Nav.Link>
            </Nav>
            <Button className={Style.nav_btn}>Contact us</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
