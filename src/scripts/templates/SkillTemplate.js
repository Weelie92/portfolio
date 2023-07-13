import React, { useState, useCallback } from 'react';
import { Box, Typography, Tooltip, IconButton, ClickAwayListener } from '@mui/material';
import { styled } from '@mui/system';
import { useTranslation } from 'react-i18next';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { SkillBarTheme } from '../StyledComponents';

function SkillIconTooltip({ icon, name, index, open, handleClickAway, setOpenTooltipIndex }) {
  const { t } = useTranslation();

  return (
    <Box key={index} sx={{ position: 'relative' }}>
      <img
        src={icon}
        alt={`${name} icon`}
        onClick={() => setOpenTooltipIndex(index)}
        style={{
          width: '50px',
          height: 'auto',
          marginRight: '8px',
          cursor: 'pointer',
          transition: 'transform 0.3s ease-in-out',
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      />

      {open && (
        <ClickAwayListener onClickAway={handleClickAway}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1,
            }}
          >
            <Tooltip
              open
              title={
                <Typography variant="body2" style={{ whiteSpace: 'pre-wrap' }}>
                  {t(`SkillDescription.${name.split(' ')[index]}`)}
                </Typography>
              }
              placement="top"
              arrow
            >
              <IconButton size="medium" sx={{ opacity: 0 }}>
                <InfoOutlinedIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>
          </Box>
        </ClickAwayListener>
      )}
    </Box>
  );
}

function SkillTemplate({ name, level, icons }) {
  const [openTooltipIndex, setOpenTooltipIndex] = useState(null);
  const handleClickAway = useCallback(() => setOpenTooltipIndex(null), []);

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start" mt={1}>
      <Box display="flex" justifyContent="flex-start" alignItems="center" width="100%" sx={{ paddingBottom: '10px' }}>
        {/* Name */}
        <Box display="flex" justifyContent="flex-start" width="100%">
          <Typography variant="body1" component="span" sx={{ fontSize: 24, fontWeight: 'bold' }}>
            {name}
          </Typography>
        </Box>

        {/* Icon and description */}
        <Box display="flex" alignItems="center">
          {icons.map((icon, index) => (
            <SkillIconTooltip
              key={index}
              icon={icon}
              name={name}
              index={index}
              open={openTooltipIndex === index}
              handleClickAway={handleClickAway}
              setOpenTooltipIndex={setOpenTooltipIndex}
            />
          ))}
        </Box>
      </Box>

      <SkillBarTheme level={level}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </SkillBarTheme>
    </Box>
  );
}

export default SkillTemplate;
