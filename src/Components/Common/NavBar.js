import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const NavBar = (props) => {
  const navigate = useNavigate();
  function handleLogOut() {
    localStorage.clear();
    navigate("/login");
  }
  return (
    <>
      <div id="top-nav-wrapper">
        <div className="container-fluid">
          <nav
            className="navbar navbar-static-top bg-white"
            role="navigation"
            style={{ marginBottom: 0 }}
          >
            <a href="/" className="navbar-brand">
              <img
                src="/img/brand-logo.png"
                alt="Rexnepal-logo"
                height="65px"
              />
            </a>

            <ul className="nav navbar-top-links navbar-right">
              <li>
                <a href="investment.html">{props.title}</a>
              </li>
              <li>
                <a href="/">{props.about}</a>
              </li>

              <li>
                <a href="javascript:;" onClick={handleLogOut}>
                  {props.logout} <i className="fa fa-sign-out"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

NavBar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  logout: PropTypes.string,
};

NavBar.defaultProps = {
  title: "Home",
  about: "About",
  logout: "LogOutt",
};
