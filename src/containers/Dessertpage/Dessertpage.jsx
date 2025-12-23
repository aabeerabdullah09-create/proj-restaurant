import Header from "../../components/Header/Header.jsx";
import TopTabs from "../../components/TopTabs/TopTabls.jsx";
<<<<<<< HEAD
import Logoo from "../../components/MainComponent/Logo/Logo.jsx";
import DessertButton from "../../components/DessertButton/DessertButton.jsx";
import DessertCategory from "../../components/DessertCategory/DessertCategory.jsx";
=======
import Logoo from "../../components/MainComponent/Logo/Logo.jsx"
const Dessertpage=()=>{
    return(
        <>
            <Header/>
            <div className="drinks-page">
                <div
                    className="relative mt-10 md:mt-5 z-20">
                    <TopTabs />
                </div>
                   <div className="drinks-content">
                </div>
                <div className="absolute top-20 left-4 z-30">
                    <Logoo  />
                </div>
            </div>
>>>>>>> a7b91e07ef1e05aa8a6afc7e92c0696113dd43eb

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
