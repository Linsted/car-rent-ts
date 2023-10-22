export const PATHS = Object.freeze({
  HERO_IMAGE: "/hero.png",
  LOGO_IMAGE: "/logo.svg",
  HOME: "/",
  CAR_LOGO: "/car-logo.svg",
  WHEEL: "/steering-wheel.svg",
  TIRE: "/tire.svg",
  GAS: "/gas.svg",
  ARROW: "/right-arrow.svg",
});

export const LOGO_ALT = "Car Hub Logo";

const date = new Date();
export const currentYear = date.getFullYear();

export const LOGO_DIMENSIONS = Object.freeze({
  WIDTH: 118,
  HEIGHT: 18,
});

export const URL = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars";

export const BUTTONS_TYPES = Object.freeze({
  BUTTON: "button",
  SUBMIT: "submit",
  RESET: "reset",
});

export const ICONS_DIMENSIONS = Object.freeze({
  WIDTH: 20,
  HEIGHT: 20,
});
