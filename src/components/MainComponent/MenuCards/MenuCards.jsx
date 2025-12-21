import { useEffect, useState } from "react";

const MenuCards = () => {
    const [menu, setMenu] = useState([]);
    const fetchMenu = async () => {
        try {
            const res = await fetch(
                "https://mocki.io/v1/714c052a-e2fd-4fdb-9e63-2e413a3611c2"
            );
            const data = await res.json();
            setMenu(data.menus);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        fetchMenu();
    }, []);

    return (
        <section className="px-4 pt-6">
            <h2 className="text-2xl font-bold mb-6 text-center">NEW</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {menu?.map((item, index) => (
                    <div key={index}
                        className="relative border rounded-lg p-4 shadow hover:shadow-lg transition bg-white">
                        <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                           NEW
                        </span>
                        <img src={item.image} alt={item.name} className="mb-3 w-full h-60 object-cover rounded"/>
                        <h3 className="font-semibold text-lg text-black text-center">
                            {item.name}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1 text-center">
                            {item.description}
                        </p>
                        <p className="text-gray-800 font-medium mt-2 text-center">
                            {item.price}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default MenuCards;
