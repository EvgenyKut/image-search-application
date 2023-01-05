import { render, screen } from '@testing-library/react';
import Input from './index';
import { setupStore } from '../../store/store';
import { Provider } from 'react-redux';
const store = setupStore();

describe('Input-component render test', () => {
  const testContent = 'Test';
  const testLabel = 'Test label';
  const mockCallback = jest.fn();

  it('Input test case', () => {
    render(
      <Provider store={store}>
        <Input label={testLabel} value={testContent} onChange={mockCallback} />
      </Provider>,
    );
    const inputField = screen.getByTestId('input') as HTMLInputElement;
    expect(inputField).toBeInTheDocument();
    expect(inputField).toBeVisible();

    // eslint-disable-next-line testing-library/no-node-access
    const label = inputField.getElementsByTagName('label')[0];
    expect(label.textContent?.slice(0, -2)).toBe(testLabel);
  });
});
