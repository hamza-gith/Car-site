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
import React, { useState } from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import { Link } from "react-router-dom";
import { store } from "react-notifications-component";
import { login } from "../../helper/axios";
import { useDispatch } from "react-redux";
import { setLoginState, setUserProfile } from "../../redux/actions";
import { Redirect } from "react-router-dom";


function SignInpage() {
  const dispatch = useDispatch();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loginsuccess, setloginsuccess] = useState(false);

  
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });

  async function onfinished() {
    const data = { email, password };

    if (email === "" || password === "") {
      store.addNotification({
        title: "Validation Error",
        message: "Please Type Email and Password",
        type: "danger", // 'default', 'success', 'info', 'warning'
        container: "top-right", // where to position the notifications
        animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
        animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
        dismiss: {
          duration: 3000,
        },
      });
    } else {
      const res = await login("auth/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      });
      if (res.status === 200) {
        const userdata = res.data;
        window.localStorage.setItem("ringen", userdata.tokens.access.token);
        dispatch(setLoginState(true));
        dispatch(setUserProfile(userdata.user));

        store.addNotification({
          title: "Successfuly Login",
          message: "You can book any service now.",
          type: "success", // 'default', 'success', 'info', 'warning'
          container: "top-right", // where to position the notifications
          animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
          animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
          dismiss: {
            duration: 3000,
          },
        });
        setloginsuccess(true);
      }


    }
  }



  if(loginsuccess){

    return <Redirect  to={{ pathname: "/landing-page" }} />

  }
  return (
    <>
      <ExamplesNavbar />
      <div
        className='page-header'
        style={{
          backgroundImage:
            "url(" + require("assets/img/login-image.jpg").default + ")",
        }}
      >
        <div className='filter' />
        <Container>
          <Row>
            <Col className='ml-auto mr-auto' lg='4'>
              <Card className='card-register ml-auto mr-auto'>
                <h3 className='title mx-auto'>Sign In Here </h3>
                <Form className='register-form'>
                  <label>Email</label>
                  <Input
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    type='text'
                  />
                  <label>Password</label>
                  <Input
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    type='password'
                  />
                  <Button
                    block
                    className='btn-round'
                    color='danger'
                    onClick={onfinished}
                  >
                    Sign In
                  </Button>
                </Form>
                {/* <div className="forgot">
                  <Button style={{color:"white"}}
                    className="btn-link"
                    color="white"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Forgot password?
                  </Button>
                </div> */}
                <div style={{ marginTop: "-1em" }} className='forgot'>
                  <Link to='/register-page'>
                    <Button
                      style={{ color: "white" }}
                      className='btn-link'
                      color='white'
                    >
                      Don't have Account? Sign Up
                    </Button>
                  </Link>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SignInpage;
