import Location from "../Location/Location.jsx";
import Callus from "../Callus/Callus.jsx";
import OurSocial from "../OurSocial/OurSocial.jsx";
import Email from "../Email/Email.jsx"
const Header = () => {
    return (
        <>
            <div className="flex justify-between items-center px-2">
                <div className="flex gap-1">
                    <Location />
                    <Email/>
                </div>
                <div className="flex items-center gap-4">
                    <OurSocial />
                    <Callus />
                </div>
            </div>
            <hr className="my-1 border-white/20" />
        </>
    );
};

export default Header;
