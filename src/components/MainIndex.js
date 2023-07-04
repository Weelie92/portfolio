import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Chip, Tooltip, ClickAwayListener } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { styled } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from '../media/img/temp.jpg';
import Image1 from '../media/img/ProjectTemp1.jpg';
import Image2 from '../media/img/ProjectTemp2.jpg';
import Image3 from '../media/img/ProjectTemp3.jpg';
import Image4 from '../media/img/ProjectTemp4.jpg';

const projects = [
  {
    image: Image1,
    title: 'Project Medieval',
    description:
      'This is a short description of my bachelor that I did called Project Medieval. It is a game that is based on the medieval times. Multiplayer using Unity and C#.',
    path: '/project-medieval',
  },
  {
    image: Image2,
    title: 'Project 2',
    description: 'This is a brief description about Project 2...',
    path: '/project-2',
  },
  {
    image: Image3,
    title: 'Project 3',
    description: 'This is a brief description about Project 3...',
    path: '/project-3',
  },
  {
    image: Image4,
    title: 'Project 5',
    description: 'This is a brief description about Project 5...',
    path: '/project-5',
  },
  {
    image: Image4,
    title: 'Project 6',
    description: 'This is a brief description about Project 6...',
    path: '/project-6',
  },
  {
    image: Image4,
    title: 'Project 7',
    description: 'This is a brief description about Project 7...',
    path: '/project-7',
  },
  {
    image: Image4,
    title: 'Project 8',
    description: 'This is a brief description about Project 8...',
    path: '/project-8',
  },
  // Add more projects as needed
];

const skills = [
  {
    name: 'JavaScript',
    level: 9,
    description: 'Been using JavaScript for 3 years throughout my education. I have used it in both front-end and back-end development.',
  },
  {
    name: 'HTML/CSS',
    level: 9,
    description: 'Been using HTML and CSS throughout my education.',
  },
  {
    name: 'React',
    level: 7,
    description: 'Fairly new to React, but have been using it in both front-end and back-end development.',
  },
  {
    name: 'Use of AI/Prompt Engineering',
    level: 9,
    description: 'Been using AI like ChatGPT since it came out to teach myself new skills, especially for programming. ',
  },
  {
    name: 'Unity',
    level: 9,
    description: 'Been using Unity for about a year to develop games. I have used it in both 2D and 3D development.',
  },

  // add more skills as needed
];
const StyledChip = styled(Chip)({
  margin: '0 5px 5px 0',
});

const SkillBar = styled('div')(({ level }) => ({
  width: '100%',
  height: '8px',
  backgroundColor: '#eee',
  borderRadius: '4px',
  position: 'relative',
  overflow: 'hidden',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: `${level}%`,
    backgroundColor: '#2196f3',
  },
}));

const SkillDescription = styled('div')({
  marginTop: '8px',
  fontSize: '14px',
  color: '#666',
});

function SkillItem({ name, level, description }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Tooltip open={open} onClose={handleClickAway} title={description} placement="top" arrow interactive>
        <Box display="flex" flexDirection="column" alignItems="flex-start" mt={1} onClick={handleClick}>
          <Typography variant="body1" component="span" style={{ marginRight: '8px' }}>
            {name}
          </Typography>
          <SkillBar level={(level / 10) * 100} />
        </Box>
      </Tooltip>
    </ClickAwayListener>
  );
}

function MainIndex() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box px={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Box mt={5} sx={{ textAlign: 'center' }}>
        <Typography variant="h4">Hello, I'm [Your Name]</Typography>
        <Typography variant="h6">I'm a Full Stack Developer passionate about creating interactive experiences on the web.</Typography>
        <Box my={3}>
          <img src={Image} alt="Image of André Lie" style={{ borderRadius: '50%', height: '200px', width: '200px' }} />
        </Box>
      </Box>

      <Box my={5} style={{ height: '100%', width: isMobile ? '100%' : '50%' }}>
        {isMobile ? (
          <Carousel showIndicators={false} showThumbs={false} autoPlay infiniteLoop showStatus={false}>
            {projects.map((project) => (
              <a key={project.title} href={project.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Box style={{ height: '100%' }}>
                  <Typography variant="h4">{project.title}</Typography>
                  <img src={project.image} alt={project.title} style={{ width: '100%', height: '75%', objectFit: 'cover' }} />
                  <Typography variant="body1">{project.description}</Typography>
                </Box>
              </a>
            ))}
          </Carousel>
        ) : (
          <Carousel showIndicators={false} showThumbs={false} autoPlay infiniteLoop showStatus={false} showArrows={true} centerMode centerSlidePercentage={25}>
            {projects.map((project) => (
              <a key={project.title} href={project.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Typography variant="h4" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {project.title}
                  </Typography>
                  <Box
                    sx={{
                      overflow: 'hidden',
                      height: '150px',
                      width: '250px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img src={project.image} alt={project.title} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
                  </Box>
                  <Typography variant="body1" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', lineClamp: '2' }}>
                    {project.description}
                  </Typography>
                </Box>
              </a>
            ))}
          </Carousel>
        )}
      </Box>
      <Button variant="outlined" href="/projects">
        See My Projects
      </Button>

      <Box my={5}>
        <Typography variant="h5">Skills</Typography>
        <Grid container spacing={2}>
          {skills.map((skill) => (
            <Grid item xs={12} sm={4} md={2} key={skill.name}>
              <Box border={1} borderColor="divider" borderRadius={1} p={2}>
                <SkillItem {...skill} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default MainIndex;
