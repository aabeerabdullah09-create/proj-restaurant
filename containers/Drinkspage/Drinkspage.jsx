import Header from "../../components/Header/Header.jsx"
import TopTabs from "../../components/TopTabs/TopTabls.jsx";
import Logoo from "../../components/MainComponent/Logo/Logo.jsx";
import DrinkCard from "../../components/DrinkCard/DrinkCard.jsx";
import DrinkButton from "../../components/DrinkButton/DrinkButton.jsx";
import DrinkCategory from "../../components/Drinkcategory/Drinkcategory.jsx";


const Drinkspage=()=>{
    return(
        <>
                <Header/>
            <div
                className="relative mt-10 md:mt-4 z-20">
                <TopTabs/>
            </div>
            <div className="absolute top-20 left-4 z-30">
                <Logoo/>
            </div>
            <DrinkButton/>
            <hr className="-my-3 border-white/20" />
               <DrinkCategory/>
               




        </>
    );
};
export default Drinkspage;
