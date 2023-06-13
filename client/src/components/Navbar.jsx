import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-left">
        <p><Link to="/">All Twuuts</Link></p>  
        
          <p><Link to="/new">New Twuut</Link></p>
          <div className="navbar-right">
          <p>Log Out</p>  
          </div>
        </div>
    </nav>
  );
}

export default Navbar;