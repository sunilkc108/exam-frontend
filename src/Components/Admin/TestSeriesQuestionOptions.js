import Axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { NavBar } from "../Common/NavBar";
import { SideBar } from "../Common/SideBar";

export const TestSeriesQuestionOptions = () => {
  const navigate = useNavigate();
  const { seriesId, questionId } = useParams();

  let token = localStorage.getItem("token");

  const [questions, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const deleteQuestion = (i, id) => {
    setLoading(true);

    Axios.delete(
      `http://localhost:5055/admin/delete-series-question-options/${seriesId}/${questionId}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: localStorage.getItem("token"),
        },
      }
    )
      .then((res) => {
        questions.splice(i, 1);
        console.log("option delete successful");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    Axios.get(
      `http://localhost:5055/admin/series-questions/${seriesId}/${questionId}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: token,
        },
      }
    )
      .then((res) => {
        console.log(res.data, "data");
        setData(res.data);
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
                      <h2 className="card-title"> Test Series Options</h2>
                      <Link
                        to={`/admin/series-options-add/${seriesId}/${questionId}`}
                        className="btn btn-info"
                      >
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
                              <th> Action </th>
                            </tr>
                          </thead>
                          <tbody>
                            {questions.map((c, i) => {
                              return (
                                <tr key={i}>
                                  <td>
                                    {c.text}
                                    {c.isCorrect ? (
                                      <span className="label label-primary">
                                        {c.isCorrect.toString()}
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                  </td>
                                  <td>
                                    <Link
                                      style={{ margin: "0px 6px 0px 0px" }}
                                      className="btn btn-warning btn-xs"
                                      to={`/admin/series-questions/${c._id}/${seriesId}`}
                                    >
                                      Edit
                                    </Link>
                                    <button
                                      className="btn btn-danger btn-xs"
                                      onClick={() => {
                                        deleteQuestion(i, c._id);
                                      }}
                                    >
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}

                            {/* <tr>
                              <td>
                                All of the following veins are formed from the
                                vitelline vein except ____
                              </td>
                              <td>
                                <button className="btn btn-primary btn-xs">
                                  Edit
                                </button>
                                <button className="btn btn-danger btn-xs">
                                  Delete
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Sinus venosus receives blood through right
                                ______and left horns from all of the following
                                except
                              </td>
                              <td>
                                <button className="btn btn-primary btn-xs">
                                  Edit
                                </button>
                                <button className="btn btn-danger btn-xs">
                                  Delete
                                </button>
                              </td>
                            </tr> */}
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
