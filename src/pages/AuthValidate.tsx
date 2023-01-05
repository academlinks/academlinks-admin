import React, { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

const AuthValidate: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isAuth = useAppSelector(({ admin }) => admin.isAuthenticated);

  useEffect(() => {
    const ide = localStorage.getItem("academind_admin_passport")
      ? JSON.parse(localStorage.getItem("academind_admin_passport") || "")
      : "";

    if (!ide && pathname.startsWith("/dashboard"))
      navigate("/", { replace: true });
    else if (ide && !pathname.startsWith("/dashboard"))
      navigate("/dashboard", { replace: true });
  }, [pathname, navigate, isAuth]);

  return <Outlet />;
};

export default AuthValidate;
