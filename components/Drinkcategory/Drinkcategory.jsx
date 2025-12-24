import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DrinkCard from "../DrinkCard/DrinkCard.jsx";

const DrinkCategory = () => {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://mocki.io/v1/${id}`);
        const data = await res.json();
        setCategory(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!category || !category.items) {
    return <p className="text-center mt-10">No data</p>;
  }

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        {category.title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {category.items.map(item => (
          <DrinkCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default DrinkCategory;