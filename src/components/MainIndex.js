import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import Carousel from 'react-multi-carousel';
import SkillTemplate from './templates/SkillTemplate';
import 'react-multi-carousel/lib/styles.css';
import 'devicon/devicon.min.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import profileImage from '../media/img/Profilbilde.png';
import { useTranslation } from 'react-i18next';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1800 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 1799, min: 1200 },
    centerMode: true,
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1199, min: 465 },
    centerMode: true,
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

/* const SkillBarTheme = styled('div')(({ theme, level }) => ({
  width: '100%',
  height: '20px',
  position: 'relative',
  backgroundColor: theme.palette.action.disabledBackground, // Add this line for default background
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    height: '10px',
    width: '1px',
    backgroundColor: theme.palette.primary.main,
    left: '25%',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    height: '10px',
    width: '1px',
    backgroundColor: theme.palette.primary.main,
    left: '50%',
  },
  '& .line': {
    position: 'absolute',
    height: '150%',
    width: '4px',
    zIndex: 1,
    backgroundColor: theme.palette.highlight.main,
  },
  '& .line:first-child': {
    left: '25%',
    top: '-5px',
  },
  '& .line:nth-child(2)': {
    left: '50%',
    top: '-5px',
  },
  '& .line:last-child': {
    left: '75%',
    top: '-5px',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '0%',
    height: '100%',
    width: `${level * 25}%`,
    backgroundColor: `hsl(${level * 60}, 100%, 50%)`,
    transition: 'width 1s ease-in-out',
    zIndex: -1,
  },
}));

const SkillBarComponent = ({ level }) => (
  <SkillBarTheme level={level}>
    <div className="line" />
    <div className="line" />
    <div className="line" />
  </SkillBarTheme>
);

function SkillItem({ name, level, icons }) {
  const [openTooltipIndex, setOpenTooltipIndex] = useState(null);
  const { t } = useTranslation();

  const handleClickAway = () => {
    setOpenTooltipIndex(null);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start" mt={1}>
      <Box display="flex" justifyContent="flex-start" alignItems="center" width="100%" sx={{ paddingBottom: '10px' }}>
        <Box display="flex" justifyContent="flex-start" width="100%">
          <Typography variant="body1" component="span" sx={{ fontSize: 24, fontWeight: 'bold' }}>
            {name}
          </Typography>
        </Box>

        <Box display="flex" alignItems="center">
          {icons.map((icon, index) => (
            <Box key={index} sx={{ position: 'relative' }}>
              <img
                src={icon}
                alt={`${name} icon`}
                onClick={() => setOpenTooltipIndex(index)}
                style={{
                  width: '50px',
                  height: 'auto',
                  marginRight: '8px',
                  cursor: 'pointer',
                }}
              />

              {openTooltipIndex === index && (
                <ClickAwayListener onClickAway={handleClickAway}>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 1,
                    }}
                  >
                    <Tooltip
                      open
                      title={
                        <Typography variant="body2" style={{ whiteSpace: 'pre-wrap' }}>
                          {t(`SkillDescription.${name.split(' ')[index]}`)}
                        </Typography>
                      }
                      placement="top"
                      arrow
                    >
                      <IconButton size="medium" sx={{ opacity: 0 }}>
                        <InfoOutlinedIcon fontSize="inherit" />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </ClickAwayListener>
              )}
            </Box>
          ))}
        </Box>
      </Box>

      <SkillBarComponent level={level} />
    </Box>
  );} */

function MainIndex({ projects, skills }) {
  const isMobile = useMediaQuery('(max-width:1000px)');
  const { t } = useTranslation();

  return (
    <Box px={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      {/* Introduction */}
      <Box mt={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px', maxWidth: '600px', textAlign: 'center' }}>
        <Typography variant="h4">{t('MainIndex.Title')}</Typography>
        <Box sx={{ width: '300px', overflow: 'hidden' }}>
          <img src={profileImage} alt="Profile" style={{ borderRadius: '20%', width: '100%', objectFit: 'cover', transform: 'scale(1.2)' }} />
        </Box>
        <Typography variant="body1" paragraph>
          {t('MainIndex.ShortIntro')}
        </Typography>
      </Box>

      {/* Projects Carousel */}
      <Box my={5} style={{ height: '100%', width: isMobile ? '100%' : '75%' }}>
        <Carousel responsive={responsive} draggable={false} autoPlay={true} autoPlaySpeed={5000} pauseOnHover={true} infinite={true}>
          {projects.map((project) => (
            <a key={project.title} href={`/projects/${project.path}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* Title */}
                <Typography variant="h4" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {project.title}
                </Typography>

                {/* Image */}
                <Box
                  sx={{
                    overflow: 'hidden',
                    height: '250px',
                    width: '95%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <img src={project.image} alt={project.title} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
                </Box>

                {/* Description */}
                <Typography variant="body1" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', lineClamp: '2' }}>
                  {t(`Projects.ProjectDescription.${project.path}`)}
                </Typography>
              </Box>
            </a>
          ))}
        </Carousel>
      </Box>

      <Button variant="outlined" href="/projects">
        See My Projects
      </Button>

      {/* Skills */}
      <Box my={5}>
        <Grid container spacing={2}>
          {skills.map((skill) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={skill.name}>
              <Box border={1} borderColor="divider" borderRadius={1} p={2}>
                <SkillTemplate {...skill} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default MainIndex;
