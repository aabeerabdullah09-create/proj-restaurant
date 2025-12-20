import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Buttontomenu = () => {
    const navigate = useNavigate();

    return (
        <Box className="inline-block bg-white/15 px-[10px] py-[10px] rounded-[20px]">
            <Button
                sx={{ color: "white" }}
                className="flex justify-center"
                onClick={() => navigate("/Foodpage")}>
              VIEW FULL MENU
            </Button>
        </Box>
    );
};

export default Buttontomenu;
