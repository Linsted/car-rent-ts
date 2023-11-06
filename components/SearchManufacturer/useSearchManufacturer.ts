import { manufacturers } from "@/helpers/global/data/data";
import { useState } from "react";
import { REGEX_SPACE } from "./constants";

export default function useSearchManufacturer() {
  const [query, setQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(event.target.value);

  const filteredManufactures =
    query === ""
      ? manufacturers
      : manufacturers.filter((manufacturer) =>
          manufacturer
            .toLowerCase()
            .replace(REGEX_SPACE, "")
            .includes(query.toLowerCase().replace(REGEX_SPACE, ""))
        );

  return {
    filteredManufactures,
    handleChange,
    query,
    setQuery,
  };
}
