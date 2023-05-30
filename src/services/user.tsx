// Function to get the cookie value by name

import { setCookie } from "../utils/constant";
import Service from "./service";

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<any> {
  try {
    const response = await Service.post("/user/login", { email, password });

    if (response?.data?.data) {
      const { token = "" } = response.data.data;
      setCookie("userToken", token);
      setCookie("userInfo", JSON.stringify(response.data.data));
    }
    return true;
  } catch (error: any) {
    return false;
  }
}
