import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import tikk from "../../assets/tiii.png";

export default function OurSocial() {
    return (
        <div className="top-2 left-35 flex gap-1 z-50">
            <Button
                href="https://www.facebook.com/Vanilla.Pal"
                target="_blank"
                sx={{ minWidth: 0, padding: 0.5, color: "white" }}
            >
                <FacebookIcon fontSize="small" />
            </Button>

            <Button
                href="https://www.instagram.com/vanilla.ps/"
                target="_blank"
                sx={{ minWidth: 0, padding: 0.5, color: "white" }}
            >
                <InstagramIcon fontSize="small" />
            </Button>

            <Button
                href="https://www.tiktok.com/@vanilla.ps"
                target="_blank"
                sx={{ minWidth: 0, padding: 0.5 }}
            >
                <Avatar
                    alt="TikTok"
                    src={tikk}
                    sx={{
                        width: 24,
                        height: 24,
                    }}
                />
            </Button>
        </div>
    );
}
