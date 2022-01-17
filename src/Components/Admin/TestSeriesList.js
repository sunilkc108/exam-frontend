import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../Common/NavBar";
import { SideBar } from "../Common/SideBar";
import Axios from "axios";

export const TestSeriesList = () => {
  const [series, setSeriesData] = useState([]);
  const [loading, setLoading] = useState(false);

  let token = localStorage.getItem("token");

  const deleteSeries = (i, id) => {
    setLoading(true);

    Axios.delete(`http://localhost:5055/admin/delete-series/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: token,
      },
    })
      .then((res) => {
        series.splice(i, 1);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err, "error");
        setLoading(false);
      });
  };

  useEffect(() => {
    Axios.get("http://localhost:5055/admin/get-series", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: token,
      },
    })
      .then((res) => {
        setSeriesData(res.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  return (
    <>
      <NavBar title="Home"></NavBar>
      <div id="wrapper" className="gray-bg dashbard-1">
        <SideBar></SideBar>

        <div id="page-wrapper">
          <div className="wrapper wrapper-content">
            <div className="row">
              <div className="col-md-12">
                <div className="ibox">
                  <div className="ibox-content">
                    <div className="row justify-content-between">
                      <div className="col-md-9">
                        <h2 className="card-title"> Test Series </h2>
                      </div>
                      <div className="col-md-3 text-right">
                        <Link to="/admin/add-series" className="btn btn-info">
                          {" "}
                          Add{" "}
                        </Link>
                      </div>
                    </div>

                    <div className="full-height-scroll">
                      <div className="table-responsive">
                        <table className="table table-striped table-hover">
                          <thead>
                            <tr>
                              <th> Name </th>
                              <th> Duration </th>
                              <th> Action </th>
                            </tr>
                          </thead>
                          <tbody>
                            {series.map((c, i) => {
                              return (
                                <tr key={i}>
                                  <td>
                                    <Link
                                      to={`/admin/series-questions/${c._id}`}
                                    >
                                      {c.name}
                                    </Link>
                                  </td>
                                  <td>{c.timeLimit}</td>
                                  <td>
                                    <Link
                                      style={{ margin: "0px 6px 0px 0px" }}
                                      className="btn btn-warning btn-xs"
                                      to={`/admin/edit-series/${c._id}`}
                                    >
                                      Edit
                                    </Link>
                                    <button
                                      onClick={() => {
                                        deleteSeries(i, c._id);
                                      }}
                                      className="btn btn-danger btn-xs"
                                    >
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
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
