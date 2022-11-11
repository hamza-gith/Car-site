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
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
import 'antd/dist/antd.css';
import 'react-notifications-component/dist/theme.css';

// pages
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
 import RegisterPage from "views/examples/RegisterPage.js";
import SignInpage from "views/examples/SignInpage";
import ContactUs from "views/index-sections/ContactUs";
import ServiceTable from "views/index-sections/ServicesTable";
import Calender from "views/index-sections/Calender";
import { Provider } from "react-redux";
import ReactNotification from 'react-notifications-component'

import { store } from "./redux/store";
// others

ReactDOM.render(
  <Provider store={store}>
    <ReactNotification/>
  <BrowserRouter>
    <Switch>
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
       <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      /> 
       <Route
        path="/signIn-page"
        render={(props) => <SignInpage {...props} />}
      /> 
       <Route
        path="/contactUs-page"
        render={(props) => <ContactUs {...props} />}
      /> 
      <Route
        path="/servicestable-page"
        render={(props) => <ServiceTable {...props} />}
      />
       <Route
        path="/calender-page"
        render={(props) => <Calender {...props} />}
      />
      <Redirect to="/landing-page" />
    </Switch>
  </BrowserRouter>
  </Provider>
,
  document.getElementById("root")
);
