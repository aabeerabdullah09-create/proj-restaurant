import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import {pink} from "@mui/material/colors";
import tikk from"../../assets/tiktok.webp"
export default function OurSocial() {
    return (
        <>
            <div className="fixed top-2 right-35 flex">
                <Button href="https://www.facebook.com/Vanilla.Pal" target="_blank" sx={{ minWidth: 0, padding: 0.5}}>
                    <FacebookIcon fontSize="small" />
                </Button>
                <Button href="https://www.instagram.com/vanilla.ps/"  target="_blank"
                        sx={{ minWidth: 0, padding: 0.5 }}>
                    <InstagramIcon sx={{ color: pink[500], fontSize: 20 }} />
                </Button>
                <Button href="https://www.tiktok.com/@vanilla.ps" target="_blank"
                        sx={{ minWidth: 0, padding: 0.5}}>
                    <Avatar alt="Remy Sharp" src={tikk} sx={{ width: 24, height: 24 }} />
                </Button>
            </div>
        </>

    );
}