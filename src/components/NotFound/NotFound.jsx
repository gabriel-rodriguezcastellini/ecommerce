import React from "react";
import error from "./assets/error.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-10 text-center mx-auto">
            <img src={error} className="h-lg-500px mb-4" alt="Error image" />
            <h1 className="display-1 text-primary mb-0">404</h1>
            <h2>Oh no, something went wrong!</h2>
            <p className="mb-4">
              Either something went wrong or this page doesn't exist anymore.
            </p>
            <Link to="/" className="btn btn-light mb-0">
              Take me to Homepage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
