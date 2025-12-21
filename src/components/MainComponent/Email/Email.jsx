import {useState} from "react";
import {IconButton} from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
const Email = () => {
    const [openEmail, setOpenEmail] = useState(false);
    if (openEmail) {
        window.open('mailto:info@vanilla.ps', '_blank');
        setOpenEmail(false);}
    return (
        <IconButton onClick={() => setOpenEmail(true)} sx={{ color: "white" }}>
            <MailIcon style={{ fontSize: "16px" }}/>
            <div style={{ color: "#e0e0e0", fontSize: "13px" }}>
                Email
            </div>
        </IconButton>

    );
};
export default Email;