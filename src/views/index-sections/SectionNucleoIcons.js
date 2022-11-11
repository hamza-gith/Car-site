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

// reactstrap components
import {  Row, Col } from "reactstrap";

// core components

function SectionNucleoIcons() {
  return (
    <>
      <div className="section section-dark section-nucleo-icons">
       <div style={{marginLeft:"2em", marginRight:"2em"}}>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">Maintenance</h2>
              <br />
              <p style={{fontSize:"20px"}} className="description">
              Knowing how to maintain your car's tire pressure can help reduce wear on 
              the tires and helps ensure you're getting good gas mileage. Checking your 
              tire pressure includes finding the recommended pressure,
               checking the PSI and inflating or deflating your tires accordingly.
               Routinely checking and changing your car's oil is essential to keeping its engine in running condition. 
               Check your oil each month and change it as directed in the car's owner's manual.
               Your car's brake pads also require regular inspection. While driving, 
               listen for any brake noise and pay attention to shuddering or vibrating from the brake pedal. 
               If any concerns arise, consult a service center as soon as possible.
               If your wipers aren't working like they used to, don't let the problem linger. 
               Damaged or worn out blades can reduce visibility during a heavy rain or a snowstorm. 
               Knowing how to inspect your 
               wiper blades regularly and replace them when necessary is one way to help keep your car safe.
              </p>
              <br />
              {/* <Button
                className="btn-round"
                color="danger"
                href="/nucleo-icons"
                target="_blank"
              >
                View Demo Icons
              </Button>
              <Button
                className="btn-round ml-1"
                color="danger"
                href="https://nucleoapp.com/?ref=1712"
                outline
                target="_blank"
              >
                View All Icons
              </Button> */}
            </Col>
            <Col lg="6" md="12">
              <div>
                <img style={{width: "100%", height:"100%", borderRadius: "5%"}}src="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?ixid=MnwxMjA3
                fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1525&q=80" 
                alt=""/>
              </div>
              {/* <div className="icons-container">
                <i className="nc-icon nc-time-alarm" />
                <i className="nc-icon nc-atom" />
                <i className="nc-icon nc-camera-compact" />
                <i className="nc-icon nc-watch-time" />
                <i className="nc-icon nc-key-25" />
                <i className="nc-icon nc-diamond" />
                <i className="nc-icon nc-user-run" />
                <i className="nc-icon nc-layout-11" />
                <i className="nc-icon nc-badge" />
                <i className="nc-icon nc-bulb-63" />
                <i className="nc-icon nc-favourite-28" />
                <i className="nc-icon nc-planet" />
                <i className="nc-icon nc-tie-bow" />
                <i className="nc-icon nc-zoom-split" />
                <i className="nc-icon nc-cloud-download-93" />
              </div> */}
            </Col>
          </Row>
          <div>
            
          </div>
          </div>
      </div>{" "}
    </>
  );
}

export default SectionNucleoIcons;
