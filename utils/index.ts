import { URL } from "@/helpers/global/constants/constants";
import { API_KEY_ERROR } from "./constants";

export async function fetchCars() {
  const { API_KEY } = process.env;
  let data;

  if (API_KEY === undefined) {
    throw new Error(API_KEY_ERROR);
  }

  const headers = {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  try {
    const response = await fetch(`${URL}?model=corolla`, { headers });

    data = await response.json();
  } catch (error) {
    console.error(error);
  }

  return data;
}
