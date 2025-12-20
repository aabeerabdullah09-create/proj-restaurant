import Header from "../../components/Header/Header.jsx";
import Restphoto from "../../components/Restphoto/Restphoto.jsx";
import TopTabs from "../../components/TopTabs/TopTabls.jsx";
import Logoo from "../../components/Logo/Logo.jsx";
import Buttontomenu from "../../components/Buttontomenu/Buttontomenu.jsx";
const Mainpage = () =>{
    return(
        <>
       <div className="relative min-h-screen">
           <Restphoto/>
           <div>
               <Header/>
           </div>
           <TopTabs/>
           <Logoo/>
           <div className="absolute bottom-50 left-1/2 transform -translate-x-1/2">
               <Buttontomenu />
           </div>
        </div>
        </>
    );
}
export default Mainpage;