import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Input from './index';
import StateProvider from '../../providers/StateProvider';

describe('Input-component render test', () => {
  const testContent = 'Test';
  const testLabel = 'Test label';
  const mockCallback = jest.fn();
  it('snapshot', () => {
    const tree = renderer
      .create(
        <StateProvider>
          <Input
            label={testLabel}
            value={testContent}
            onChange={mockCallback}
          />
        </StateProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Input test case', () => {
    render(
      <StateProvider>
        <Input label={testLabel} value={testContent} onChange={mockCallback} />
      </StateProvider>,
    );
    const inputField = screen.getByTestId('input') as HTMLInputElement;
    expect(inputField).toBeInTheDocument();
    expect(inputField).toBeVisible();

    // eslint-disable-next-line testing-library/no-node-access
    const label = inputField.getElementsByTagName('label')[0];
    expect(label.textContent?.slice(0, -2)).toBe(testLabel);
  });
});
