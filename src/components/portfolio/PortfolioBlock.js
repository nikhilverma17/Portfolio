import React, { useState } from 'react';
import IconLink from './IconLink';
import { Box } from '@mui/material';
import './PortfolioBlock.css'; // Import a separate CSS file for animations

function PortfolioBlock(props) {
  const { image, live, source, title, paragraph } = props;
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleImageHover = () => {
    setIsImageHovered(true);
  };

  const handleImageLeave = () => {
    setIsImageHovered(false);
  };

  const handleButtonHover = () => {
    setIsButtonHovered(true);
  };

  const handleButtonLeave = () => {
    setIsButtonHovered(false);
  };

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      padding={'2rem'}
    >
      <Box
        component={'img'}
        src={image}
        alt={'mockup'}
        width={'30rem'}
        style={{
          objectFit: 'cover',
          borderRadius: '25px',
          boxShadow: '...',
          transform: isImageHovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.3s ease-in-out',
        }}
        onMouseEnter={handleImageHover}
        onMouseLeave={handleImageLeave}
      />
      <Box
        className={'portfolio'}
        display={'flex'}
        flexDirection={'column'}
        gap={'0.5rem'}
        alignItems={'center'}
        width={'100%'}
        padding={'1rem'}
      >
        <h1 style={{ fontSize: '2rem' }}>{title}</h1>
        <p style={{ fontSize: '1rem', textAlign: 'center' }}>{paragraph}</p>
      </Box>
      <Box
        className={'portfolio'}
        display={'flex'}
        flexDirection={'column'}
        gap={'0.5rem'}
        alignItems={'center'}
        fontSize={'1.2rem'}
      >
        {live && (
          <Box
            p={1}
            border={'2px solid black'}
            borderRadius={'25px'}
            className={`button ${isButtonHovered ? 'button-hover' : ''}`} // Apply the hover class
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
          >
            <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'} />
          </Box>
        )}

        {source && (
          <Box
            p={1}
            border={'2px solid black'}
            borderRadius={'25px'}
            className={`button ${isButtonHovered ? 'button-hover' : ''}`} // Apply the hover class
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
          >
            <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
