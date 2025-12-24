import Header from "../../components/Header/Header.jsx";
import TopTabs from "../../components/TopTabs/TopTabls.jsx";
import Logoo from "../../components/MainComponent/Logo/Logo.jsx";
import DessertButton from "../../components/DessertButton/DessertButton.jsx";
import DessertCategory from "../../components/DessertCategory/DessertCategory.jsx";

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
