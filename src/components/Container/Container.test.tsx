import { render, screen } from '@testing-library/react';
import Container from './index';

describe('Container-component render test', () => {
  const testContent = 'Test';

  it('test cases', () => {
    render(
      <Container>
        <div>{testContent}</div>
      </Container>,
    );
    const child = screen.getByTestId('container') as HTMLInputElement;
    expect(child).toBeInTheDocument();
    expect(child).toBeVisible();
    expect(child.textContent).toBe(testContent);
  });
});
