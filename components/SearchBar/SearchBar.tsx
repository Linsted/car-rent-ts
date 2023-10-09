"use client";

import React from "react";

export default function SearchBar() {
  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__items"></div>
    </form>
  );
}
