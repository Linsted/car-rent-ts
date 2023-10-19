import React from "react";

import SearchBar from "../SearchBar/SearchBar";
import CustomFilter from "../CustomFilter/CustomFilter";
import { HINT, MAIN_TITLE } from "./constants";

export default function Catalogue() {
  return (
    <div className="mt-12 padding-x padding-y max-width  " id="discover">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">{MAIN_TITLE}</h1>
        <p>{HINT}</p>
      </div>
      <div className="home_filters">
        <SearchBar />
        <div className="home__filter-container">
          <CustomFilter title="fuel" />
          <CustomFilter title="fuel" />
        </div>
      </div>
    </div>
  );
}
