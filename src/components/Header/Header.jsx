import Avatar from "@mui/material/Avatar";
import ImageAvatars from "../logo/logo.jsx";
import TemporaryDrawer from "../menulist/menulist.jsx";
import Divider from '@mui/material/Divider';

const Header = () => {
    return (
        <>
        <div className="font-bold text-5xl flex justify-center">
            <h1>VANILLA</h1>
            <ImageAvatars/>
        </div>
        <div>
              <TemporaryDrawer/>
        </div>
            <Divider sx={{ my: 1, borderColor: 'White' }}/>
        </>
    )
}

export default Header;
