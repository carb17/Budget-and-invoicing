import { InstanciaAxios } from "./InstanciaAxios";
import { LoginProps } from "../props/login props/LoginProps";

export const loginService = async (email: string, password: string) => {
  try {
    const response = await InstanciaAxios.post<LoginProps>("/users/login", {
      email: email.trim(),
      password: password,
    });
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
