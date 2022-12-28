import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Greeting from './index';
import { greetingFormatting } from './helper';

describe('Greeting-component render test', () => {
  it('should have snapshot', () => {
    const tree = renderer.create(<Greeting name={'Evgeny'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should behave correctly', () => {
    const value = greetingFormatting('Evgeny', new Date().getHours());
    render(<Greeting name={'Evgeny'} />);
    const textField = screen.getByTestId('greeting') as HTMLInputElement;
    expect(textField).toBeInTheDocument();
    expect(textField).toBeVisible();
    expect(textField.textContent).toBe(value);
  });
});
