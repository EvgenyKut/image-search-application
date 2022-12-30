import { render, screen } from '@testing-library/react';
import StateProvider from '../../providers/StateProvider';
import ThemeToggler from './index';
import renderer from 'react-test-renderer';

describe('ThemeToggler', () => {
  it('renders correctly ThemeToggler', () => {
    const tree = renderer
      .create(
        <StateProvider>
          <ThemeToggler />
        </StateProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should behave correctly', () => {
    render(
      <StateProvider>
        <ThemeToggler />
      </StateProvider>,
    );

    const toggler = screen.getByTestId('theme-toggler');
    expect(toggler).toBeInTheDocument();
    expect(toggler).toBeVisible();

    const lightMode = screen.getByTestId('light');
    expect(lightMode).toBeInTheDocument();
    expect(lightMode).toHaveStyle({ display: 'block' });
  });
});
