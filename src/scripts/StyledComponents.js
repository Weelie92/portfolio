import { styled } from '@mui/material';
import { Box } from '@mui/system';

export const StyledBox = styled(Box)({
  maxWidth: '600px',
  margin: '0 auto',
});

export const StyledImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
});

export const SkillBarTheme = styled('div')(({ theme, level }) => ({
  width: '100%',
  height: '20px',
  position: 'relative',
  backgroundColor: theme.palette.action.disabledBackground,
  '& .line': {
    position: 'absolute',
    height: '150%',
    width: '4px',
    zIndex: 1,
    backgroundColor: theme.palette.highlight.main,
  },
  '& .line:first-of-type': {
    left: '20%',
    top: '-10px',
  },
  '& .line:nth-of-type(2)': {
    left: '40%',
    top: '-10px',
  },
  '& .line:nth-of-type(3)': {
    left: '60%',
    top: '-10px',
  },
  '& .line:last-of-type': {
    left: '80%',
    top: '-10px',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '0%',
    height: '100%',
    width: `${level * 20}%`,
    backgroundColor: `hsl(${level * 60}, 100%, 50%)`,
    transition: 'width 1s ease-in-out',
    zIndex: -1,
  },
}));
