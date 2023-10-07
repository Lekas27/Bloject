import { callApi } from "./api";

class AuthService {
  logInUser = async (data) =>
    await callApi({ url: "/login/", method: "POST", data });

  getLoggedInUser = async (token) => await callApi({ url: `/login/${token}/` });

  getUser = async (id) => await callApi({ url: `/Users/${id}/` });

  editUser = async (id, data) =>
    await callApi({ url: `/Users/${id}/`, method: "PUT", data });

  signedInUser = async (data) =>
    await callApi({ url: "/register/", method: "POST", data });

  logOutUser = async (token) =>
    await callApi({ url: `/login/${token}/`, method: "DELETE" });
}
export const authService = new AuthService();
