import CarsList from "@/components/CarsList/CarsList";
import Catalogue from "@/components/Catalogue/Catalogue";
import Hero from "@/components/Hero/Hero";
import { fetchCars } from "@/utils";
import { FilterParams } from "@/types";

export default async function Home({
  searchParams,
}: {
  searchParams: FilterParams;
}) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <Catalogue />
      {!isDataEmpty ? (
        <CarsList allCars={allCars} />
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Ooops, no results</h2>
          <p>{allCars?.message}</p>
        </div>
      )}
    </main>
  );
}
