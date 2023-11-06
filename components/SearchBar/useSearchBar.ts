"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";

import { SearchParams } from "@/types";
import { SEARCH_PARAMS } from "@/helpers/global/constants/constants";

import { TOAST_ERROR_NOTIFICATION } from "./constants";

export default function useSearchBar() {
  const params = useSearchParams();
  const searchParams = new URLSearchParams(params);

  const manufacturerFromParam = searchParams.get(SEARCH_PARAMS.MANUFACTURER);

  const initialManufacturer = manufacturerFromParam
    ? manufacturerFromParam.charAt(0).toUpperCase() +
      manufacturerFromParam.slice(1)
    : "";

  const [manufacturer, setManufacturer] = useState(initialManufacturer);
  const [model, setModel] = useState("");

  const router = useRouter();

  const updateSearchParams = ({ model, manufacturer }: SearchParams) => {
    if (model) {
      searchParams.set(SEARCH_PARAMS.MODEL, model);
    } else {
      searchParams.delete(SEARCH_PARAMS.MODEL);
    }

    if (manufacturer) {
      searchParams.set(SEARCH_PARAMS.MANUFACTURER, manufacturer);
    } else {
      searchParams.delete(SEARCH_PARAMS.MANUFACTURER);
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName, { scroll: false });
  };

  const handleSearch = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (manufacturer === "" && model === "") {
      return toast.error(TOAST_ERROR_NOTIFICATION);
    }

    updateSearchParams({
      model: model.toLowerCase(),
      manufacturer: manufacturer.toLowerCase(),
    });
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setModel(event.target.value);

  return {
    manufacturer,
    model,
    handleInput,
    handleSearch,
    setManufacturer,
  };
}
