/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Button,
} from "reactstrap";
import {  useSelector } from 'react-redux';

function ExamplesNavbar() {



  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const islogin = useSelector(state => state.authReducer.isLoggedIn);
  const user = useSelector(state => state.authReducer.userProfile);


  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/landing-page"
            // target="_blank"
            tag={Link}
          >
            RINGEN CAR WORKSHOP
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink to="/servicestable-page" tag={Link}>
                <i className="nc-icon nc-layout-11" /> Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contactUs-page" tag={Link}>
                <i className="nc-icon nc-book-bookmark" /> Contact Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                // data-placement="bottom"
                // to="/register-page" tag={Link}
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fa fa-twitter" />
                <p className="d-lg-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.google.com"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.google.com"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <Link to="/servicestable-page">
                <Button
                  className="btn-round"
                  color="danger"
                  // href="/servicestable-page"
                  // target="_blank"
                >
                  <i className="nc-icon nc-spaceship"></i> BOOK AN HOUR
                </Button>
              </Link>
            </NavItem>
            {islogin ? (
              <NavItem>
                <Link to="/profile-page">
                  <Button
                    className="btn-round"
                    color="danger"
                    // href="/profile-page"
                  >
                    <i className="nc-icon nc-single-02"></i> {user?user.name:null}
                  </Button>
                </Link>
              </NavItem>
            ) : (
              <NavItem>
                <Link to="/signIn-page">
                  <Button
                    className="btn-round"
                    color="danger"
                    // href="/signIn-page"
                  >
                    <i className="nc-icon nc-single-02"></i> Sign In
                  </Button>
                </Link>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;
