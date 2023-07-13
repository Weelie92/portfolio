/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Typography, Button, Box, Accordion, AccordionSummary, AccordionDetails, Grid, Dialog, DialogContent, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StyledBox, StyledImage } from '../StyledComponents';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';

const EnlargedImage = styled('img')({
  maxWidth: '100%',
  maxHeight: '80vh',
  cursor: 'pointer',
});

function ProjectTemplate({ projects }) {
  const { projectId } = useParams();
  const { t } = useTranslation();

  const [enlargedImg, setEnlargedImg] = useState(null);

  const handleImageClick = (img) => {
    setEnlargedImg(img);
  };

  const handleDialogClose = () => {
    setEnlargedImg(null);
  };

  if (!projects) {
    return <Typography variant="h6">{t('Loading...')}</Typography>;
  }

  const project = Object.values(projects).find((project) => project.path === projectId);

  if (!project) {
    return <Typography variant="h6">{t('Project not found')}</Typography>;
  }

  const { title, generalDescription, image, updates } = project;

  return (
    <StyledBox p={2}>
      {/* Project Title */}
      <Typography variant="h4" align="center" gutterBottom>
        {title}
      </Typography>

      {/* General Description */}
      <Typography variant="body1" gutterBottom>
        {generalDescription}
      </Typography>

      {/* Project Image */}
      <StyledImage src={image} alt={title} />

      {/* Updates Section */}
      <Box mt={4}>
        <Typography variant="h6" align="center" gutterBottom>
          Updates
        </Typography>
        {updates.map((update, index) => (
          <Accordion key={index}>
            {/* Date and Time */}
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}-content`} id={`panel${index}-header`}>
              <Typography>{`${new Date(update.timestamp).toLocaleString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })} - v${update.version} - ${update.title}`}</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Box mt={2}>
                <Typography variant="body2">Description:</Typography>
                <Typography variant="body2">{update.description}</Typography>
              </Box>
              <Box mt={2}>
                <Typography variant="body2">Changelog:</Typography>
                <Typography variant="body2">{update.changelog}</Typography>
              </Box>
              <Grid container spacing={2}>
                {update.images.map((img, idx) => (
                  <Grid item key={idx} xs={6} sm={4} md={3}>
                    <Box
                      sx={{
                        border: '2px solid',
                        borderColor: 'divider',
                        borderRadius: 1,
                        overflow: 'hidden',
                        width: '100%',
                        height: 0,
                        paddingBottom: '100%',
                        position: 'relative',
                      }}
                    >
                      <img
                        src={img}
                        alt={`Update ${index} Image ${idx}`}
                        onClick={() => handleImageClick(img)}
                        style={{
                          position: 'absolute',
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>

            <Dialog open={!!enlargedImg} onClose={handleDialogClose}>
              <DialogContent>
                <EnlargedImage src={enlargedImg} alt="Enlarged Image" />
              </DialogContent>
              <IconButton aria-label="Close" onClick={handleDialogClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
                <CloseIcon />
              </IconButton>
            </Dialog>
          </Accordion>
        ))}
      </Box>

      <Box textAlign="center" mt={4}>
        <Button variant="outlined" href="/projects">
          {t('Projects.BackToProjects')}
        </Button>
      </Box>
    </StyledBox>
  );
}

export default ProjectTemplate;
