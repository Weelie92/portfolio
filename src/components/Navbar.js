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
import { useTranslation } from 'react-i18next';
import { Menu as MenuIcon, Home as HomeIcon } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTheme } from '@mui/material/styles';

export default function Navbar({ isDarkMode, toggleTheme }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { t, i18n } = useTranslation();

  const menuItems = [
    { label: t('navigation.About'), path: '/about' },
    { label: t('navigation.Projects'), path: '/projects' },
    { label: t('navigation.Contact'), path: '/contact' },
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
                  <Typography variant="body2">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</Typography>
                  <Switch checked={isDarkMode} onChange={toggleTheme} />
                  <FormControlLabel
                    control={<Switch checked={i18n.language === 'no'} onChange={changeLanguage} name="languageSwitch" />}
                    label={i18n.language === 'no' ? '🇳🇴' : '🇬🇧'}
                  />
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
              <IconButton edge="end" color="inherit" href="/">
                <FormControlLabel
                  control={<Switch checked={i18n.language === 'no'} onChange={changeLanguage} name="languageSwitch" />}
                  label={i18n.language === 'no' ? '🇳🇴' : '🇬🇧'}
                />
                <Typography variant="body2">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</Typography>
                <Switch checked={isDarkMode} onChange={toggleTheme} />
                <HomeIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </Slide>
    </>
  );
}
