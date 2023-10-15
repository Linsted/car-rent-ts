import React, { Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";

import { TRANSITION_OPTIONS } from "./constants";
import { FilteredManufacturesListProps } from "@/types";

export default function FilteredManufacturesList({
  filteredManufactures,
  query,
  setQuery,
}: FilteredManufacturesListProps) {
  return (
    <Transition
      as={Fragment}
      leave={TRANSITION_OPTIONS.LEAVE}
      leaveFrom={TRANSITION_OPTIONS.LEAVE_FROM}
      leaveTo={TRANSITION_OPTIONS.LEAVE_TO}
      afterLeave={() => setQuery("")}
    >
      <Combobox.Options>
        {filteredManufactures.length === 0 && query !== "" ? (
          <Combobox.Option
            value={query}
            className="search-manufacturer__option"
          >
            Can`t find "{query}"
          </Combobox.Option>
        ) : (
          filteredManufactures.map((manufacturer) => (
            <Combobox.Option
              key={manufacturer}
              className={({ active }) =>
                `relative search-manufacturer__option ${
                  active ? "bg-primary-blue text-white" : "text-gray-900"
                }  `
              }
              value={manufacturer}
            >
              {manufacturer}
            </Combobox.Option>
          ))
        )}
      </Combobox.Options>
    </Transition>
  );
}
