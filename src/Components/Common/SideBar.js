import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <>
      <nav
        className="navbar-default navbar-static-side white-bg"
        role="navigation"
      >
        <div className="sidebar-collapse">
          <ul className="nav metismenu" id="side-menu">
            <li className="">
              <a href="/admin/dashboard">
                <i className="fa fa-dashboard"></i>
                <span className="nav-label"> Dashboard </span>
              </a>
            </li>

            {/* <li>
              <Link to="/exchange/company/list">
                <i className="fa fa-user"></i>
                <span className="nav-label"> Company </span>
              </Link>
            </li> */}
            <li>
              <Link to="/admin/get-series">
                <i className="fa fa-user"></i>
                <span className="nav-label"> Test Series </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
