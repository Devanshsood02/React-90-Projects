import React from "react";
import logo from "../assets/react.svg";
import { Link,useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul>
        <Link to='/'>
          {" "}
          <li>Home</li>
        </Link>
        <Link to='/products'>
          {" "}
          <li>Products</li>
        </Link>
        <Link to='/about'>
          {" "}
          <li>About</li>
        </Link>
        <Link to='/contact'>
          <li>Contact</li>
        </Link>
      </ul>
      <button onClick={()=>(navigate("/about",{replace:true}))}>Get Started</button>
    </div>
  );
};

export default Navbar;
