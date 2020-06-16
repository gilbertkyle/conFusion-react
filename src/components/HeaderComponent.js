import React, { Component, Fragment } from "react";
import { Navbar, NavbarBrand, Jumbotron } from "reactstrap";

export class Header extends Component {
  render() {
    return (
      <Fragment>
        <Navbar dark>
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Ristorante Con Fusion</h1>
                <p>
                  We take inspiration from the world's best cuisine, and create a unique fusion
                  experience.
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </Fragment>
    );
  }
}

export default Header;
