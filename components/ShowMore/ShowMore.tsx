"use client";

import { useRouter } from "next/navigation";

import { ShowMoreProps } from "@/types";
import { updateSearchParams } from "@/utils";
import { ITEMS_PER_PAGE } from "@/helpers/global/constants/constants";

import Button from "../Button/Button";
import { BUTTON_TITLE, LIMIT_PARAM } from "./constants";

export default function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * ITEMS_PER_PAGE;

    const newPathName = updateSearchParams({
      title: LIMIT_PARAM,
      value: String(newLimit),
    });

    router.push(newPathName, { scroll: false });
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <Button
          title={BUTTON_TITLE}
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
}
