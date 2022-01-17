import { SideBar } from "../Common/SideBar";
import { NavBar } from "../Common/NavBar";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export const AddTestSeries = () => {
  const navigate = useNavigate();
  const [formData, setformData] = useState({ name: "", time: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let token = localStorage.getItem("token");

    Axios.post("http://localhost:5055/admin/add-series", formData, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: token,
      },
    })
      .then((res) => {
        console.log("series saved successfully");
        navigate("/admin/get-series");
      })
      .catch((err) => {
        console.log("errors", err);
      });
  };

  return (
    <>
      <NavBar></NavBar>
      <div id="wrapper">
        <SideBar></SideBar>

        <div id="page-wrapper" className="gray-bg dashbard-1">
          <div className="row border-bottom"></div>

          <div className="wrapper wrapper-content">
            <div className="row">
              <div className="col-lg-8">
                <div className="ibox">
                  <div className="custom-ibox-content p-4">
                    <div className="row">
                      <div className="col-lg-12">
                        <h2 className="card-title mb-3 mt-0">
                          {" "}
                          Add Test Series
                        </h2>
                        <form
                          onSubmit={handleSubmit}
                          className="form_sec_outer_task"
                        >
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label htmlFor="agentfName">Name</label>
                              <input
                                onChange={handleChange}
                                type="text"
                                className="form-control"
                                id="agentfName"
                                name="name"
                                required
                                placeholder="Test Series Name"
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="agentfName">Time Limit</label>
                              <input
                                onChange={handleChange}
                                type="text"
                                className="form-control"
                                id="agentfName"
                                name="time"
                                required
                                placeholder="Eg. 1:30"
                              />
                            </div>
                          </div>
                          <div className="form-group row mt-2">
                            <div className="col-sm-4 col-sm-offset-2">
                              <button
                                type="submit"
                                className="btn btn-secondary btn-block"
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
