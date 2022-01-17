import { Link } from "react-router-dom";
import { NavBar } from "../Common/NavBar";
import { SideBar } from "../Common/SideBar";

export const TestSeriesOptions = () => {
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
                      <h2 className="card-title"> Answer Options</h2>
                      <Link to="/admin/add-series" className="btn btn-info">
                        {" "}
                        Add{" "}
                      </Link>
                    </div>

                    <div className="full-height-scroll">
                      <div className="table-responsive">
                        <table className="table table-striped table-hover">
                          <thead>
                            <tr>
                              <th> Options </th>
                              <th> Action </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Option 1</td>
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
                              <td>Option 2</td>
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
                              <td>Option 3</td>
                              <td>
                                <button className="btn btn-primary btn-xs">
                                  Edit
                                </button>
                                <button className="btn btn-danger btn-xs">
                                  Delete
                                </button>
                              </td>
                            </tr>
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
