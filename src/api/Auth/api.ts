import { api } from "../client.ts";
import type { AuthResponse, ChangePasswordReq, LoginDataReq, RegisterDataReq } from "./types.ts";

// ================= Auth =================
// POST /users/signup — create account
export async function signup(registerData: RegisterDataReq): Promise<AuthResponse> {
  const { data } = await api.post<AuthResponse>("/users/signup", registerData);
  return data;
}
// POST /users/signin — login, returns the token
export async function login(credentials: LoginDataReq): Promise<AuthResponse> {
  const { data } = await api.post<AuthResponse>("/users/signin", credentials);
  return data;
}
// PATCH /users/change-password — returns a NEW token, save it again on success
export async function changePassword(body: ChangePasswordReq): Promise<AuthResponse> {
  const { data } = await api.patch<AuthResponse>("/users/change-password", body);
  return data;
}
