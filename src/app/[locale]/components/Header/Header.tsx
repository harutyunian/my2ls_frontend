'use client';

import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {useColorScheme} from '@mui/material';
import {Link} from '@/i18n/routing';
import { usePathname } from 'next/navigation';

// Route-specific icons
import DataObjectIcon from '@mui/icons-material/DataObject';
import CssIcon from '@mui/icons-material/Css';
import CodeIcon from '@mui/icons-material/Code';
import TransformIcon from '@mui/icons-material/Transform';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import CompressIcon from '@mui/icons-material/Compress';
import RegularExpressionIcon from '@mui/icons-material/Terminal';
import SecurityIcon from '@mui/icons-material/Security';
import ImageIcon from '@mui/icons-material/Image';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import WebIcon from '@mui/icons-material/Web';
import AutomationIcon from '@mui/icons-material/AutoAwesome';
import SpeedIcon from '@mui/icons-material/Speed';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import TerminalIcon from '@mui/icons-material/Terminal';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import { MAIN_ROUTES } from "@/routes/rutes";
import LangSwitch from "@/app/[locale]/components/LangSwitch/LangSwitch";

interface Route {
    name: string;
    path: string;
    child?: Route[];
}

const getRouteIcon = (routeName: string) => {
    const iconMap: { [key: string]: React.ReactElement } = {
        'Json': <DataObjectIcon />,
        'CSS Formatter': <CssIcon />,
        'CSS formatter': <CssIcon />,
        'Code Formatter and Beautifier': <CodeIcon />,
        'Code Converters': <TransformIcon />,
        'Data and File Converters': <FolderCopyIcon />,
        'Code Minifiers': <CompressIcon />,
        'Regular Expression (Regex) Tools': <RegularExpressionIcon />,
        'Encryption and Decryption Tools': <SecurityIcon />,
        'Image Editing and Optimization': <ImageIcon />,
        'Video and Audio Tools': <PlayCircleIcon />,
        'Front-End Development Tools': <WebIcon />,
        'Web Scraping and Automation Tools': <AutomationIcon />,
        'Performance Tools': <SpeedIcon />,
        'SEO and Analytics Tools': <AnalyticsIcon />,
        'Command-Line Tools and Development Helpers': <TerminalIcon />,
        'Text and Document Tools': <TextFieldsIcon />
    };

    return iconMap[routeName] || <CodeIcon />; // Default icon
};

export default function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [openSubMenus, setOpenSubMenus] = useState<string[]>([]);
    const { mode, setMode } = useColorScheme();
    const pathname = usePathname();

    const handleSubMenu = (name: string) => {
        setOpenSubMenus(prev =>
            prev.includes(name)
                ? prev.filter(item => item !== name)
                : [...prev, name]
        );
    };

    const renderMenuItem = (route: Route, level = 0) => {
        const hasChildren = route?.child && route.child.length > 0;
        const isOpen = openSubMenus.includes(route.name);
        const isSelected = pathname === route.path;


        return (
            <Box key={route.name}>
                {/*// @ts-expect-error vopshm inch vor ts akkan tufta error a im arev te jogum em incha uzum*/}
                <ListItem
                    onClick={() => hasChildren ? handleSubMenu(route.name) : null}
                    component={hasChildren ? 'div' : Link}
                    href={hasChildren ? '/' : route.path}
                    selected={isSelected}
                    sx={{
                        pl: level * 2 + 2,
                        '&.Mui-selected': {
                            backgroundColor: mode === 'dark'
                                ? 'rgba(255, 255, 255, 0.08)'
                                : 'rgba(0, 0, 0, 0.08)',
                        },
                        '&:hover': {
                            backgroundColor: mode === 'dark'
                                ? 'rgba(255, 255, 0, 0.12)'
                                : 'rgba(0, 0, 0, 0.12)',
                        },
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 40,
                            color: isSelected ? 'primary.main' : 'inherit'
                        }}
                    >
                        {getRouteIcon(route.name)}
                    </ListItemIcon>
                    <ListItemText
                        primary={route.name}
                        primaryTypographyProps={{
                            fontSize: level === 0 ? 16 : 14,
                            fontWeight: level === 0 ? 500 : 400,
                            color: isSelected ? 'primary.main' : 'inherit',
                        }}
                    />
                    {hasChildren && (isOpen ? <ExpandLess /> : <ExpandMore />)}
                </ListItem>

                {hasChildren && (
                    <Collapse in={isOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {route.child?.map(childRoute =>
                                renderMenuItem(childRoute, level + 1)
                            )}
                        </List>
                    </Collapse>
                )}
            </Box>
        );
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                elevation={2}
                sx={{
                    background: mode === 'dark'
                        ? 'linear-gradient(45deg, #1a237e 30%, #311b92 90%)'
                        : 'linear-gradient(45deg, #2196F3 30%, #1976D2 90%)',
                }}
            >
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={() => setIsDrawerOpen(true)}
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    fontWeight: 600,
                                    letterSpacing: 1,
                                    '&:hover': {
                                        opacity: 0.9,
                                    }
                                }}
                            >
                                My 2 Tools
                            </Typography>
                        </Link>
                        <LangSwitch/>
                    </Box>

                    <IconButton
                        color="inherit"
                        onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
                        sx={{
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            }
                        }}
                    >
                        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: 280,
                        boxSizing: 'border-box',
                        background: mode === 'dark' ? '#121212' : '#ffffff',
                    },
                }}
            >
                <Box
                    sx={{
                        py: 2,
                        px: 2,
                        borderBottom: 1,
                        borderColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
                    }}
                >
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            fontWeight: 600,
                            color: mode === 'dark' ? 'white' : 'inherit'
                        }}
                    >
                        Menu
                    </Typography>
                </Box>
                <List component="nav" sx={{ pt: 1 }}>
                    {MAIN_ROUTES.map(route => renderMenuItem(route))}
                </List>
            </Drawer>
        </Box>
    );
}