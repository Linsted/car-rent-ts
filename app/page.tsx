import Catalogue from "@/components/Catalogue/Catalogue";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Catalogue />
    </main>
  );
}
