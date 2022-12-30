import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

type ImageCardProps = {
  url: string;
  alt: string;
};

const Image: React.FC<ImageCardProps> = ({ url, alt }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="300" image={url} alt={alt} />
      </CardActionArea>
    </Card>
  );
};

export default Image;
