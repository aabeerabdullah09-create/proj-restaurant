import Header from "../../components/Header/Header.jsx"
import TopTabs from "../../components/TopTabs/TopTabls.jsx";
import Logoo from "../../components/Logo/Logo.jsx";
const Foodpage=()=>{
    return(
        <>
            <Header/>
            <div className="drinks-page">
                <TopTabs/>
                <div className="drinks-content">

                </div>
                <Logoo/>
            </div>



        </>
    );
};
export default Foodpage;