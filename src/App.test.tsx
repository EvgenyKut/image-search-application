import { render, screen } from '@testing-library/react';
import App from './App';
import { greetingFormatting } from './components/Greeting/helper';
import { Dictionary } from './constants/dictionary';

test('Render LoginPage', () => {
  render(<App />);
  const value = greetingFormatting('', new Date().getHours());
  expect(screen.getByRole('textbox')).toHaveDisplayValue('');
  expect(
    screen.getByRole('button', { name: Dictionary.LOGIN_BTN }),
  ).toBeEnabled();
  const textField = screen.getByTestId('greeting') as HTMLInputElement;
  expect(textField).toBeInTheDocument();
  expect(textField).toBeVisible();
  expect(textField.textContent).toBe(value);
  const themeToggler = screen.getByTestId('theme-toggler');
  expect(themeToggler).toBeInTheDocument();
  expect(themeToggler).toBeVisible();
});
