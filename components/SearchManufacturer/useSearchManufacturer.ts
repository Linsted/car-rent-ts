import { manufacturers } from "@/helpers/global/data/data";
import React, { useState } from "react";

export default function useSearchManufacturer(manufacturer: string) {
  const [query, setQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(event.target.value);

  const filteredManufactures =
    query === ""
      ? manufacturers
      : manufacturers.filter((manufacturer) =>
          manufacturer
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return { filteredManufactures, handleChange, query, setQuery };
}
