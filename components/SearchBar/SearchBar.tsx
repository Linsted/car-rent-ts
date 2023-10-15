"use client";

import React, { useState } from "react";
import SearchManufacturer from "../SearchManufacturer/SearchManufacturer";

export default function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");

  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__items">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
}
