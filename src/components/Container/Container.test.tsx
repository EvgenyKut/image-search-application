import renderer from 'react-test-renderer';
import { render,screen } from '@testing-library/react';
import Container from './index';

describe('Container-component render test', () => {
  const testContent='Test'
  it('snapshot', () => {
    const tree = renderer
      .create(
        <Container>
          <></>
        </Container>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('test cases', () => {
    render(
      <Container>
        <div>{ testContent}</div>
        </Container>,
    );
    const child= screen.getByTestId('container') as HTMLInputElement;
    expect(child).toBeInTheDocument();
    expect(child).toBeVisible();
    expect(child.textContent).toBe(testContent);
  });
});
