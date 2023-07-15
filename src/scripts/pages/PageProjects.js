import React from 'react';
import { Box, Grid, Typography, AccordionSummary, Accordion } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StyledImage } from '../StyledComponents';

function Projects({ projects }) {
  return (
    <Box my={5} style={{ height: '100%', width: '75%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                <StyledImage src={project.image[0]} alt={project.title} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
              </Box>

              {/* Description */}
              <Typography variant="body1" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', lineClamp: '2' }}>
                {project.generalDescription}
              </Typography>

              {/* Updates Count */}
              <Typography variant="body2" sx={{ mt: 1 }}>
                Updates: {project.updates.length}
              </Typography>

              {/* Latest Update */}
              {project.updates.length > 0 && (
                <Grid container sx={{ mt: 1, width: '100%' }} spacing={2}>
                  {/* Version */}
                  <Grid item xs={12} sm={4}>
                    <Typography variant="body1">{`v${project.updates[0].version}`}</Typography>
                  </Grid>

                  {/* Title */}
                  <Grid item xs={12} sm={4}>
                    <Typography variant="body1">{project.updates[0].title}</Typography>
                  </Grid>

                  {/* Date */}
                  <Grid item xs={12} sm={4}>
                    <Typography variant="body1">
                      {new Date(project.updates[0].timestamp).toLocaleString('en-GB', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                      })}
                    </Typography>
                  </Grid>
                </Grid>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
