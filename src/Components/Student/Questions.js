import Axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { NavBar } from "../Common/NavBar";

export const Questions = function () {
  const { seriesId } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQn, setCurrentQn] = useState(0);
  const [currentQnOptions, setCurrentQuestionOptions] = useState([]);
  const [data, setData] = useState({ time: {}, seconds: 5400 });
  const [selectedOpt, setSelectedOpt] = useState("");
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:5055/admin/series-questions/${seriesId}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        setQuestions(res.data);

        //getting first option
        if (res.data.length > 0) {
          console.log(res.data[0].series, res.data[0]?._id);
          Axios.get(
            `http://localhost:5055/admin/series-questions/${res.data[0].series}/${res.data[0]?._id}`,
            {
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                Authorization: localStorage.getItem("token"),
              },
            }
          )
            .then((res1) => {
              console.log(res.data);
              setCurrentQuestionOptions(res1.data);
            })
            .catch((err) => {
              console.log("error", err);
            });
        }
      })

      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  const secondsToTime = (secs) => {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  };
  const countDown = () => {
    let newSeconds = data.seconds - 1;
    setData({
      ...data,
      time: secondsToTime(data.seconds),
      seconds: newSeconds,
    });
  };

  // const startTimer = () => {
  //   setInterval(countDown, 1000);
  // };
  // useEffect(()=>{
  //   startTimer();
  //   return ()=>{
  //     clearInterval()
  //   }
  // })
  const nextQuestion = () => {
    if (currentQn + 1 < questions.length) {
      setAnswers([
        ...answers,
        {
          series: questions[currentQn].series,
          question: questions[currentQn]._id,
          option: selectedOpt,
        },
      ]);
      setSelectedOpt("");
      setCurrentQn(currentQn + 1);
      Axios.get(
        `http://localhost:5055/admin/series-questions/${
          questions[currentQn + 1].series
        }/${questions[currentQn + 1]?._id}`,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: localStorage.getItem("token"),
          },
        }
      )
        .then((res1) => {
          setCurrentQuestionOptions(res1.data);
        })
        .catch((err) => {
          console.log("error", err);
        });
    } else if (currentQn + 1 === questions.length) {
      setAnswers([
        ...answers,
        {
          series: questions[currentQn].series,
          question: questions[currentQn]._id,
          option: selectedOpt,
        },
      ]);
      //submitting data to db
      Axios.post(
        `http://localhost:5055/student/submit-answer`,
        {
          answers: [
            ...answers,
            {
              series: questions[currentQn].series,
              question: questions[currentQn]._id,
              option: selectedOpt,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: localStorage.getItem("token"),
          },
        }
      )
        .then((res) => {
          navigate(`/student/test-result/${seriesId}`);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const handleSelectedOption = (optId) => {
    setSelectedOpt(optId);
  };
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
                            <i className="fas fa-clock"> </i> Remaining Time
                          </h5>
                          <h3 className="text-white"> h:1m:32</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="ibox quiz-wrapper">
                      <div className="ibox-content">
                        <div className="quiz-header">
                          <h5>
                            {" "}
                            <span>{currentQn + 1} </span> of {questions?.length}
                          </h5>
                          <h2>{questions && questions[currentQn]?.title}</h2>
                        </div>
                        <div className="quiz-body">
                          <div className="answer-options">
                            {currentQnOptions.map((opt, i) => {
                              return (
                                <div key={i} className="option-list">
                                  <a
                                    href="javascript:;"
                                    className={`d-flex justify-content-between ${
                                      selectedOpt === opt._id
                                        ? "btn btn-primary"
                                        : ""
                                    }`}
                                    onClick={() => {
                                      handleSelectedOption(opt?._id);
                                    }}
                                  >
                                    <span>
                                      {i + 1}.{opt.text}
                                    </span>
                                  </a>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div className="quiz-footer text-right">
                          <div className="btn-quiz">
                            <button
                              onClick={nextQuestion}
                              className="btn btn-secondary"
                            >
                              <i className="fa fa-arrow-right mr-2"> </i>
                              {currentQn + 1 === questions?.length
                                ? "Submit"
                                : "Next Question"}
                            </button>
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
      </div>
    </>
  );
};
