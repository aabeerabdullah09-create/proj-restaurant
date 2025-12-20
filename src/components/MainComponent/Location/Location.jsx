import { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { IconButton } from "@mui/material";

const LocationButton = () => {
    const [openMap, setOpenMap] = useState(false);

    if (openMap) {
            window.open('https://maps.app.goo.gl/UqmJU52jKnh3m8o8A', '_blank');
        setOpenMap(false);}

    return (
        <IconButton onClick={() => setOpenMap(true)} sx={{ color: "white" }}>
            <LocationOnIcon style={{ fontSize: "18px" }}/>
            <div style={{ color: "#e0e0e0", fontSize: "15px" }}>
                Location
            </div>
        </IconButton>

    );
};

export default LocationButton;
