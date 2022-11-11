import React from "react";
import { Row, Col } from "reactstrap";
import { Container } from "reactstrap";

export default function Sectiondes() {
  return (
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
                  style={{ alignContent: "center", justifyContent: "center" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhMiLTQr7ET0pb5MBYyc9Ak98lQKZ9awdGtg&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="description">
                <h4
                  style={{ textAlign: "center", fontWeight: "400" }}
                  className="info-title"
                >
                  Great service{" "}
                </h4>
                <br></br>
                <p style={{ textAlign: "center" }} className="description">
                  As a rule, oil, oil filter and technical control are included
                  in what we call a small service. You can easily book an
                  appointment in our calendar.
                </p>
                {/* <Button className='btn-link' color='info' href='/services'>
                      See more
                    </Button> */}
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="info">
              <div className="icon icon-info">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnycrzGxFIm36oGuF0_zNq3TBx45a_IWf9ag&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="description">
                <h4
                  style={{ textAlign: "center", fontWeight: "400" }}
                  className="info-title"
                >
                  Mechanical repairs
                </h4>
                <br></br>
                <p style={{ textAlign: "center" }}>
                  Brakes, clutch, gears and engine, are among some of the most
                  common main groups in the mechanical category.
                </p>
                {/* <Button className='btn-link' color='info' href='/services'>
                      See more
                    </Button> */}
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="info">
              <div className="icon icon-info">
                <img
                  style={{ borderRadius: "50%" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtpRgVuNXsgcDevMqHTk_v5gqdq5jmV_K5Ow&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="description">
                <h4
                  style={{ textAlign: "center", fontWeight: "400" }}
                  className="info-title"
                >
                  Electronic repairs
                </h4>
                <br></br>
                <p style={{ textAlign: "center" }}>
                  Wiring and lighting can be tricky to fix on your own, we have
                  good and broad experience and are happy to help you.
                </p>
                {/* <Button className='btn-link' color='info' href='/services'>
                      See more
                    </Button> */}
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="info">
              <div className="icon icon-info">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0v60iuzvVaAGXXOCXHogMlvmiwzvRcUDpWA&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="description">
                <h4
                  style={{ textAlign: "center", fontWeight: "400" }}
                  className="info-title"
                >
                  Assembly{" "}
                </h4>
                <br></br>
                <p style={{ textAlign: "center" }}>
                  In the customer reception you can find a small selection of
                  useful options for the car.help you with the installation of a
                  dash-Cam.
                </p>
                {/* <Button className='btn-link' color='info' href='/services'>
                      See more
                    </Button> */}
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBZi_T27feqtPZm0HIWv54f2QzQjK6AN328A&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="description">
                <h4
                  style={{ textAlign: "center", fontWeight: "400" }}
                  className="info-title"
                >
                  Small service
                </h4>
                <br></br>
                <p style={{ textAlign: "center" }} className="description">
                  In a larger service you will find things like oil, oil filter,
                  brake fluid, passenger compartment filter,air filter and
                  technical control.
                </p>
                {/* <Button className='btn-link' color='info' href='/services'>
                      See more
                    </Button> */}
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="info">
              <div className="icon icon-info">
                <img
                  src="data:image/jpeg;base64,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"
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
                  To avoid expensive repairs, it is important to take care of
                  the car. The car benefits from an engine wash in and out, a
                  pretest check or a condition check.
                </p>
                {/* <Button className='btn-link' color='info' href='/services'>
                      See more
                    </Button> */}
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="info">
              <div className="icon icon-info">
                <img
                  style={{ borderRadius: "50%" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx14VAE6ojOArJYsyWq9HxMFlcOXxWG7dIlw&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="description">
                <h4
                  style={{ textAlign: "center", fontWeight: "400" }}
                  className="info-title"
                >
                  Tires
                </h4>
                <br></br>
                <p style={{ textAlign: "center" }}>
                  We can both order and change tires for you, in addition to
                  performing wheel alignment, or minor services such as
                  repairing tires..
                </p>
                {/* <Button className='btn-link' color='info' href='/services'>
                      See more
                    </Button> */}
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="info">
              <div className="icon icon-info">
                <img
                  style={{ alignContent: "center", justifyContent: "center" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNZ4jEaqgKi7SVwNdL_9hhk2byv8XJZ1UlLQ&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="description">
                <h4
                  style={{ textAlign: "center", fontWeight: "400" }}
                  className="info-title"
                >
                  Glass
                </h4>
                <br></br>
                <p style={{ textAlign: "center" }}>
                  We have certified glass fitters who can easily help you change
                  routes if you have cracks or rock damage.routes if you have
                  cracks or rock damage.
                </p>
                {/* <Button className='btn-link' color='info' href='/services'>
                      See more
                    </Button> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
