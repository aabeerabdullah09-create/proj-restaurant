import Header from "../../components/Header/Header.jsx";
import Restphoto from "../../components/MainComponent/Restphoto/Restphoto.jsx";
import TopTabs from "../../components/TopTabs/TopTabls.jsx";
import Logoo from "../../components/MainComponent/Logo/Logo.jsx";
import Buttontomenu from "../../components/MainComponent/Buttontomenu/Buttontomenu.jsx";
import MenuCards from "../../components/MainComponent/MenuCards/MenuCards.jsx";
const Mainpage = () =>{
    return(
        <>
            <div className="relative h-screen">
                <Restphoto/>
                <div>
                    <Header/>
                </div>
                <div className="absolute top-20 left-4 z-30">
                    <Logoo  />
                </div>

                <div
                    className="relative mt-10 md:mt-5 z-20">
                    <TopTabs />
                </div>
                <div className="absolute top-110 md:top-70 left-1/2 -translate-x-1/2 text-2xl md:text-3xl font-serif
                   text-white z-20 text-center">
                    - WELCOME TO OUR RESTAURANT -
                </div>
                <div>
                    <Buttontomenu />
                </div>

            </div>

            <div id="menu-section">
                <MenuCards />
            </div>
        </>
    );
}
export default Mainpage;