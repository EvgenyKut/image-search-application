import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styles from './imageCard.module.css';
import { capitalizeFirstLetter } from '../../helpers/helper';

type ImageCardProps = {
  url: string;
  alt: string;
  searchValue: string;
  likes: number;
};

const Image: React.FC<ImageCardProps> = ({ url, alt, searchValue, likes }) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia component="img" height="300" image={url} alt={alt} />
      <Typography variant="body2" color="text.secondary" align="center">
        {capitalizeFirstLetter(alt || searchValue)}
      </Typography>
      <div className={styles.likeArea}>
        <Typography variant="body2" color="text.secondary">
          {likes}
        </Typography>
        <FavoriteIcon color="primary" />
      </div>
    </Card>
  );
};

export default Image;
