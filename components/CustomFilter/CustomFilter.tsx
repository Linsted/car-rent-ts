"use client";

import Image from "next/image";
import { Fragment } from "react";

import { CustomFilterProps } from "@/types";
import { Listbox, Transition } from "@headlessui/react";
import { ICONS_DIMENSIONS, PATHS } from "@/helpers/global/constants/constants";

import { ICON_ALT } from "./constants";
import { useCustomFilter } from "./useCustomFilter";

export default function CustomFilter({ title, options }: CustomFilterProps) {
  const { selected, setSelected, handleUpdateParams } = useCustomFilter({
    title,
    options,
  });

  return (
    <div className="w-fit mt-4">
      <Listbox
        value={selected}
        onChange={(event) => {
          setSelected(event);
          handleUpdateParams(event);
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src={PATHS.CHEVRON_ICON}
              width={ICONS_DIMENSIONS.WIDTH}
              height={ICONS_DIMENSIONS.HEIGHT}
              alt={ICON_ALT}
              className="ml-4 object-contain"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option.title}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
