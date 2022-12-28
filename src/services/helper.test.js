import { normalizeImages } from './helper';

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
  { id: 10, url: 'https://images.unsplash.com/photo-1', alt: 'test-image-1' },
  { id: 20, url: 'https://images.unsplash.com/photo-2', alt: 'test-image-2' },
];
const NormalizedMocImages2 = [
  { id: 20, url: 'https://images.unsplash.com/photo-2', alt: 'test-image-2' },
  { id: 30, url: 'https://images.unsplash.com/photo-3', alt: 'test-image-3' },
  { id: 3000, url: 'https://images.unsplash.com/photo-1', alt: 'test-image-1' },
];

describe('Normalization data (case 1)', () => {
  test('get normalized data, base case', () => {
    expect(normalizeImages(MockImages)).toStrictEqual(NormalizedMocImages);
  });
  test('get normalized data (case 2, mixed by likes)', () => {
    expect(normalizeImages(MockImages2)).toStrictEqual(NormalizedMocImages2);
  });
});
