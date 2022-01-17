import Axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Common/Button";

export const Login = (props) => {
  const navigate = useNavigate();

  const [data, setData] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    Axios.post("http://localhost:5055/auth/login", data, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setIsSubmitting(false);
        if (res?.data?.user?.role === "admin") {
          navigate("/admin/dashboard");
        }

        if (res?.data?.user?.role === "student") {
          navigate("/student/test");
        }
      })
      .catch((err) => {
        console.log("errors", err);
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <section className="main signinsignupSection">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="signleftSection">
                <div className="LefttxtSty">
                  <img src="/img/login-graphics.svg" alt="asldkdf" />
                  <img
                    src="img/password-screen.svg"
                    className="slideanimation"
                    alt="lkasdf"
                  />
                </div>

                <div className="singin-msg">
                  <span>Do more</span> with your account
                  <p className="mt-3">
                    Search 3 million + properties across 70+ Cities, explore
                    curated showcase of luxury properties, post single property
                    for Free, Explore events &amp; more
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="login-section signRightSection screen_1 text-center">
                <img src="/img/brand-logo.png" height="100px" alt="dafsdfs" />
                <h4 className="modal-title mb-2 mt-4"> Sign in </h4>
                <p>for a personalized </p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      onChange={handleChange}
                      type="email"
                      className="form-control"
                      placeholder="Email or Phone"
                      name="email"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      onChange={handleChange}
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                    />
                  </div>

                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      {" "}
                      I accept the Terms and conditions{" "}
                    </label>
                  </div>

                  <div className="btn-login text-center">
                    <Button
                      isSubmitting={isSubmitting}
                      enabledLable="Login"
                      disabledLable="Logingin.."
                    />
                  </div>
                </form>
                <br />
                <div className="row justify-content-center">
                  <p>Don't have account?</p>
                  <Link to="/register">Register</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
