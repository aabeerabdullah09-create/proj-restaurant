
import { NavLink } from "react-router-dom";
const DrinkButton = () => {
  const linkClasses = ({ isActive }) =>
    `text-white text-sm hover:text-gray-300 transition ${
      isActive ? "border-b-2 border-white" : ""
    }`;

  return (
    <nav className="flex flex-wrap justify-center gap-6 mt-2 mb-6">
      <NavLink to="/Drinkspage/6513012c-768a-41fc-83f0-d0095c8f14bb" className={linkClasses}>Espresso</NavLink>
      <NavLink to="/Drinkspage/8b92f5b8-6554-42e8-a684-a59a018172c9" className={linkClasses}>Hot Baverages</NavLink>
      <NavLink to="/Drinkspage/75b27c79-faa1-48a6-8504-58c730ae3e96" className={linkClasses}>Iced Espresso</NavLink>
      
    </nav>
  );
};

export default DrinkButton;
