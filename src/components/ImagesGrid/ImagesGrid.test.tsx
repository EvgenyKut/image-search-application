import { render, screen } from '@testing-library/react';
import { capitalizeFirstLetter } from '../../helpers/helper';
import ImagesGrid from './index';

const mockImages = [
  { imageId: 1, imageUrl: 'link', imageDescription: 'image', imageLikes: 7 },
  { imageId: 2, imageUrl: 'link2', imageDescription: 'image2', imageLikes: 17 },
];

describe('Image', () => {
  it('correct behavior', () => {
    render(<ImagesGrid searchValue="test" imagesData={mockImages} />);

    const imagesGrid = screen.getByTestId('imagesGrid');
    expect(imagesGrid).toBeVisible();
    expect(imagesGrid).toBeInTheDocument();

    const imageCards = screen.getAllByTestId('imageCard');
    expect(imageCards).toHaveLength(mockImages.length);

    const imageFirstCard = imageCards[0];
    expect(imageFirstCard).toBeInTheDocument();
    expect(imageFirstCard).toBeVisible();
    expect(imageFirstCard).toHaveTextContent(
      capitalizeFirstLetter(mockImages[0].imageDescription) +
        mockImages[0].imageLikes,
    );

    const imageSecondCard = imageCards[1];
    expect(imageSecondCard).toBeInTheDocument();
    expect(imageSecondCard).toBeVisible();
    expect(imageSecondCard).toHaveTextContent(
      capitalizeFirstLetter(mockImages[1].imageDescription) +
        mockImages[1].imageLikes,
    );
  });
});
