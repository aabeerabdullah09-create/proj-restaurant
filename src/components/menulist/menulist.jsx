import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export default function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box role="presentation" sx={{ width: '100%' }}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('/')}>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('/Foodpage')}>
                        <ListItemText primary="Food" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('/Drinkspage')}>
                        <ListItemText primary="Drinks" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('/Dessertpage')}>
                        <ListItemText primary="Dessert" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div>
            <IconButton
                onClick={toggleDrawer(true)}
                sx={{
                    position: 'fixed',
                    top: 9,
                    left: 16,
                    bgcolor: 'transparent',
                    color: 'white',
                }}
            >
                <FormatListBulletedIcon fontSize="medium" />
            </IconButton>

            <Drawer
                open={open}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    sx: {
                        width: 300,
                        bgcolor: 'white',
                        color: 'black',
                    },
                }}
            >
                {DrawerList}
            </Drawer>
        </div>
    );
}
