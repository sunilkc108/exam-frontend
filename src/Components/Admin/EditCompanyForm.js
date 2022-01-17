import { SideBar } from "../Common/SideBar";
import { NavBar } from "../Common/NavBar";
import { Button } from "../Common/Button";
import Axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../Common/Loader";

export const EditCompanyForm = () => {
  const navigate = useNavigate();
  const { companyId } = useParams();

  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    setLoading(true);
    Axios.get(`http://localhost:5055/exchange/get-company/${companyId}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("errors", err);
        setLoading(false);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let token = localStorage.getItem("token");

    setIsSubmitting(true);

    Axios.put(
      `http://localhost:5055/exchange/edit-company/${companyId}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: token,
        },
      }
    )
      .then((res) => {
        setIsSubmitting(false);
        navigate("/exchange/company/list");
      })
      .catch((err) => {
        console.log("errors", err);
        setIsSubmitting(false);
      });
  };

  let content = isLoading ? (
    <Loader />
  ) : (
    <div className="ibox">
      <div className="custom-ibox-content p-4">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="card-title mb-3 mt-0"> Edit Company</h2>
            <form onSubmit={handleSubmit} className="form_sec_outer_task">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="agentfName">Name</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="agentfName"
                    name="name"
                    value={data.name}
                    required
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="agentlName">Email</label>
                  <input
                    onChange={handleChange}
                    type="email"
                    value={data.email}
                    required
                    className="form-control"
                    id="agentlName"
                    name="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="agentEmail">Password</label>
                  <input
                    onChange={handleChange}
                    type="password"
                    require
                    className="form-control"
                    id="agentEmail"
                    name="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="form-group row mt-2">
                <div className="col-sm-4 col-sm-offset-2">
                  <Button
                    enabledLable="Update"
                    disabledLable="Updating..."
                    isSubmitting={isSubmitting}
                  ></Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <NavBar></NavBar>
      <div id="wrapper">
        <SideBar></SideBar>

        <div id="page-wrapper" className="gray-bg dashbard-1">
          <div className="row border-bottom"></div>

          <div className="wrapper wrapper-content">
            <div className="row">
              <div className="col-lg-8">{content}</div>
            </div>
          </div>
          <div className="footer">
            <div className="float-right">
              <span>Designed and Developed By Nuxpro Services Pvt. Ltd.</span>
            </div>
            <div>
              <strong>Copyright</strong> Rexnepal &copy; 2021
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
