import Axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../Common/Loader";
import { NavBar } from "../Common/NavBar";
import { SideBar } from "../Common/SideBar";

export const CompanyList = () => {
  const [company, setCompany] = useState([]);
  const [loading, setLoading] = useState(false);

  const deleteCompany = (i, id) => {
    setLoading(true);

    Axios.delete(`http://localhost:5055/exchange/delete-company/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        company.splice(i, 1);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);

    let token = localStorage.getItem("token");
    Axios.get("http://localhost:5055/exchange/get-company", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: token,
      },
    })
      .then((res) => {
        setCompany(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  let content = loading ? (
    <Loader />
  ) : (
    <div className="ibox">
      <div className="ibox-content">
        <div className="row justify-content-between">
          <h2 className="card-title"> Company List </h2>
          <Link to="/exchange/add-company" className="btn btn-info">
            {" "}
            Add{" "}
          </Link>
        </div>

        <div className="full-height-scroll">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th> Name </th>
                  <th> Email </th>
                  <th> Action </th>
                </tr>
              </thead>
              <tbody>
                {company.map((c, i) => {
                  return (
                    <tr key={i}>
                      <td>{c.name}</td>
                      <td>{c.email}</td>
                      <td>
                        <Link
                          style={{ margin: "0px 6px 0px 0px" }}
                          className="btn btn-warning btn-xs"
                          to={`/exchange/edit-company/${c._id}`}
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => {
                            deleteCompany(i, c._id);
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
  );

  return (
    <>
      <NavBar title="Home"></NavBar>
      <div id="wrapper" className="gray-bg dashbard-1">
        <SideBar></SideBar>

        <div id="page-wrapper">
          <div className="wrapper wrapper-content">
            <div className="row">
              <div className="col-md-12">{content}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
