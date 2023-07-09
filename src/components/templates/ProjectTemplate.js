import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Button, styled } from '@mui/material';

const StyledBox = styled(Box)({
  maxWidth: '600px',
  margin: '0 auto',
});

const StyledImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
});

function ProjectTemplate({ projects }) {
  const { projectId } = useParams();
  const { t } = useTranslation();
  const project = projects.find((project) => project.path === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  const { title, image } = project;

  return (
    <StyledBox p={2}>
      <Typography variant="h4" align="center" gutterBottom>
        {title}
      </Typography>
      <StyledImage src={image} alt={title} />
      <Typography variant="body1" gutterBottom>
        {t(`Projects.ProjectDescription.${project.path}`)}
      </Typography>
      <Box textAlign="center">
        <Button variant="outlined" href="/projects">
          {t('Projects.BackToProjects')}
        </Button>
      </Box>
    </StyledBox>
  );
}

export default ProjectTemplate;
