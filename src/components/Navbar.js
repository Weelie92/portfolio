import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Slide,
  useMediaQuery,
  Box,
  Switch,
  FormControlLabel,
  Typography,
  CssBaseline,
  Button,
  Avatar,
  Fade,
} from '@mui/material';
import { styled } from '@mui/system';
import { useTranslation } from 'react-i18next';
import { Menu as MenuIcon, Home as HomeIcon } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTheme } from '@mui/material/styles';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ThemeSwitch = styled(Switch)(({ theme }) => ({
  height: 34,
  width: 62,
  padding: 7,
  marginLeft: 'auto', // Add this line
  '& .MuiSwitch-switchBase': {
    padding: 5,
    '& .MuiSwitch-icon': {
      '&:before': {
        content: '""',
        position: 'absolute',
        left: 'calc(100% - 37px)', // Adjust the left position to align with the right side
        display: 'block',
        height: '100%',
        backgroundColor: theme.palette.mode === 'dark' ? 'darkgrey' : 'yellow', // defines the color of the moon and sun
      },
    },
    '&:hover .MuiSwitch-icon:before': {
      backgroundColor: theme.palette.action.hover,
    },
    '& .MuiSwitch-icon.Mui-checked': {
      color: theme.palette.common.white,
    },
    '&:hover .MuiSwitch-icon.Mui-checked:before': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    width: 75,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#B53A2C',
    opacity: 1,
  },
}));

export default function Navbar({ isDarkMode, toggleTheme }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { t, i18n } = useTranslation();

  const menuItems = [
    { label: t('Navigation.About'), path: '/about' },
    { label: t('Navigation.Projects'), path: '/projects' },
    { label: t('Navigation.Contact'), path: '/contact' },
  ];

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    setScrollingUp(currentScroll <= lastScroll);
    setLastScroll(currentScroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  // Function to change language
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.checked ? 'no' : 'en');
  };

  // In your JSX

  return (
    <>
      <CssBaseline />
      <Slide appear={false} direction="down" in={scrollingUp || lastScroll === 0}>
        <AppBar position="sticky">
          <Toolbar>
            <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
              <Box
                sx={{
                  width: 200,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  py: 2,
                  px: 3,
                  bgcolor: theme.palette.background.default,
                  color: theme.palette.text.primary,
                }}
              >
                <Fade in={openDrawer}>
                  <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <IconButton edge="end" color="inherit" href="/">
                      <HomeIcon style={{ fontSize: '4rem' }} />
                    </IconButton>{' '}
                  </Box>
                </Fade>

                <Box style={{ marginBottom: 'auto' }}>
                  <List>
                    {menuItems.map((item, index) => (
                      <Fade in={openDrawer} timeout={500 + index * 100} key={item.label}>
                        <ListItem button component={Link} to={item.path}>
                          <ListItemText primaryTypographyProps={{ variant: 'h5' }} primary={item.label} />
                        </ListItem>
                      </Fade>
                    ))}
                  </List>
                </Box>

                <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
                  <Box display="flex" flexDirection="column" alignItems="center" mb={1}>
                    <Typography variant="body2">{i18n.language === 'no' ? '🇳🇴' : '🇬🇧'}</Typography>
                    <Switch checked={i18n.language === 'no'} onChange={changeLanguage} name="languageSwitch" />
                  </Box>

                  <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="body2">{isDarkMode ? t('Navigation.DarkLightMode.DarkMode') : t('Navigation.DarkLightMode.LightMode')}</Typography>
                    <ThemeSwitch checked={!isDarkMode} onChange={toggleTheme} icon={<Brightness3Icon />} checkedIcon={<Brightness7Icon />} />
                  </Box>

                  <Box display="flex" mt={2}>
                    <IconButton href="https://www.linkedin.com/in/andrelie" target="_blank" style={{ marginRight: '10px' }}>
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton href="https://github.com/Weelie92" target="_blank">
                      <GitHubIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Drawer>

            {!isMobile && (
              <Box display="flex" gap={2}>
                {menuItems.map((item) => (
                  <Box key={item.label} sx={{ textDecoration: 'none' }}>
                    <Link to={item.path} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {item.label}
                    </Link>
                  </Box>
                ))}
              </Box>
            )}
            <Box flexGrow={1} />

            {isMobile ? (
              <IconButton edge="end" color="inherit" onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
              </IconButton>
            ) : (
              <Box display="flex" flexDirection="row">
                {/* Language Switch */}
                <Box display="flex" flexDirection="row" alignItems="center">
                  <Typography variant="body2">{i18n.language === 'no' ? '🇳🇴' : '🇬🇧'}</Typography>
                  <Switch checked={i18n.language === 'no'} onChange={changeLanguage} name="languageSwitch" />
                </Box>

                {/* Theme Switch */}
                <Box display="flex" flexDirection="row" alignItems="center">
                  <Typography variant="body2">{isDarkMode ? t('Navigation.DarkLightMode.DarkMode') : t('Navigation.DarkLightMode.LightMode')}</Typography>
                  <ThemeSwitch checked={!isDarkMode} onChange={toggleTheme} icon={<Brightness3Icon />} checkedIcon={<Brightness7Icon />} />
                </Box>

                {/* Home button */}
                <Box component={IconButton} edge="end" color="inherit" href="/">
                  <HomeIcon />
                </Box>
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </Slide>
    </>
  );
}
