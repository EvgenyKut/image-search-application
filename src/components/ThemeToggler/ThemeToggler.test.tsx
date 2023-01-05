import { render, screen } from '@testing-library/react';
import ThemeToggler from './index';
import { setupStore } from '../../store/store';
import { Provider } from 'react-redux';
const store = setupStore();

describe('ThemeToggler', () => {
  it('should behave correctly', () => {
    render(
      <Provider store={store}>
        <ThemeToggler />
      </Provider>,
    );

    const toggler = screen.getByTestId('theme-toggler');
    expect(toggler).toBeInTheDocument();
    expect(toggler).toBeVisible();

    const lightMode = screen.getByTestId('light');
    expect(lightMode).toBeInTheDocument();
    expect(lightMode).toHaveStyle({ display: 'block' });
  });
});
