import Header from "../../Component/Header/Header.jsx";
import TopTabs from "../../Component/TopTabs/TopTabls.jsx";
import Logoo from "../../Component/Logo/Logo.jsx";
import DessertButton from "../../Component/DessertButton/DessertButton.jsx";
import DessertCategory from "../../Component/DessertCategory/DessertCategory.jsx";

const Dessertpage = () => {
  return (
    <>
      <Header />
      <TopTabs />
      <Logoo />
      <DessertButton />
      <hr className="-my-3 border-white/20" />
      <DessertCategory />
    </>
  );
};

export default Dessertpage;
