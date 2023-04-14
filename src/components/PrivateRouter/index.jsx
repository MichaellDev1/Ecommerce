import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const user = undefined;

export default function PrivateRouter() {
  if (user == undefined) {
    return <Navigate to={"/login"} />;
  }
  return <Outlet />;
}
