import { styled } from '@mui/system';
import { Select, MenuItem, Box, Typography, Switch } from '@mui/material';
import { useTranslation } from 'react-i18next';

const LanguageSwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill-rule="nonzero" width="16" height="16" viewBox="0 0 203.55 141.6">${encodeURIComponent(
          '<g fill="#EF2B2D"><path d="M11.19 0h181.17c6.15 0 11.19 5.03 11.19 11.19v119.22c0 6.16-5.04 11.19-11.19 11.19H11.19C5.03 141.6 0 136.57 0 130.41V11.19C0 5.03 5.03 0 11.19 0z"/><path fill="#fff" d="M92.35 0v141.6H54.67V0z"/><path fill="#fff" d="M0 51.96h203.55v37.68H0z"/><path fill="#002868" d="M82.93 0v141.6H64.09V0z"/><path fill="#002868" d="M0 61.38h203.55v18.84H0z"/></g>'
        )}</svg>')`,
        backgroundSize: '150%',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        top: 4,
        left: 4,
        width: 24,
        height: 24,
        borderRadius: '50%',
      },
    },
    '& + .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    },
  },

  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 203.55 141.6">${encodeURIComponent(
        '<g fill="#EF2B2D"><path class="st0" d="M2.87,38.4h49.46c1.59-0.09,2.87-1.42,2.87-3.03V3.03c0-1.66-1.35-3.02-3.01-3.03H3.01 C1.35,0.01,0,1.37,0,3.03v32.33C0,36.98,1.28,38.31,2.87,38.4L2.87,38.4z"/><polygon class="st1" points="23.74,23.03 23.74,38.4 31.42,38.4 31.42,23.03 55.2,23.03 55.2,15.35 31.42,15.35 31.42,0 23.74,0 23.74,15.35 0,15.35 0,23.03 23.74,23.03"/><path class="st2" d="M33.98,12.43V0h18.23c1.26,0.02,2.34,0.81,2.78,1.92L33.98,12.43L33.98,12.43z"/><path class="st2" d="M33.98,25.97V38.4h18.35c1.21-0.07,2.23-0.85,2.66-1.92L33.98,25.97L33.98,25.97z"/><path class="st2" d="M21.18,25.97V38.4H2.87c-1.21-0.07-2.24-0.85-2.66-1.94L21.18,25.97L21.18,25.97z"/><path class="st2" d="M21.18,12.43V0H2.99C1.73,0.02,0.64,0.82,0.21,1.94L21.18,12.43L21.18,12.43z"/><polygon class="st2" points="0,12.8 7.65,12.8 0,8.97 0,12.8"/><polygon class="st2" points="55.2,12.8 47.51,12.8 55.2,8.95 55.2,12.8"/><polygon class="st2" points="55.2,25.6 47.51,25.6 55.2,29.45 55.2,25.6"/><polygon class="st2" points="0,25.6 7.65,25.6 0,29.43 0,25.6"/><polygon class="st1" points="55.2,3.25 36.15,12.8 40.41,12.8 55.2,5.4 55.2,3.25"/><polygon class="st1" points="19.01,25.6 14.75,25.6 0,32.98 0,35.13 19.05,25.6 19.01,25.6"/><polygon class="st1" points="10.52,12.81 14.78,12.81 0,5.41 0,7.55 10.52,12.81"/><polygon class="st1" points="44.63,25.59 40.37,25.59 55.2,33.02 55.2,30.88 44.63,25.59"/></g>'
      )}</svg>')`,
      backgroundSize: '150%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: 32,
      height: 32,
      top: 4,
      left: 4,
      borderRadius: '50%',
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

const CompLanguageSwitch = () => {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const newLanguage = i18n.language === 'no' ? 'en' : 'no';
    localStorage.setItem('language', newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mb={1}>
      {/* Component JSX */}

      <Typography variant="body2">{/* Flag emoji or text */}</Typography>
      <LanguageSwitch onChange={changeLanguage} name="languageSwitch" />
    </Box>
  );
};

export default CompLanguageSwitch;
