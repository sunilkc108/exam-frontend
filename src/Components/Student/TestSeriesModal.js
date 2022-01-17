import { Link } from "react-router-dom";

export const TestSeriesModal = function (prop) {
  return prop.series.map((ser) => {
    return (
      <div
        className="modal inmodal fade"
        id={`viewInterest-${ser._id}`}
        tabIndex="-1"
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-dialog modal-md custom-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">
                {" "}
                Please follow the given instruction before start!
              </h4>
            </div>
            <div className="modal-body bg-white">
              <div className="instructions">
                <ul className="style-unstyled">
                  <li className="mb-2">
                    <span>You are about to start test series.</span>
                  </li>
                  <li className="mb-2">
                    <span>The test is Free for all Users.</span>
                  </li>
                  <li className="mb-2">
                    <span>
                      To answer a question, Click on option bottom and submit
                    </span>
                  </li>
                  .
                  <li className="mb-2">
                    <span>
                      The test consists of most improtant questions from all
                      subject as the real exam.
                    </span>
                  </li>
                  <li className="mb-2">
                    <span>The time limit is shown in the sidebar.</span>
                  </li>
                  <li className="mb-2">
                    <span>Assessment based on subjectwise.</span>
                  </li>
                  <li className="mb-2">
                    <span>
                      please review your answers after completing the test.
                    </span>
                  </li>
                </ul>

                <h3 className="text-center mb-1"> Best of Luck!</h3>
                <p className="mt-2 text-center">
                  {" "}
                  <span>
                    {" "}
                    By Clicking Next, I agree to above Terms and Conditions.
                  </span>{" "}
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <Link
                to={`/test-series/questions/${ser._id}`}
                className="btn btn-secondary"
              >
                Next
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  });
};
