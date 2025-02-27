import React from "react";
import { useAuthStore } from "../store/auth.store";
import { Link, useNavigate } from "react-router-dom";
import { IoChatbubbleOutline } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";
import { IoHome } from "react-icons/io";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { logout } = useAuthStore();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div>
      <nav className="navbar navbar-light bg-light border-bottom p-1 ">
        <Link
          to="/"
          className=" btn btn-outline-primary"
          href="#"
          style={{ width: "100px" }}
        >
          <IoHome />
        </Link>
        <Link to="/chat" className="btn btn-outline-primary ">
          Chat <IoChatbubbleOutline />
        </Link>
        <button className="btn btn-outline-danger" onClick={handleLogout}>
          <TbLogout2 /> Log Out
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
