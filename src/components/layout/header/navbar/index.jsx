import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../images/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import capitalizeFirstLetter from "../../../../utils/capitalize-word";

function Navbar() {
  const history = useNavigate();
  const location = useLocation();

  const path = location.pathname.split("/");
  path.shift();

  return (
    <nav className='navbar'>
      <span className='d-flex align-items-center'>
        <Link to='/' className='left-side-logo'>
          <img src={logo} alt='sikayet-var-logo' />
        </Link>
        <span className='path'>
          {path?.map(
            (x, i) => `${i > 0 ? ` ` : ""}${capitalizeFirstLetter(x)}`
          )}
        </span>
      </span>
      <div>
        <button onClick={() => history("/")} className='btn login-btn'>
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
