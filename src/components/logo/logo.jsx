import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import logo from "../../assets/vanilla.png";
export default function ImageAvatars() {
    return (
        <Stack direction="row" spacing={2}>
            <Avatar alt="Vanilla logo" src={logo} sx={{ width: 40, height: 40 }}/>
        </Stack>
    );
}