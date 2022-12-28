import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

type ImageProps = {
  url: string;
  alt: string;
};

const Image: React.FC<ImageProps> = ({ url, alt }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="300" image={url} alt={alt} />
      </CardActionArea>
    </Card>
  );
};

export default Image;
