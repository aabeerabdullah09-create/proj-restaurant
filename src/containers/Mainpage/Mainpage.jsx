import Header from "../../components/Header/Header.jsx";
import Restphoto from "../../components/MainComponent/Restphoto/Restphoto.jsx";
import TopTabs from "../../components/TopTabs/TopTabls.jsx";
import Logoo from "../../components/MainComponent/Logo/Logo.jsx";
import Buttontomenu from "../../components/MainComponent/Buttontomenu/Buttontomenu.jsx";
import MenuCards from "../../components/MainComponent/MenuCards/MenuCards.jsx";
const Mainpage = () =>{
    return(
        <>
       <div className="relative min-h-screen">
           <Restphoto/>
           <div>
               <Header/>
           </div>
           <TopTabs/>
           <div>
               <Logoo />
           </div>

           <div className="absolute bottom-60 text-3xl font-serif left-1/2 transform -translate-x-1/2">- WELCOME TO OUR RESTAURENT -</div>
           <div className="absolute bottom-45 left-1/2 transform -translate-x-1/2">
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