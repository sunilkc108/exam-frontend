import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { Button } from "../Common/Button";
import { showError, showSuccess } from "../Utility/Notification";

export const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    Axios.post(
      "http://localhost:5055/auth/register",
      { ...data, role: "exchange" },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((res) => {
        setIsSubmitting(false);
        showSuccess("User registered successfully.");
        navigate("/login");
      })
      .catch((err) => {
        console.log("errors", err);
        showError("User registeration failed.");
        setIsSubmitting(false);
      });
  };

  return (
    <section className="main signinsignupSection">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="signleftSection">
              <div className="LefttxtSty">
                <img src="/img/login-graphics.svg" alt="one" />
                <img
                  src="/img/password-screen.svg"
                  alt="j"
                  className="slideanimation"
                />
              </div>

              <div className="singin-msg">
                <span>Do more</span> with your account
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="login-section signRightSection screen_1 text-center">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-12">
                    <input
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name="firstName"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-12">
                    <input
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      name="lastName"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-12">
                    <input
                      onChange={handleChange}
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-12">
                    <input
                      onChange={handleChange}
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                    />
                  </div>
                </div>

                <div className="btn-login text-center">
                  <Button
                    enabledLable="Register"
                    disabledLable="Registering..."
                    isSubmitting={isSubmitting}
                  ></Button>
                </div>
              </form>
              <br />
              <div className="row justify-content-center">
                <p>Already a user?</p>
                <Link to="/login">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
