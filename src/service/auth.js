import { callApi } from "./api";

class AuthService {
  logInUser = async (data) =>
    await callApi({ url: "/login/", method: "POST", data });

  getLoggedInUser = async (token) => await callApi({ url: `/login/${token}/` });

  signedInUser = async (data) =>
    await callApi({ url: "/register/", method: "POST", data });

  logOutUser = async (token) =>
    await callApi({ url: `/login/${token}/`, method: "DELETE" });
}
export const authService = new AuthService();
