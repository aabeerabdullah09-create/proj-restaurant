import { useState, useEffect } from "react";
import FoodCard from "../FoodCard/FoodCard.jsx";

const Foodcategory=()=> {
    const [activeSection, setActiveSection] = useState("BreakFast")
        const [menuData, setMenuData] = useState({});
        const fetchMenuData = async () => {
            try {
                const res = await fetch("https://mocki.io/v1/bff8e067-f755-4fea-a8e6-3de04ab85373");
                const data = await res.json();
                setMenuData(data);
            } catch (err) {
                console.error(err);
            }
        };
    useEffect(() => {
       fetchMenuData();
    }, []);
    if (!menuData || !menuData[activeSection]) {
        return <p className="text-center text-white mt-4">Loading...</p>;
    }
    return (
        <div className="p-0.5">
            <div className="flex gap-5 justify-center mb-3 border-b border-white pb-2">
                {Object.keys(menuData).map((section) => {
                    const isActive = activeSection === section; // متغير بسيط لتحديد النشط
                    return (
                        <button
                            key={section}
                            onClick={() => setActiveSection(section)}
                            className={`w-32 text-base font-medium pb-1 border-b-2 ${
                                isActive ? "border-white text-white" : "border-transparent text-gray-400"
                            }`}
                        >
                            {section}
                        </button>
                    );
                })}

            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {menuData[activeSection].map((item, index) => (
                    <FoodCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
}
export default Foodcategory;