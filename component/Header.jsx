import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav, Image, Button } from "react-bootstrap";
import Style from "../styles/Header.module.css";

export const Header = () => {
  // const [toggleMenu, setToggleMenu] = useState(false);
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const changeWidth = () => {
  //     setScreenWidth(window.innerWidth);
  //   };
  //   window.addEventListener("resize", changeWidth);
  //   return () => {
  //     window.removeEventListener("reset", changeWidth);
  //   };
  // }, []);

  // const toggleNav = () => {
  //   setToggleMenu(!toggleMenu);
  // };
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
              <Nav.Link href="#home" className={Style.nav_text}>
                Home
              </Nav.Link>
              <Nav.Link href="" className={Style.nav_text}>
                About us
              </Nav.Link>
              <Nav.Link href="#home" className={Style.nav_text}>
                Sermon
              </Nav.Link>
              <Nav.Link href="#home" className={Style.nav_text}>
                Blog
              </Nav.Link>
            </Nav>
            <Button className={Style.nav_btn}>Contact us</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <nav className={Style.secound_nav}>
        {(toggleMenu || screenWidth > 992) && (
          <ul className={Style.secound_list}>
            <li className={Style.secound_item}>Home</li>
            <li className={Style.secound_item}>Services</li>
            <li className={Style.secound_item}>Contact</li>
          </ul>
        )}
        <button className={Style.secound_btn} onClick={toggleNav}>
          BTN
        </button>
      </nav> */}
    </div>
  );
};
