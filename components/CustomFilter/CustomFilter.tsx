"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, Fragment } from "react";

import { CustomFilterProps, HandleUpdateParams } from "@/types";
import { Listbox, Transition } from "@headlessui/react";
import { ICONS_DIMENSIONS, PATHS } from "@/helpers/global/constants/constants";
import { updateSearchParams } from "@/utils";

import { ICON_ALT } from "./constants";

export default function CustomFilter({ title, options }: CustomFilterProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialParam = searchParams.get(title);
  let initialOptions;

  if (initialParam) {
    initialOptions = { title: initialParam, value: initialParam };
  } else {
    initialOptions = options[0];
  }

  const [selected, setSelected] = useState(initialOptions);

  const handleUpdateParams = (event: HandleUpdateParams) => {
    const { value } = event;

    const newPathName = updateSearchParams({
      title,
      value: value.toLowerCase(),
    });

    router.push(newPathName, { scroll: false });
  };

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
