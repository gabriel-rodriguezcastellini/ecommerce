import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

const Login = () => {
  const navigate = useNavigate();
  const { user, googleSignIn } = UserAuth();

  const signIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="card border-0 shadow w-50 mx-auto mt-3">
      <div className="card-body">
        <h2 className="h4 mb-1">Sign in</h2>
        <div className="py-3">
          <h3 className="d-inline-block align-middle fs-base fw-medium mb-2 me-2">
            With social account:
          </h3>
          <div className="d-inline-block align-middle">
            <MDBBtn
              floating
              color="secondary"
              className="mx-1"
              onClick={signIn}
            >
              <MDBIcon fab icon="google" />
            </MDBBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
