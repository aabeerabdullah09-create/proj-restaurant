import { useEffect, useState } from "react";

const MenuCards=()=> {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch("https://mocki.io/v1/714c052a-e2fd-4fdb-9e63-2e413a3611c2")
            .then((res) => res.json())
            .then((data) => {
                setMenu(data.menus);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="p-2 bg-black-100">
            <h1 className="text-3xl mb-6 text-center">NEW</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {menu.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md p-1 flex flex-col items-center relative hover:scale-105 transition-transform">
                        <div className="absolute top-2 left-2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center z-10">
                            <span className="text-white text-xs font-bold">NEW</span>
                        </div>
                        <div className="w-full h-90 flex items-center justify-center overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                            />
                        </div>

                        <h2 className="text-xl font-semibold mb-2 text-black">{item.name}</h2>
                        <p className="text-gray-700 text-10">{item.description}</p>
                        <p className="text-gray-700 text-2">{item.price}</p>
                    </div>

                ))}
            </div>
        </div>
    );
}
export default MenuCards;