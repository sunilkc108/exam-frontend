import { SideBar } from "../Common/SideBar";
import { NavBar } from "../Common/NavBar";
import { useState } from "react";
import Axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export const TestSeriesOptionsAdd = () => {
  const navigate = useNavigate();
  const { seriesId, questionId } = useParams();
  const [formData, setformData] = useState({ name: "", isCorrect: "" });

  const handleChange = (e) => {
    let { name, value, type } = e.target;

    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log(seriesId, questionId, "series qestions");
    e.preventDefault();

    let token = localStorage.getItem("token");

    Axios.post(
      `http://localhost:5055/admin/series-options-add/${seriesId}/${questionId}`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: token,
        },
      }
    )
      .then((res) => {
        console.log("series option saved successfully");
        navigate(`/admin/series-questions/${seriesId}/${questionId}`);
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
                          <Link to={`/admin/series-questions-add/${seriesId}`}>
                            Add Options
                          </Link>
                        </h2>
                        <form
                          onSubmit={handleSubmit}
                          className="form_sec_outer_task"
                        >
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label htmlFor="agentfName">Option</label>
                              <input
                                onChange={handleChange}
                                type="text"
                                className="form-control"
                                name="option"
                                required
                                placeholder=""
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <input
                                onChange={handleChange}
                                type="checkbox"
                                name="isCorrect"
                              />
                              <label htmlFor="agentfName">Is correct?</label>
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
