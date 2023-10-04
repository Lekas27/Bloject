import { callApi } from "./api";

class AuthService {
  getLoggedInUser = async (data) =>
    await callApi({ url: "/login/", method: "POST", data });
  signedInUser = async (data) =>
    await callApi({ url: "/register/", method: "POST", data });
}

export const authService = new AuthService();
