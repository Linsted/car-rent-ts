import React from "react";

export default function Catalogue() {
  return (
    <div className="mt-12 padding-x padding-y max-width  " id="discover">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        <p>Explore out cars you might like</p>
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
