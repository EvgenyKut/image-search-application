import { render, screen } from '@testing-library/react';
import ImageCard from './index';

describe('Image', () => {
  it('correct behavior', () => {
    render(
      <ImageCard
        url="www.test.com"
        alt="test-image"
        searchValue="hello"
        likes={20}
      />,
    );

    const imageCard = screen.getByRole('img', { name: 'test-image' });
    expect(imageCard).toBeInTheDocument();
    expect(imageCard).toBeVisible();
  });
});
