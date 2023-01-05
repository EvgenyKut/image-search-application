import { imagesNormalizer } from './helper';

const MockImages = [
  {
    id: 10,
    urls: {
      small: 'https://images.unsplash.com/photo-1',
    },
    alt_description: 'test-image-1',
    likes: 20,
  },
  {
    id: 20,
    urls: {
      small: 'https://images.unsplash.com/photo-2',
    },
    alt_description: 'test-image-2',
    likes: 10,
  },
];

const MockImages2 = [
  {
    id: 3000,
    urls: {
      small: 'https://images.unsplash.com/photo-1',
    },
    alt_description: 'test-image-1',
    likes: 100,
  },
  {
    id: 20,
    urls: {
      small: 'https://images.unsplash.com/photo-2',
    },
    alt_description: 'test-image-2',
    likes: 4000,
  },
  {
    id: 30,
    urls: {
      small: 'https://images.unsplash.com/photo-3',
    },
    alt_description: 'test-image-3',
    likes: 2000,
  },
];

const NormalizedMocImages = [
  {
    imageId: 10,
    imageUrl: 'https://images.unsplash.com/photo-1',
    imageDescription: 'test-image-1',
    imageLikes: 20,
  },
  {
    imageId: 20,
    imageUrl: 'https://images.unsplash.com/photo-2',
    imageDescription: 'test-image-2',
    imageLikes: 10,
  },
];
const NormalizedMocImages2 = [
  {
    imageId: 20,
    imageUrl: 'https://images.unsplash.com/photo-2',
    imageDescription: 'test-image-2',
    imageLikes: 4000,
  },
  {
    imageId: 30,
    imageUrl: 'https://images.unsplash.com/photo-3',
    imageDescription: 'test-image-3',
    imageLikes: 2000,
  },
  {
    imageId: 3000,
    imageUrl: 'https://images.unsplash.com/photo-1',
    imageDescription: 'test-image-1',
    imageLikes: 100,
  },
];

describe('Normalization data (case 1)', () => {
  test('get normalized data, base case', () => {
    expect(imagesNormalizer(MockImages)).toStrictEqual(NormalizedMocImages);
  });
  test('get normalized data (case 2, mixed by likes)', () => {
    expect(imagesNormalizer(MockImages2)).toStrictEqual(NormalizedMocImages2);
  });
});
