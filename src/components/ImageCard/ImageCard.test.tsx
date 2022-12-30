import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import ImageCard from './index';

describe('Image', () => {
  it('snapshot', () => {
    const tree = renderer
      .create(<ImageCard url="www.test.com" alt="test-image" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('correct behavior', () => {
    render(<ImageCard url="www.test.com" alt="test-image" />);

    const imageCard = screen.getByRole('img', { name: 'test-image' });
    expect(imageCard ).toBeInTheDocument();
    expect(imageCard ).toBeVisible();
  });
});
