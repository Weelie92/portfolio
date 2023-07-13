import React from 'react';
import { Box, Typography, Button, Paper, Link, Grid, Icon } from '@mui/material';
import { useTranslation } from 'react-i18next';
import profileImage from '../../media/img/Profilbilde.png';

function AboutMe() {
  const { t } = useTranslation();

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
          {t('AboutMe.AboutMe.Title')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('AboutMe.AboutMe.Description')}
        </Typography>

        <Typography variant="h5" gutterBottom>
          {t('AboutMe.MyInterests.Title')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('AboutMe.MyInterests.Description')}
        </Typography>

        <Typography variant="h5" gutterBottom>
          {t('AboutMe.MyGoals.Title')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('AboutMe.MyGoals.Description')}
        </Typography>

        <Box mt={3}>
          <Button variant="contained" color="primary" href={cvUrl} target="_blank" sx={{ marginRight: '10px' }}>
            {t('AboutMe.ViewCV')}
          </Button>
          <Button variant="outlined" color="primary" href={transcriptUrl} target="_blank">
            {t('AboutMe.ViewTranscripts')}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default AboutMe;
