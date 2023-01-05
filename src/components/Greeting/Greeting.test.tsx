import { render, screen } from '@testing-library/react';
import Greeting from './index';
import { greetingFormatting } from './helper';
import { setupStore } from '../../store/store';
import { Provider } from 'react-redux';
const store = setupStore();

describe('Greeting-component render test', () => {
  it('should behave correctly', () => {
    const value = greetingFormatting('Evgeny', new Date().getHours());
    render(
      <Provider store={store}>
        <Greeting name={'Evgeny'} />
      </Provider>,
    );
    const textField = screen.getByTestId('greeting') as HTMLInputElement;
    expect(textField).toBeInTheDocument();
    expect(textField).toBeVisible();
    expect(textField.textContent).toBe(value);
  });
});
