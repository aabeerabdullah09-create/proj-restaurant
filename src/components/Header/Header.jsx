import ImageAvatars from "../logo/logo.jsx";
import Menulist from "../menulist/menulist.jsx";
import Divider from '@mui/material/Divider';

const Header = () => {
    return (
        <>
        <div className="font-bold text-6xl flex justify-center">
            <h1>VANILLA</h1>
            <ImageAvatars/>
        </div>
        <div>
              <Menulist/>
        </div>
            <Divider sx={{ my: 0.5, borderColor: 'White' }}/>

        </>
    )
}

export default Header;
