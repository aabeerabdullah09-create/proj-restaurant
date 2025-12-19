import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export default function Menulist() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDrawer = (value) => () => {
        setOpen(value);
    };

    return (
        <>
            <IconButton
                onClick={toggleDrawer(true)}
                sx={{
                    position: 'fixed',
                    top: 9,
                    left: 16,
                    color: 'white',
                    zIndex: 30,
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
                        bgcolor: 'black',
                        color: 'white',
                    },
                }}
            >
                <List>
                    {[
                        { text: 'Home', path: '/' },
                        { text: 'Food', path: '/Foodpage' },
                        { text: 'Drinks', path: '/Drinkspage' },
                        { text: 'Dessert', path: '/Dessertpage' },
                    ].map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton onClick={() => navigate(item.path)}>
                                <ListItemText
                                    primary={item.text}
                                    sx={{ color: 'white' }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
}
