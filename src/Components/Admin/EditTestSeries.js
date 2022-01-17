import { SideBar } from "../Common/SideBar";
import { NavBar } from "../Common/NavBar";
import { Button } from "../Common/Button";
import Axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../Common/Loader";

export const EditTestSeries = () => {
  let token = localStorage.getItem("token");

  const navigate = useNavigate();
  const { seriesId } = useParams();

  const [data, setData] = useState({ name: "", timeLimit: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    setLoading(true);
    Axios.get(`http://localhost:5055/admin/get-series/${seriesId}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: token,
      },
    })
      .then((res) => {
        console.log(res.data, "data");
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

    setIsSubmitting(true);

    Axios.put(`http://localhost:5055/admin/edit-series/${seriesId}`, data, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: token,
      },
    })
      .then((res) => {
        setIsSubmitting(false);
        navigate("/admin/get-series");
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
            <h2 className="card-title mb-3 mt-0"> Edit Series</h2>
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
                    placeholder="Series Name"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="agentlName">Time Limit</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    value={data.timeLimit}
                    required
                    className="form-control"
                    name="timeLimit"
                    placeholder="TIme"
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
