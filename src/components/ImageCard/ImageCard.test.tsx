import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import ImageCard from './index';

describe('Image', () => {
  it('correct behavior', () => {
    render(<ImageCard url="www.test.com" alt="test-image" />);

    const imageCard = screen.getByRole('img', { name: 'test-image' });
    expect(imageCard).toBeInTheDocument();
    expect(imageCard).toBeVisible();
  });
});
