import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { IImage } from '../../models/IImage';
import ImageCard from '../ImageCard';
import styles from './imagesGrid.module.css';

type ImagesGridProps = {
  imagesData: IImage[];
  searchValue: string;
};
const ImagesGrid: React.FC<ImagesGridProps> = ({ imagesData, searchValue }) => {
  return (
    <Box className={styles.boxWrapper}>
      <Grid container direction="row" justifyContent="center" spacing={3}>
        {imagesData.map((image: IImage) => (
          <Grid item key={image.id}>
            <ImageCard
              url={image.url}
              alt={image.alt}
              searchValue={searchValue}
              likes={image.likes}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ImagesGrid;
