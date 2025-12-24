import Header from "../../components/Header/Header.jsx"
import TopTabs from "../../components/TopTabs/TopTabls.jsx";
import Logoo from "../../components/MainComponent/Logo/Logo.jsx";
import Drinkcategory from "../../components/Drinkcategory/Drinkcategory.jsx";
import DrinkButton from "../../components/DrinkButton/DrinkButton.jsx";
const Drinkspage=()=>{
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
            <DrinkButton/>
            <hr className="-my-3 border-white/20" />
               <Drinkcategory/>




        </>
    );
};
export default Drinkspage;