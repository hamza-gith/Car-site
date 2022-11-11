import React from "react";
import {
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

import ExamplesNavbar from "components/Navbars/ExamplesNavbar";

export default function ContactUs() {
  return (
    <>
      <ExamplesNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" + require("assets/img/login-image.jpg").default + ")",
        }}
        
      >
        
          <Container>
            
            <Row>
              <Col style={{marginTop: "8em"}}className="ml-auto mr-auto" md="8">
                <h2 style={{color: "white" , fontWeight: "400"}} className="text-center">Contact Us</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label style={{color: "white" , fontWeight: "400"}}>First Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            {/* <i className='nc-icon nc-single-02' /> */}
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="First Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label style={{color: "white" , fontWeight: "400"}}>Last Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            {/* <i className='nc-icon nc-single-02' /> */}
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Last Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label style={{color: "white" , fontWeight: "400"}}>Address</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            {/* <i className='nc-icon nc-single-02' /> */}
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Address" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label style={{color: "white" , fontWeight: "400"}}>Zip Code</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            {/* <i className='nc-icon nc-single-02' /> */}
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Zip Code" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label style={{color: "white" , fontWeight: "400"}}>Telephone</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            {/* <i className='nc-icon nc-mobile-b' /> */}
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Telephone" type="numberic" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label style={{color: "white" , fontWeight: "400"}}>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            {/* <i className='nc-icon nc-email-85' /> */}
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label style={{color: "white" , fontWeight: "400"}}>Register no</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            {/* <i className='nc-icon nc-mobile-b' /> */}
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Register no" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label style={{color: "white" , fontWeight: "400"}}>How did you find us?</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            {/* <i className='nc-icon nc-mobile-b' /> */}
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Google" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label style={{color: "white" , fontWeight: "400"}}>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
            
          </Container>
          
        </div>
     
    </>
  );
}
