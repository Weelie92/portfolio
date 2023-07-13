import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Grid, Typography } from '@mui/material';
import { StyledImage } from '../StyledComponents';

function Projects({ projects }) {
  const { t } = useTranslation();

  return (
    <Box my={5} style={{ height: '100%', width: '75%' }}>
      <Grid container spacing={3}>
        {Object.values(projects).map((project) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={project.title}>
            <Box
              component="a"
              href={`/projects/${project.path}`}
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              {/* Title */}
              <Typography variant="h4" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {project.title}
              </Typography>

              {/* Image */}
              <Box sx={{ overflow: 'hidden', height: '250px', width: '95%', display: 'flex', justifyContent: 'center' }}>
                <StyledImage src={project.image} alt={project.title} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
              </Box>

              {/* Description */}
              <Typography variant="body1" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', lineClamp: '2' }}>
                {project.generalDescription}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
