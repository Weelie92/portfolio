import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Chip, Tooltip, ClickAwayListener } from '@mui/material';
import { styled } from '@mui/system';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Image from '../media/img/temp.jpg';
import Image1 from '../media/img/ProjectTemp1.jpg';
import Image2 from '../media/img/ProjectTemp2.jpg';
import Image3 from '../media/img/ProjectTemp3.jpg';
import Image4 from '../media/img/ProjectTemp4.jpg';

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
    level: 90,
    description: 'Been using JavaScript for 3 years throughout my education. I have used it in both front-end and back-end development.',
  },
  {
    name: 'HTML/CSS',
    level: 90,
    description: 'Been using HTML and CSS throughout my education.',
  },
  {
    name: 'React',
    level: 70,
    description: 'Fairly new to React, but have been using it in both front-end and back-end development.',
  },
  {
    name: 'Use of AI/Prompt Engineering',
    level: 90,
    description: 'Been using AI like ChatGPT since it came out to teach myself new skills, especially for programming. ',
  },
  {
    name: 'Unity',
    level: 90,
    description: 'Been using Unity for about a year to develop games. I have used it in both 2D and 3D development.',
  },

  // add more skills as needed
];

const SkillBar = styled('div')(({ theme, level }) => ({
  width: '100%',
  height: '14px',
  position: 'relative',
  overflow: 'hidden',
  backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main} 25%, transparent 25%), linear-gradient(-45deg, ${theme.palette.primary.main} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${theme.palette.primary.main} 75%), linear-gradient(-45deg, transparent 75%, ${theme.palette.primary.main} 75%)`,
  backgroundSize: '10px 10px',
  backgroundPosition: '0 0, 0 5px, 5px -5px, -5px 0px',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: `${level}%`,
    backgroundColor: theme.palette.primary.main,
    transition: 'width 1s ease-in-out',
  },
}));

function SkillItem({ name, level, description }) {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    event.stopPropagation();
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start" mt={1}>
      <Box display="flex" justifyContent="space-between" width="100%" alignItems="center">
        <Typography variant="body1" component="span" style={{ marginRight: '8px' }}>
          {name}
        </Typography>
        <ClickAwayListener onClickAway={handleClickAway}>
          <Tooltip open={open} title={description} placement="top" arrow interactive>
            <IconButton onClick={handleClick} size="small" style={{ opacity: 0.7 }}>
              <InfoOutlinedIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
        </ClickAwayListener>
      </Box>
      <SkillBar level={level} />
    </Box>
  );
}

function MainIndex() {
  const isMobile = useMediaQuery('(max-width:1000px)');

  return (
    <Box px={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      {/* Introduction */}
      <Box mt={5} sx={{ textAlign: 'center' }}>
        <Typography variant="h4">Hello, I'm [Your Name]</Typography>
        <Typography variant="h6">I'm a Full Stack Developer passionate about creating interactive experiences on the web.</Typography>
        <Box my={3}>
          <img src={Image} alt="Image of André Lie" style={{ borderRadius: '50%', height: '200px', width: '200px' }} />
        </Box>
      </Box>

      {/* Projects Carousel */}
      <Box my={5} style={{ height: '100%', width: isMobile ? '100%' : '75%' }}>
        <Carousel responsive={responsive} draggable={false} autoPlay={true} autoPlaySpeed={5000} pauseOnHover={true} infinite={true}>
          {projects.map((project) => (
            <a key={project.title} href={project.path} style={{ textDecoration: 'none', color: 'inherit' }}>
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
                  {project.description}
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
        <Typography variant="h5">Skills</Typography>
        <Grid container spacing={2}>
          {skills.map((skill) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={skill.name}>
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
