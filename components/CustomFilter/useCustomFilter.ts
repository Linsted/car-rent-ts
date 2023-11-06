import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { CustomFilterProps, HandleUpdateParams } from "@/types";
import { updateSearchParams } from "@/utils";

export function useCustomFilter({ title, options }: CustomFilterProps) {
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

  return { selected, setSelected, handleUpdateParams };
}
