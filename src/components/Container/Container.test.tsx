import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';
import Container from './index';

describe('Greeting-component render test', () => {
  it('should have snapshot', () => {
    const tree = renderer
      .create(
        <Container>
          <></>
        </Container>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it('should behave correctly', () => {
  //   const { container } = render(
  //     <Container>
  //       <></>
  //     </Container>,
  //   );

  //   const wrapper = container.querySelector('div');
  //   expect(wrapper).toHaveStyle({
  //     display: 'flex',
  //     'flex-direction': 'row',
  //     'justify-content': 'center',
  //     'align-items': 'center',
  //     height: '100%',
  //   });
  // });
});
