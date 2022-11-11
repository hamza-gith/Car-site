import React from "react";
import { Row, Col } from "reactstrap";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import { Container, Button } from "reactstrap";
import ProfilePageHeader from "components/Headers/ProfilePageHeader";
import { Link } from "react-router-dom";

function ServiceTable() {
  return (
    <>
      <ExamplesNavbar />
      <ProfilePageHeader />
      <Container>
        <div
          style={{
            backgroundImage:
              "url(" + require("assets/img/fabio-mangione.jpg").default + ")",
          }}
          // className="page-header page-header-xs"
          // data-parallax={true}
          // // // ref={pageheader}
        >
          <div className="filter" />
        </div>
        <div style={{ marginTop: "2em" }}>
          <h2 style={{ textAlign: "center" }}>Services</h2>
          <div className="section text-center">
            <Container>
              <Row>
                <Col md="3">
                  <div
                    style={{ alignContent: "center", justifyContent: "center" }}
                    className="info"
                  >
                    <div className="icon icon-info">
                      <img
                        style={{
                          alignContent: "center",
                          justifyContent: "center",
                        }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEvkxspZEKAli0S2gfUPscFxtps2C7QTrSvg&usqp=CAU"
                        alt=""
                      />
                    </div>
                    <div className="description">
                      <h4
                        style={{ textAlign: "center", fontWeight: "400" }}
                        className="info-title"
                      >
                        Oil Levels
                      </h4>
                      <br></br>
                      <p
                        style={{ textAlign: "center" }}
                        className="description"
                      >
                        Every month,it’s a good idea to get under the hood of
                        your car and inspect both the oil while the engine is
                        cool.You can easily book an appointment in our calendar.
                      </p>
                      <div>
                        <Link to="/calender-page">
                          <Button
                            className="btn-round"
                            color="danger"
                            // href="/calender-page"
                            // target="_blank"
                          >
                            <i className="nc-icon nc-spaceship"></i> BOOK Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div className="info">
                    <div className="icon icon-info">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxMQ2DMpCHvs9nz2MHE5IYhN4YP2HJp6jkwQ&usqp=CAU"
                        alt=""
                      />
                    </div>
                    <div className="description">
                      <h4
                        style={{ textAlign: "center", fontWeight: "400" }}
                        className="info-title"
                      >
                        Brakes and Clutch
                      </h4>
                      <br></br>
                      <p style={{ textAlign: "center" }}>
                        Brakes, clutch, gears and engine, and some of the most
                        common main groups in the mechanical category.You can
                        easily book an appointment in our calendar.
                      </p>
                      <div>
                        <Link to="/calender-page">
                          <Button
                            className="btn-round"
                            color="danger"
                            // href="/calender-page"
                            // target="_blank"
                          >
                            <i className="nc-icon nc-spaceship"></i> BOOK Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div className="info">
                    <div className="icon icon-info">
                      <img
                        style={{ borderRadius: "50%" }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRasM34pBYcrfVy6_7c-JCovIM6cvyfj4VacA&usqp=CAU"
                        alt=""
                      />
                    </div>
                    <div className="description">
                      <h4
                        style={{ textAlign: "center", fontWeight: "400" }}
                        className="info-title"
                      >
                        Oil & Filter
                      </h4>
                      <br></br>
                      <p style={{ textAlign: "center" }}>
                        Keeping it clean is vital for good engine health. you
                        may need to change both the oil & oil filter as much as
                        every 3 months or 3000 miles
                      </p>
                      <div>
                        <Link to="/calender-page">
                          <Button
                            className="btn-round"
                            color="danger"
                            // href="/calender-page"
                            // target="_blank"
                          >
                            <i className="nc-icon nc-spaceship"></i> BOOK Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div className="info">
                    <div className="icon icon-info">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyS2RpNeGKSugA-T3y9yTRLMQ1cxxX6DtV9w&usqp=CAU"
                        alt=""
                      />
                    </div>
                    <div className="description">
                      <h4
                        style={{ textAlign: "center", fontWeight: "400" }}
                        className="info-title"
                      >
                        Maintenance
                      </h4>
                      <br></br>
                      <p style={{ textAlign: "center" }}>
                        Walk around your car and visually inspect both turn
                        signals and your parking lights.you engage the brakes to
                        be certain that your brake lights are functional.
                      </p>
                      <div>
                        <Link to="/calender-page">
                          <Button
                            className="btn-round"
                            color="danger"
                            // href="/calender-page"
                            // target="_blank"
                          >
                            <i className="nc-icon nc-spaceship"></i> BOOK Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <div className="info">
                    <div className="icon icon-info">
                      <img
                        style={{ borderRadius: "50%" }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRud-VGR__zdybZ9SJ2wtPcofoXO9pnU_okkA&usqp=CAU"
                        alt=""
                      />
                    </div>
                    <div className="description">
                      <h4
                        style={{ textAlign: "center", fontWeight: "400" }}
                        className="info-title"
                      >
                        Transmisson Fluid
                      </h4>
                      <br></br>
                      <p style={{ textAlign: "center" }}>
                        Much like the oil in your engine, transmission fluid is
                        a lubricant that helps keep all of the moving parts
                        inside of your transmission functioning properly
                      </p>
                      <div>
                        <Link to="/calender-page">
                          <Button
                            className="btn-round"
                            color="danger"
                            // href="/calender-page"
                            // target="_blank"
                          >
                            <i className="nc-icon nc-spaceship"></i> BOOK Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div className="info">
                    <div className="icon icon-info">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcIPU08_VYFxPYyGdBymJIpRcJQghIsMGEjg&usqp=CAU"
                        alt=""
                      />
                    </div>
                    <div className="description">
                      <h4
                        style={{ textAlign: "center", fontWeight: "400" }}
                        className="info-title"
                      >
                        Shocks & Struts
                      </h4>
                      <br></br>
                      <p style={{ textAlign: "center" }}>
                        The shocks and struts on your car function to control
                        the impact as your vehicle passes over bumps in the road
                        of your auto’s steering system.
                      </p>
                      <div>
                        <Link to="/calender-page">
                          <Button
                            className="btn-round"
                            color="danger"
                            // href="/calender-page"
                            // target="_blank"
                          >
                            <i className="nc-icon nc-spaceship"></i> BOOK Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div className="info">
                    <div className="icon icon-info">
                      <img
                        style={{ borderRadius: "50%" }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRerNYEZjhQVkAls2uD7ys2JozjuvPtd2AhyA&usqp=CAU"
                        alt=""
                      />
                    </div>
                    <div className="description">
                      <h4
                        style={{ textAlign: "center", fontWeight: "400" }}
                        className="info-title"
                      >
                        Tires Services
                      </h4>
                      <br></br>
                      <p style={{ textAlign: "center" }}>
                        We can both order and change tires for you, in addition
                        to performing wheel alignment, or minor services such as
                        repairing tires..
                      </p>
                      <div>
                        <Link to="/calender-page">
                          <Button
                            className="btn-round"
                            color="danger"
                            // href="/calender-page"
                            // target="_blank"
                          >
                            <i className="nc-icon nc-spaceship"></i> BOOK Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div className="info">
                    <div className="icon icon-info">
                      <img
                        style={{
                          alignContent: "center",
                          justifyContent: "center",
                        }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1LncpeDW_CpOWSBYZTEWagCMj619TD5BCmw&usqp=CAU"
                        alt=""
                      />
                    </div>
                    <div className="description">
                      <h4
                        style={{ textAlign: "center", fontWeight: "400" }}
                        className="info-title"
                      >
                        Car Glass Repairs
                      </h4>
                      <br></br>
                      <p style={{ textAlign: "center" }}>
                        We have certified glass fitters who can easily help you
                        change routes if you have cracks or rock damage.routes
                        if you have cracks or rock damage.
                      </p>
                      <div>
                        <Link to="/calender-page">
                          <Button
                            className="btn-round"
                            color="danger"
                            // href="/calender-page"
                            // target="_blank"
                          >
                            <i className="nc-icon nc-spaceship"></i> BOOK Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ServiceTable;
