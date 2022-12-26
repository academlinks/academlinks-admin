import React, { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

const AuthValidate: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const ide = localStorage.getItem("academind_admin_passport")
      ? JSON.parse(localStorage.getItem("academind_admin_passport") || "")
      : null;

    if (!ide && pathname.startsWith("/dashboard"))
      navigate("/", { replace: true });
    else if (ide && !pathname.startsWith("/dashboard"))
      navigate("/dashboard", { replace: true });
  }, [pathname, navigate]);

  return <Outlet />;
};

export default AuthValidate;
