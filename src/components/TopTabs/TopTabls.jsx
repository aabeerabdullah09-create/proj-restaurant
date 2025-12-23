import { NavLink } from "react-router-dom";
const TopTabs=()=> {
    const scrollToMenu = () => {
        const section = document.getElementById("menu-section");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
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
        to="/Foodpage/155b70ff-c170-4f9c-a79f-ba722045b3cf"
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
        <NavLink to="/Home" onClick={scrollToMenu} className="text-gray-300 text-sm font-medium hover:text-white">
            NEW
        </NavLink>

        <NavLink
        to="/VanillaStoryPage"
        className={({ isActive }) =>
          isActive
            ? "text-white text-sm font-medium border-b-2 border-white pb-1"
            : "text-gray-300 text-sm"
        }
      >
        Our Story
      </NavLink>
        </div>
<<<<<<< HEAD
  );
}
export default TopTabs;
=======
        );
      }
export default TopTabs;
>>>>>>> a7b91e07ef1e05aa8a6afc7e92c0696113dd43eb
