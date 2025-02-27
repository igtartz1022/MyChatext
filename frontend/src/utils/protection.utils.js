import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const RouteProtection = ({ element }) => {
    const token = Cookies.get("jwt"); // Get token from cookies
    return token ? element : <Navigate to="/" />;
};

export default RouteProtection;
