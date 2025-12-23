import { useEffect, useState } from "react";
import Header from "../../components/Header/Header.jsx";
import StoryHero from "../../components/StoryHero/StoryHero.jsx";
import StoryBlocks from "../../components/StoryBlocks/StoryBlocks.jsx";
import CustomerGrid from "../../components/CustomerGrid/CustomerGrid.jsx";

export default function VanillaStoryPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const res = await fetch("/api/vanilla.json");
        if (!res.ok) throw new Error(`Failed to load: ${res.status}`);
        const json = await res.json();
        if (!ignore) setData(json);
      } catch (e) {
        if (!ignore) setError(e.message || "Unknown error");
      }
    }

    load();
    return () => {
      ignore = true;
    };
  }, []);

  if (error) return <div className="p-6 text-red-400">Error: {error}</div>;
  if (!data) return <div className="p-6">Loading...</div>;

  return (
    <>
      <Header />
      <StoryHero hero={data.hero} />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <StoryBlocks blocks={data.blocks} />
        <CustomerGrid title={data.customerPhotosTitle} photos={data.customerPhotos} />
      </main>
    </>
  );
}
