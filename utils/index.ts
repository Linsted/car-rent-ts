import { URL_CARS, URL_IMAGES } from "@/helpers/global/constants/constants";
import { API_KEY_ERROR } from "./constants";
import {
  calculateCarRentArgs,
  generateCarImageUrlArgs,
  URLSearchParameters,
  FilterParams,
} from "@/types";

export async function fetchCars(filter: FilterParams) {
  const { API_KEY } = process.env;
  let data;
  const { manufacturer, year, fuel, limit, model } = filter;

  if (API_KEY === undefined) {
    throw new Error(API_KEY_ERROR);
  }

  const headers = {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const fullURL = `${URL_CARS}?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}&`;

  try {
    const response = await fetch(fullURL, { headers });

    data = await response.json();
  } catch (error) {
    console.error(error);
  }

  return data;
}

export const calculateCarRent = ({
  city_mpg,
  year,
}: calculateCarRentArgs): string => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

function appendSearchParamsToURL({
  url,
  make,
  model,
  year,
  angle,
}: URLSearchParameters) {
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);
}

export function generateCarImageUrl({ car, angle }: generateCarImageUrlArgs) {
  const url = new URL(URL_IMAGES);

  const { make, year, model } = car;

  appendSearchParamsToURL({ url, make, model, year, angle });

  return String(url);
}
