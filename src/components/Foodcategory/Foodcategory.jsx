import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FoodCard from "../FoodCard/FoodCard.jsx";
const FoodCategory = () => {
    const { id } = useParams();
    const [category, setCategory] = useState(null);
    const fetchData = async () => {
        try {
            const response = await fetch('https://mocki.io/v1/7d0c1721-3a2e-4392-be3b-45f6e8a1889c');
            const data = await response.json();
            const selectedCategory = data.find(cat => cat.id === id);
            setCategory(selectedCategory || null);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        fetchData();
    }, [id]);
    if (!category) return <p>Loading…</p>;
    return (
        <section className=" pt-4">
            <h2 className="text-3xl font-bold">{category.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category?.items?.map(item => (
                    <FoodCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};
export default FoodCategory;
