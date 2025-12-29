import Header from "../../Component/Header/Header.jsx"
import TopTabs from "../../Component/TopTabs/TopTabls.jsx";
import Logoo from "../../Component/Logo/Logo.jsx";
import Foodcategory from "../../Component/Foodcategory/Foodcategory.jsx";
import FoodButton from "../../Component/FoodButton/FoodButton.jsx";
const Foodpage=()=>{
    return(
        <>
                <Header/>
            <div
                className="relative mt-10 md:mt-4 z-20">
                <TopTabs />
            </div>
            <div className="absolute top-20 left-4 z-30">
                <Logoo  />
            </div>
            <FoodButton/>
            <hr className="-my-3 border-white/20" />
               <Foodcategory/>




        </>
    );
};
export default Foodpage;