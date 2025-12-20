import { NavLink } from "react-router-dom";
export default function TopTabs() {
  return (
    <div className="flex justify-center gap-7 py-3">
        <NavLink
            to="/Mainpage"
            className={({ isActive }) =>
                isActive
                    ? "text-white text-sm font-medium border-b-2 border-white pb-1"
                    : "text-gray-300 text-sm"
            }
        >
            Home
        </NavLink>
      <NavLink
        to="/Foodpage"
        className={({ isActive }) =>
          isActive
            ? "text-white text-sm font-medium border-b-2 border-white pb-1"
            : "text-gray-300 text-sm"
        }
      >
        Food
      </NavLink>

      <NavLink
        to="/Drinkspage"
        className={({ isActive }) =>
          isActive
            ? "text-white text-sm font-medium border-b-2 border-white pb-1"
            : "text-gray-300 text-sm"
        }
      >
        Drinks
      </NavLink>

      <NavLink
        to="/Dessertpage"
        className={({ isActive }) =>
          isActive
            ? "text-white text-sm font-medium border-b-2 border-white pb-1"
            : "text-gray-300 text-sm"
        }
      >
        Dessert
      </NavLink>


    </div>
  );
}