import renderer from 'react-test-renderer';
import StateProvider from '../../providers/StateProvider';
import Spinner from './index';

describe('Spinner', () => {
  it('renders correctly Spinner', () => {
    const tree = renderer.create(<Spinner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
