import { IImage, IImageRaw } from '../models/IImage';

export const normalizeImages = (images: IImageRaw[]): IImage[] => {
  const sortedImages = images.sort((a, b) => b.likes - a.likes);
  const normalizedImages: IImage[] = sortedImages.map((image: IImageRaw) => ({
    id: image?.id || 0,
    url: image?.urls?.small || '',
    alt: image?.alt_description || '',
  }));
  return normalizedImages;
};
