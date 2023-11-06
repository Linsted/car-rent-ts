export const PATHS = Object.freeze({
  HERO_IMAGE: "/hero.png",
  LOGO_IMAGE: "/logo.svg",
  HOME: "/",
  CAR_LOGO: "/car-logo.svg",
  WHEEL: "/steering-wheel.svg",
  TIRE: "/tire.svg",
  GAS: "/gas.svg",
  ARROW: "/right-arrow.svg",
  CLOSE: "/close.svg",
  GLASS: "/magnifying-glass.svg",
  MODEL_ICON: "/model-icon.png",
  CHEVRON_ICON: "/chevron-up-down.svg",
});

export const LOGO_ALT = "Car Hub Logo";

const date = new Date();
export const currentYear = date.getFullYear();

export const LOGO_DIMENSIONS = Object.freeze({
  WIDTH: 118,
  HEIGHT: 18,
});

export const URL_CARS = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars";

export const URL_IMAGES = "https://cdn.imagin.studio/getImage";

export const BUTTONS_TYPES = Object.freeze({
  BUTTON: "button",
  SUBMIT: "submit",
  RESET: "reset",
});

export const ICONS_DIMENSIONS = Object.freeze({
  WIDTH: 20,
  HEIGHT: 20,
});

export const IMAGE_CARD_ALT =
  "Sorry, looks like the API with the images no longer works :(((";

export const ITEMS_PER_PAGE = 10;

export const CATALOGUE_WRAPPER_ID = "discover";

export const SEARCH_PARAMS = Object.freeze({
  MANUFACTURER: "manufacturer",
  MODEL: "model",
});
