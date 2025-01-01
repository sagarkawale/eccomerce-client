import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Spin from "../Spin";
import { useAuth } from "../../context/Auth";
import { apiRequest } from "../../utils/apiRequest";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await apiRequest.get("/api/auth/user-auth");
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spin />;
}
