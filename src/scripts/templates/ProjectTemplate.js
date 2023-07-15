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
  const [expandedPanel, setExpandedPanel] = useState(null);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : null);
  };

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

  const { title, updates } = project;

  return (
    <StyledBox p={2}>
      {/* Project Title */}
      <Box textAlign="center">
        {/* Title */}
        <Box textAlign="center" mt={2}>
          <Typography variant="h4" align="center" gutterBottom>
            {title}
          </Typography>
        </Box>

        {/* Primary Image */}
        <Box textAlign="center" mt={2}>
          <StyledImage src={project.image[0]} alt={project.title} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
        </Box>

        {/* General Description */}
        <Box mt={4}>
          <Typography variant="body1" gutterBottom>
            {t(`Projects.${projectId}.LongDescription`)}
          </Typography>
        </Box>

        {/* Project Images */}
        <Box mt={2} sx={{ backgroundColor: '#f8f9fa' }}>
          {' '}
          {/* replace with your desired background color */}
          <Grid container spacing={2} justifyContent="center">
            {Array.isArray(project.image) &&
              project.image.length > 1 &&
              project.image.slice(1).map((image, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <StyledImage
                      onClick={() => handleImageClick(image)}
                      src={image}
                      alt={project.title}
                      sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover', cursor: 'pointer' }}
                    />
                  </Box>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Box>

      {/* Updates Section */}
      <Box mt={4}>
        <Typography variant="h6" align="center" gutterBottom>
          {t('Projects.Updates')}
        </Typography>
        {updates.map((update, index) => (
          <Accordion key={index} expanded={expandedPanel === index} onChange={handleAccordionChange(index)}>
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

            {/* Accordion Details */}
            <AccordionDetails>
              {/* Description */}
              <Box mt={2}>
                <Typography variant="body2">Description:</Typography>
                <Typography variant="body2">{update.description}</Typography>
              </Box>

              {/* Changelog */}
              <Box mt={2}>
                <Typography variant="body2">Changelog:</Typography>
                <Typography variant="body2">{update.changelog}</Typography>
              </Box>

              {/* Images */}
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

            {/* Enlarged Image Dialog */}
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
