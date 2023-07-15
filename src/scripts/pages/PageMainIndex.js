import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import Carousel from 'react-multi-carousel';
import SkillTemplate from '../templates/SkillTemplate';
import 'react-multi-carousel/lib/styles.css';
import 'devicon/devicon.min.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import profileImage from '../../media/img/Profilbilde.png';
import { useTranslation } from 'react-i18next';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1800 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1799, min: 1200 },
    centerMode: true,
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1199, min: 550 },
    centerMode: true,
    items: 3,
  },
  mobile: {
    breakpoint: { max: 549, min: 0 },
    items: 1,
  },
};

function MainIndex({ projects, skills }) {
  const isMobile = useMediaQuery('(max-width:1000px)');
  const { t } = useTranslation();
  const [firstTimeUser, setFirstTimeUser] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('firstTimeUser') === 'false') {
      setFirstTimeUser(false);
    }
  }, []);

  // add this function
  const handleFirstTimeUserInteraction = () => {
    localStorage.setItem('firstTimeUser', 'false');
    setFirstTimeUser(false);
  };

  return (
    <Box px={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      {/* Introduction */}
      <Box mt={1} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px', maxWidth: '600px', textAlign: 'center' }}>
        <Typography variant="h4">{t('MainIndex.Title')}</Typography>
        <Box mt={2} sx={{ width: '300px', overflow: 'hidden' }}>
          <img src={profileImage} alt="Profile" style={{ borderRadius: '20%', width: '100%', objectFit: 'cover', transform: 'scale(1.2)' }} />
        </Box>
        <Typography mt={2} variant="body1" paragraph>
          {t('MainIndex.ShortIntro')}
        </Typography>
      </Box>

      {/* Projects Carousel */}
      <Box my={5} style={{ height: '100%', width: isMobile ? '100%' : '75%' }}>
        <Carousel responsive={responsive} draggable={false} autoPlay={true} autoPlaySpeed={5000} pauseOnHover={true} infinite={true}>
          {Object.values(projects).map((project) => (
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
                  <img src={project.image[0]} alt={project.title} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
                </Box>

                {/* Description */}
                <Typography variant="body1" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', lineClamp: '2' }}>
                  {t(`Projects.${project.path}.ShortDescription`)}
                </Typography>
              </Box>
            </a>
          ))}
        </Carousel>
      </Box>

      <Button variant="outlined" href="/projects">
        {t('Projects.SeeMyProjects')}
      </Button>

      {/* Skills */}
      <Box my={5}>
        <Grid container spacing={2}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={skill.name}>
              <Box border={1} borderColor="divider" borderRadius={1} p={2}>
                <SkillTemplate
                  {...skill}
                  firstTimeUser={index === 0 && firstTimeUser} // pass prop to SkillTemplate
                  onUserInteraction={handleFirstTimeUserInteraction} // pass prop to SkillTemplate
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default MainIndex;
