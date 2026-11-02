import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { changePassword as changePasswordApi, login as loginApi, signup as signupApi } from "../api/Auth/api.ts";
import type { User } from "../types";
import type { ChangePasswordReq, LoginDataReq, RegisterDataReq } from "../api/Auth/types.ts";
import { getProfile } from "../api/Profile/api.ts";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  // No token = nothing to restore, so we start unloaded already
  const [loading, setLoading] = useState(() => Boolean(localStorage.getItem("token")));

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    let cancelled = false;
    getProfile()
      .then((res) => {
        if (!cancelled) setUser(res.data);
      })
      .catch(() => {
        localStorage.removeItem("token");
        if (!cancelled) setUser(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const login = async (credentials: LoginDataReq) => {
    const res = await loginApi(credentials);
    if (!res.data?.token) throw new Error(res.message || "Login failed");
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
  };

  const signup = async (data: RegisterDataReq) => {
    const res = await signupApi(data);
    if (!res.data?.token) throw new Error(res.message || "Signup failed");
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
  };

  const changePassword = async (body: ChangePasswordReq) => {
    const res = await changePasswordApi(body);
    if (!res.data?.token) throw new Error(res.message || "Password change failed");
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, loading, login, signup, logout, changePassword }}>{children}</AuthContext.Provider>;
}
