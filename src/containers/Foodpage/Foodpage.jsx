import Header from "../../components/Header/Header.jsx"
import TopTabs from "../../components/TopTabs/TopTabls.jsx";
import Logoo from "../../components/MainComponent/Logo/Logo.jsx";
import Foodcategory from "../../components/Foodcategory/Foodcategory.jsx";
import FoodButton from "../../components/FoodButton/FoodButton.jsx";
const Foodpage=()=>{
    return(
        <>
                <Header/>
                <TopTabs/>
                <Logoo/>
            <FoodButton/>
            <hr className="-my-3 border-white/20" />
               <Foodcategory/>




        </>
    );
};
export default Foodpage;