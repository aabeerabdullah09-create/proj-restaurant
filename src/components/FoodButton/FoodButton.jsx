import { NavLink } from "react-router-dom";

const FoodButton = () => {
    const linkClasses = ({ isActive }) =>
        `text-white text-s hover:text-gray-300 transition ${isActive ? "border-b-2 border-white" : ""
        }`;
    return (
        <nav className="flex justify-center mt-0 mb-6 gap-6">
            <NavLink to="/Foodpage/breakfast" className={linkClasses}>
                Breakfast
            </NavLink>
            <NavLink to="/Foodpage/mankosha" className={linkClasses}>
                Mankosha
            </NavLink>
            <NavLink to="/Foodpage/healthy-meal" className={linkClasses}>
                Healthy Meal
            </NavLink>
            <NavLink to="/Foodpage/pasta" className={linkClasses}>
                Pasta
            </NavLink>
        </nav>
    );
};

export default FoodButton;
