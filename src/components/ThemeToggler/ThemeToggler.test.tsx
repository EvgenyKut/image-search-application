import renderer from 'react-test-renderer';
import ThemeToggler from './index';

it('renders correctly ThemeToggler', () => {
  const tree = renderer.create(<ThemeToggler />).toJSON();
  expect(tree).toMatchSnapshot();
});
