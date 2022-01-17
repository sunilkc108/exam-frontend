import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../Common/NavBar";

export const Result = function () {
  const { seriesId } = useParams();
  const [result, setResult] = useState({});
  useEffect(() => {
    Axios.get(`http://localhost:5055/student/test-result/${seriesId}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        // console.log(res.data);
        setResult(res.data);
      })
      .catch((err) => {
        console.log("eror", err);
      });
  }, []);

  return (
    <>
      <NavBar />
      <div id="wrapper">
        <div id="page-wrapper" className="gray-bg dashbard-1">
          <div className="wrapper wrapper-content">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="row mb-2">
                  <div className="col-md-12">
                    <div className="ibox time-wrapper">
                      <div className="ibox-content no-items text-center p-2">
                        <div className="update-kyc-msg">
                          <h5 className="text-white">
                            {" "}
                            <i className="fas fa-clock"> </i> Test Result
                          </h5>
                          {/* <h3 className="text-white"> h:1m:32</h3> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="ibox quiz-wrapper">
                      <div className="ibox-content">
                        <div>
                          <p>Total Questions:{result?.allAnswers}</p>
                          <p>CorrectAnswers:{result?.correctAnswers} </p>
                        </div>
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
