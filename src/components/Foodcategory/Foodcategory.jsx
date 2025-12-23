import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FoodCard from "../FoodCard/FoodCard.jsx";

const FoodCategory = () => {
    const { id } = useParams();
    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(true);


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
    useEffect(() => {
        fetchData();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!category) return <p>No data</p>;

    return (
        <section className="py-10 px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
                {category.title}
            </h2>
            {category.servingTime && (
             <p className="text-center text-gray-500 mb-6">
                {category.servingTime}
            </p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.items.map(item => (
                    <FoodCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};
export default FoodCategory;
