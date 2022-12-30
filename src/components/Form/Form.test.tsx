import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Form from './index';

describe('Form-component render test', () => {
  const testContent = 'Test';
  const mockCallback = jest.fn();
  it('should have snapshot', () => {
    const tree = renderer
      .create(
        <Form onSubmit={mockCallback}>
          <div>{testContent}</div>
        </Form>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Form test cases', () => {
    render(
      <Form onSubmit={mockCallback}>
        <div>{testContent}</div>
      </Form>,
    );
    const textField = screen.getByTestId('form') as HTMLInputElement;
    expect(textField).toBeInTheDocument();
    expect(textField).toBeVisible();
    expect(textField.textContent).toBe(testContent);
  });
});
