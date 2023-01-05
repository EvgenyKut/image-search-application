import { IImage, IImageRawData } from '../models/IImage';

export const imagesNormalizer = (images: IImageRawData[]): IImage[] => {
  const sortedImages = images.sort((a, b) => b.likes - a.likes);
  return sortedImages.map(({ id, alt_description, likes, urls }) => {
    return {
      imageId: id,
      imageDescription: alt_description,
      imageLikes: likes,
      imageUrl: urls.small,
    };
  });
};
