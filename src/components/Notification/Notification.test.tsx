import renderer from 'react-test-renderer';
import StateProvider from '../../providers/StateProvider';
import Notification from './index';

it('renders correctly Notification', () => {
  const tree = renderer
    .create(
      <StateProvider>
        <Notification />
      </StateProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
