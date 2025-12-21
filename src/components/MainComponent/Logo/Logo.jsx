import Stack from '@mui/material/Stack';
import logo from "../../../assets/lojpeg.jpeg";
const Logoo=()=> {
    return (
        <div style={{ marginTop: '-35px' }}>
            <Stack direction="row" spacing={1} alignItems="center">
                <img alt="Vanilla logo" src={logo} className="w-40 " style={{filter: "brightness(80%)"}
                }/>
            </Stack>
        </div>
    );
}
export default Logoo;