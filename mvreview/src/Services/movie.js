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
export async function getAllReviews() {
  try {
    const url = `${config.server}/user/home`;

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getMyReviews(id) {
  try {
    const url = `${config.server}/user/home`;
    const body = {
      user_id: id,
    };
    const response = await axios.get(url, body);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
