import axios from "axios";
import { config } from "./config";

export async function register(
  firstName,
  lastName,
  email,
  password,
  phone,
  birth
) {
  try {
    const url = `${config.server}/user/signup`;

    const body = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      mobile: phone,
      birth,
    };

    const response = await axios.post(url, body);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function login(email, password) {
  try {
    const url = `${config.server}/user/login`;
    const body = { email, password };

    const response = await axios.post(url, body);

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
