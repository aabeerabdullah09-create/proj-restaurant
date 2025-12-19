import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Buttontomenu = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                backgroundColor: "rgba(255, 255, 255, 0.15)", // مربع شفاف
                padding: "16px 24px",
                borderRadius: "8px",
                display: "inline-block",
            }}
        >
            <Button
                sx={{ color: "white" }}
                className="flex justify-center"
                onClick={() => navigate("/Foodpage")}
            >
                enter to go to the menu
            </Button>
        </Box>
    );
};

export default Buttontomenu;
