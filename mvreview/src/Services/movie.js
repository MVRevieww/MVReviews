import axios from "axios";
import { config } from "./config";

export async function getmovies() {
  try {
    const url = `${config.server}/user/home`;

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
