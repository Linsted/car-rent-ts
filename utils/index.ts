import { URL } from "@/helpers/global/constants/constants";
import { API_KEY_ERROR } from "./constants";

export async function fetchCars() {
  const { API_KEY } = process.env;

  if (API_KEY === undefined) {
    throw new Error(API_KEY_ERROR);
  }

  const headers = {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(URL, { headers });

  const data = await response.json();

  return data;
}
