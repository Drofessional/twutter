import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <div className="nav-item">
          <Link to="/"> All Twuuts </Link>
        </div>
        <div className="nav-item">
          <Link to="/new">New Twuut</Link>
        </div>
      </div>
      <div className="navbar-right">
        <div className="nav-item">Log Out</div>
      </div>
    </div>
  );
}

export default Navbar;
