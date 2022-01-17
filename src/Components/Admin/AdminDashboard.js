import { Link } from "react-router-dom";
import { NavBar } from "../Common/NavBar";
import { SideBar } from "../Common/SideBar";

export const AdminDashboard = () => {
  return (
    <>
      <NavBar></NavBar>
      <div id="wrapper">
        <SideBar></SideBar>

        <div id="page-wrapper" className="gray-bg dashbard-1">
          <div className="row wrapper border-bottom white-bg page-heading bg-white">
            <div className="col-md-3">
              <div className="media custom-widget widget-1">
                <picture className="mr-3">
                  <span className="material-icons">check_circle_outline</span>
                </picture>
                <div className="media-body">
                  <h5 className="mt-0 mb-1"> Rs.0.00 </h5>
                  <p> Total Amount Invested </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="media  custom-widget widget-2">
                <picture className="mr-3">
                  <span className="material-icons">price_check</span>
                </picture>
                <div className="media-body">
                  <h5 className="mt-0 mb-1"> Rs.0.00 </h5>
                  <p> Total Earnings </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="media custom-widget widget-3">
                <picture className="mr-3">
                  <span className="material-icons">post_add</span>
                </picture>
                <div className="media-body">
                  <h5 className="mt-0 mb-1"> 0 </h5>
                  <p> Properties Invested </p>
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper wrapper-content">
            <div className="wrapper-card">
              <div className="row">
                <div className="col-md-12">
                  <h2> Ongoing investments </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="ibox">
                    <div className="ibox-content">
                      <div className="no-data text-center pt-4 pb-4">
                        <img src="img/no-data.svg" alt="j" />
                        <h4 className="mt-4"> No data to Display </h4>
                        <p> There is nothing to display here yet </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="wrapper-card">
              <div className="row">
                <div className="col-md-6">
                  <div className="col-md-12">
                    <h2> By Location </h2>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="ibox">
                        <div className="ibox-content">
                          <canvas
                            id="doughnutChart2"
                            width="80"
                            height="80"
                            style={{ margin: "18px auto 0" }}
                          ></canvas>
                          <h5 className="text-center"> Total Investment </h5>

                          <ul className="list-group clear-list m-t">
                            <li className="list-group-item fist-item">
                              <span className="float-right">0</span>
                              <span className="label label-success">
                                1
                              </span>{" "}
                              Kathmandu
                            </li>
                            <li className="list-group-item">
                              <span className="float-right">0</span>
                              <span className="label label-info">2</span>{" "}
                              Bhaktapur
                            </li>
                            <li className="list-group-item">
                              <span className="float-right">0</span>
                              <span className="label label-primary">
                                3
                              </span>{" "}
                              Lalitpur
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="col-md-12">
                    <h2> By Assets Type </h2>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="ibox">
                        <div className="ibox-content">
                          <canvas
                            id="doughnutChart"
                            width="80"
                            height="80"
                            style={{ margin: "18px auto 0" }}
                          ></canvas>
                          <h5 className="text-center">Total Investment</h5>
                          <ul className="list-group clear-list m-t">
                            <li className="list-group-item fist-item">
                              <span className="float-right">0</span>
                              <span className="label label-success">
                                1
                              </span>{" "}
                              Investment
                            </li>
                            <li className="list-group-item">
                              <span className="float-right">0</span>
                              <span className="label label-info">2</span>{" "}
                              Commission
                            </li>
                            <li className="list-group-item">
                              <span className="float-right">0</span>
                              <span className="label label-primary">
                                3
                              </span>{" "}
                              Refer
                            </li>
                          </ul>
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
