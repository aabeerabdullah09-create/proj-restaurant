import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Buttontomenu = () => {
    const navigate = useNavigate();

    return (
        <Box className=" absolute bottom-50 md:bottom-35 left-1/2 -translate-x-1/2 bg-white/15
            px-[10px] py-[10px] rounded-[20px] z-20">
            <Button sx={{ color: "white" }} className="text-sm md:text-base leading-tight whitespace-normal
             md:whitespace-nowrap px-6 text-center"
                onClick={() =>
                    navigate("/Foodpage/155b70ff-c170-4f9c-a79f-ba722045b3cf")}>
                VIEW FULL MENU
            </Button>
        </Box>
    );
};

export default Buttontomenu;
