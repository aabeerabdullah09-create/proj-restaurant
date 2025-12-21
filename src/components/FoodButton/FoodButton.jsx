import { NavLink } from "react-router-dom";

const FoodButton = () => {
    const linkClasses = ({ isActive }) =>
        `text-white text-s hover:text-gray-300 transition ${isActive ? "border-b-2 border-white" : ""
        }`;
    return (
        <nav className="flex justify-center mt-0 mb-6 gap-6">
            <NavLink to="/Foodpage/155b70ff-c170-4f9c-a79f-ba722045b3cf" className={linkClasses}>
                Breakfast
            </NavLink>
            <NavLink to="/Foodpage/1be148d3-9dde-4055-b62e-908976e97b31" className={linkClasses}>
                Mankosha
            </NavLink>
            <NavLink to="/Foodpage/dbf31718-df8c-4656-ab1f-c2af0c5fba3b" className={linkClasses}>
                Healthy Meal
            </NavLink>
            <NavLink to="/Foodpage/fc9eb90d-1e17-42d8-848e-4b3824fd4be3" className={linkClasses}>
                Pasta
            </NavLink>
        </nav>
    );
};

export default FoodButton;
