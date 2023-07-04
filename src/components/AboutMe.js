import React from 'react';
import { Box, Typography, Button, Paper, Link, Grid, Icon } from '@mui/material';
import profileImage from '../media/img/Profilbilde.png';

function AboutMe() {
  const cvUrl = 'https://drive.google.com/file/d/1nv8TKesNgwV-sweSUF0SLsMos2TN0fRD/view?usp=drive_link';
  const transcriptUrl = 'https://drive.google.com/file/d/1ziq6FFsqIulGFRlKS2Wm9jx_r5u-HDU9/view?usp=sharing';

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={3}>
      <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px', maxWidth: '600px', textAlign: 'center' }}>
        <Box sx={{ width: '300px', overflow: 'hidden' }}>
          <img src={profileImage} alt="Profile" style={{ borderRadius: '20%', width: '100%', objectFit: 'cover', transform: 'scale(1.2)' }} />
        </Box>
        <Typography variant="h4" gutterBottom>
          André Lie
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Web Developer
        </Typography>

        <Typography variant="h5" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" paragraph>
          My name is André Lie and I am a 31 year old web developer from Norway. I have a bachelor's degree in Multimedietechnology & Design from the University
          of Agder (UiA). I am currently looking for a job as a web developer, or a similar position. While studying at UiA, I have focused on programming and
          web development. I have also worked on several projects, both alone and in groups, where I have gained experience with project management, teamwork,
          and communication. I have also taken the initiative to learn technologies outside of the bachelor, such as C#, Unity, and React. I am a quick learner
          and I am always eager to learn new things. I am also a very creative person, and I enjoy working on projects where I can use my creativity. I am
          passionate about creating interactive experiences on the web, and I am always looking for new challenges.{' '}
        </Typography>

        <Typography variant="h5" gutterBottom>
          My Interests
        </Typography>
        <Typography variant="body1" paragraph>
          I've always been interested in computers and technology, and from a young age I've shown an interest in exploring and figuring out how things work.
          From the first time I got my hands on a computer, I've been fascinated by the possibilities it offers and the possibilities it offers. I sadly never
          got the chance to explore this interest further, as I was never introduced to programming in school and ended up studying something completely
          different. But from the moment I started studying at UiA, I knew I wanted to become a programmer, as theres nothing I enjoy more than breaking down
          bigger problem and solving them piece by piece. I also enjoy working on projects where I can use my creativity, and I feel like programming is the
          perfect combination of creativity and problem solving.{' '}
        </Typography>

        <Typography variant="h5" gutterBottom>
          My Goals
        </Typography>
        <Typography variant="body1" paragraph>
          My main focus is on web development, but I am also interested in game development. I taught myself C# and Unity during my spare time, and with the
          combination of the skills I learned from my bachelor, and the skills I learned on my own, i got the perfect foundation for creating games.{' '}
        </Typography>

        <Box mt={3}>
          <Button variant="contained" color="primary" href={cvUrl} target="_blank" sx={{ marginRight: '10px' }}>
            View CV
          </Button>
          <Button variant="outlined" color="primary" href={transcriptUrl} target="_blank">
            View Transcripts
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default AboutMe;
