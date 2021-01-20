import React from "react";
import logo from "../img/epayco1.png";
import { Link } from "react-router-dom";
import "../index.css";

function Footer() {
  return (
    <React.Fragment>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-6 text-center">
            Epayco @ 2011-2019 Todos los derechos reservados
          </div>
          <div className="col-6">
            <Link to="/">
              <img src={logo} className="logo" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;