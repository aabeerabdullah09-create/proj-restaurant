import Location from "../Location/Location.jsx";
import Callus from "../Callus/Callus.jsx";
import OurSocial from "../OurSocial/OurSocial.jsx";
const Header = () => {
    return(
        <>
        <div>
          <Location/>
        </div>
          <div>
              <Callus/>
              <OurSocial/>
          </div>
            <hr className="my-1 border-white/20" />
        </>
    )
}
export default Header;