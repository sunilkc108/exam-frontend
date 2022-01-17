import Axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../Common/NavBar";

export const TestSeries = function () {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:5055/admin/get-series", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        setSeries(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);
  return (
    <>
      <NavBar />
      <div id="wrapper">
        <div id="page-wrapper" className="gray-bg dashbard-1">
          <div className="wrapper wrapper-content">
            <div className="row">
              <div className="col-md-12">
                <h2> Choose Category </h2>
                <div className="choose-category">
                  <div className="row">
                    {series.map((ser, i) => {
                      return (
                        <div className="col-md-4" key={ser._id}>
                          <div className="media ibox flex-row widget-2 p-2">
                            <div className="media-body">
                              <p className="mb-0">
                                {" "}
                                <i className="fas fa-clock"></i> {ser.timeLimit}
                              </p>
                              <h5 className="mt-0"> {ser.name}</h5>
                            </div>
                            {/* <a
                              href="javascript:;"
                              data-toggle="modal"
                              data-target={`#viewInterest-${ser._id}`}
                              className="divLink"
                            >
                              {" "}
                            </a> */}
                            <Link
                              className="divLink"
                              to={`/test-series/questions/${ser._id}`}
                            >
                              Start
                            </Link>
                            <picture className="mr-3">
                              <span className="material-icons">
                                {" "}
                                lock_open{" "}
                              </span>
                            </picture>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
