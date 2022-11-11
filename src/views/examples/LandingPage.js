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
import React ,{useEffect} from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import { Link } from "react-router-dom";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
 
const ShowMap = () => {
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZ2hpYXNhbGkiLCJhIjoiY2tvOTNjb3B0MnRjMjJ2bXZlYWdwZnExeCJ9.I9l96UoN9Evv9Cf5wTEqvg";
    var map = new mapboxgl.Map({
      container: "map",
      zoom: 15,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [10.754352255361482, 59.92879799179431],
    });
      var popup = new mapboxgl.Popup({offset: 25})
      .setText("Ringen Bilverksted AS");
    var marker = new mapboxgl.Marker()
      .setLngLat([10.754352255361482, 59.92879799179431])
      .setPopup(popup)
      .addTo(map); // add the marker to the map
  }, []);

  return <div id="map" style={{ height: "40vh", width: "100%" }}></div>;
};
function LandingPage() {


  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className='main'>
        <div className='section text-center'>
          <Container>
            <Row>
              <Col className='ml-auto mr-auto' md='8'>
                <h2 className='title'>Brief Intro</h2>
                <h5 className='description'>
                  We are an approved car workshop for all car brands, are
                  specialists in Mercedes and our workshop is located in the
                  middle of Oslo. At our car workshop, we only use original
                  parts for repairs of all car brands, as long as you as a
                  customer do not want anything else. We do this so that you can
                  keep your guarantee as far as possible. We place great emphasis on
                  keeping up to date on new products, solutions and courses. The
                  industry is developing rapidly and it is therefore a high
                  priority for us to keep up with developments in order to be
                  able to perform the best possible work.</h5>
                <br />
                {/* <Button
                  className='btn-round'
                  color='info'
                  href='#pablo'
                  onClick={(e) => e.preventDefault()}
                >
                  See Details
                </Button> */}
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md='3'>
                <div className='info'>
                  <div className='icon icon-info'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhMiLTQr7ET0pb5MBYyc9Ak98lQKZ9awdGtg&usqp=CAU"
                    alt=""/>
                  </div>
                  <div className='description'>
                    <h4 className='info-title'>Great service</h4>
                    <p className='description'>
                    In a larger service you will find things like oil, oil filter,
                     brake fluid, passenger compartment filter,air filter and technical control. 
                     
                    </p>
                    <Link to="/servicestable-page">
                    <Button className='btn-link' color='info' href='/services'>
                      See more
                    </Button>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col md='3'>
                <div className='info'>
                  <div className='icon icon-info'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnycrzGxFIm36oGuF0_zNq3TBx45a_IWf9ag&usqp=CAU"
                    alt=""/>
                  </div>
                  <div className='description'>
                    <h4 className='info-title'>Mechanical repairs</h4>
                    <p>
                    Brakes, clutch, gears and engine, 
                    are among some of the most common main groups in the mechanical category. 
                    
                    </p>
                    <Link to="/servicestable-page">
                    <Button className='btn-link' color='info' href='/services'>
                      See more
                    </Button>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col md='3'>
                <div className='info'>
                  <div className='icon icon-info'>
                  <img style={{borderRadius:"50%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtpRgVuNXsgcDevMqHTk_v5gqdq5jmV_K5Ow&usqp=CAU"
                    alt=""/>
                  </div>
                  <div className='description'>
                    <h4 className='info-title'>Electronic repairs</h4>
                    <p>
                    Wiring and lighting can be tricky to fix on your own, 
                    we have good and broad experience and are happy to help you. 
                    </p>
                    <Button className='btn-link' color='info' href='/servicestable-page'>
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md='3'>
                <div className='info'>
                  <div className='icon icon-info'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0v60iuzvVaAGXXOCXHogMlvmiwzvRcUDpWA&usqp=CAU"
                    alt=""/>
                  </div>
                  <div className='description'>
                    <h4 className='info-title'>Assembly </h4>
                    <p>
                    In the customer reception you can find a small selection
                     of useful options for the car.help you with the installation of a dash-Cam.
                    </p>
                    <Button className='btn-link' color='info' href='/services'>
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='section section-dark text-center'>
          <Container>
            <h2 className='title'>Let's talk about us</h2>
            <Row>
              <Col md='4'>
                <Card className='card-profile card-plain'>
                  <div className='card-avatar'>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      <img
                        alt='...'
                        src={
                          require("assets/img/faces/clem-onojeghuo-3.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      <div className='author'>
                        <CardTitle tag='h4'>Henry Ford</CardTitle>
                        <h6 className='card-category'>Product Manager</h6>
                      </div>
                    </a>
                    <p className='card-description text-center'>
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p>
                  </CardBody>
                  <CardFooter className='text-center'>
                    <Button
                      className='btn-just-icon btn-neutral'
                      color='link'
                      href='#pablo'
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className='fa fa-twitter' />
                    </Button>
                    <Button
                      className='btn-just-icon btn-neutral ml-1'
                      color='link'
                      href='#pablo'
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className='fa fa-google-plus' />
                    </Button>
                    <Button
                      className='btn-just-icon btn-neutral ml-1'
                      color='link'
                      href='#pablo'
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className='fa fa-linkedin' />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md='4'>
                <Card className='card-profile card-plain'>
                  <div className='card-avatar'>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      <img
                        alt='...'
                        src={
                          require("assets/img/faces/joe-gardner-2.jpg").default
                        }
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      <div className='author'>
                        <CardTitle tag='h4'>Sophie West</CardTitle>
                        <h6 className='card-category'>Designer</h6>
                      </div>
                    </a>
                    <p className='card-description text-center'>
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others. No one can whistle a symphony. It takes an
                      orchestra to play it.
                    </p>
                  </CardBody>
                  <CardFooter className='text-center'>
                    <Button
                      className='btn-just-icon btn-neutral'
                      color='link'
                      href='#pablo'
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className='fa fa-twitter' />
                    </Button>
                    <Button
                      className='btn-just-icon btn-neutral ml-1'
                      color='link'
                      href='#pablo'
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className='fa fa-google-plus' />
                    </Button>
                    <Button
                      className='btn-just-icon btn-neutral ml-1'
                      color='link'
                      href='#pablo'
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className='fa fa-linkedin' />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md='4'>
                <Card className='card-profile card-plain'>
                  <div className='card-avatar'>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      <img
                        alt='...'
                        src={
                          require("assets/img/faces/erik-lucatero-2.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      <div className='author'>
                        <CardTitle tag='h4'>Robert Orben</CardTitle>
                        <h6 className='card-category'>Developer</h6>
                      </div>
                    </a>
                    <p className='card-description text-center'>
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p>
                  </CardBody>
                  <CardFooter className='text-center'>
                    <Button
                      className='btn-just-icon btn-neutral'
                      color='link'
                      href='#pablo'
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className='fa fa-twitter' />
                    </Button>
                    <Button
                      className='btn-just-icon btn-neutral ml-1'
                      color='link'
                      href='#pablo'
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className='fa fa-google-plus' />
                    </Button>
                    <Button
                      className='btn-just-icon btn-neutral ml-1'
                      color='link'
                      href='#pablo'
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className='fa fa-linkedin' />
                    </Button>
                  </CardFooter>
                </Card>
              </Col> 
            </Row>
          </Container>
        </div>
        <div className='section landing-section'>
          <Container>
            <Row>
              <Col className='ml-auto mr-auto' md='8'>
                <h2 className='text-center'>Keep in touch?</h2>
                <Form className='contact-form'>
                  <Row>
                    <Col md='6'>
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType='prepend'>
                          <InputGroupText>
                            <i className='nc-icon nc-single-02' />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder='Name' type='text' />
                      </InputGroup>
                    </Col>
                    <Col md='6'>
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType='prepend'>
                          <InputGroupText>
                            <i className='nc-icon nc-email-85' />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder='Email' type='text' />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder='Tell us your thoughts and feelings...'
                    type='textarea'
                    rows='4'
                  />
                  <Row>
                    <Col className='ml-auto mr-auto' md='4'>
                      <Button className='btn-fill' color='danger' size='lg'>
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
            <Row style={{marginTop:"2%"}}>
            <Col  className='ml-auto mr-auto' md='6'>
               <h2>Opening hours</h2>
               <p>MONDAY - FRIDAY: 08:00 - 17:00</p>
               <p>You can return the car outside opening hours, by agreement with the workshop. We also offer pick-up and delivery of the car and loan car if it should prove necessary for you.</p>
               <h3>Ringen Bilverksted</h3>
               <p>Waldemar Thranes gate 98</p>
               <p style={{marginTop:"-10px"}}>0175, Oslo</p>
              </Col>
              <Col id="map" className='ml-auto mr-auto' md='6'>
               <ShowMap/>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
