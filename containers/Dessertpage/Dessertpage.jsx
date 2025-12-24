import Header from "../../components/Header/Header.jsx"
import TopTabs from "../../components/TopTabs/TopTabls.jsx";
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



        </>
    );
};
export default Dessertpage;