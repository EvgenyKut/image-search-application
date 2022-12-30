import renderer from 'react-test-renderer';
import AuthRoute from './index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StateProvider from '../../providers/StateProvider';
import { Routes as DictionaryRoutes } from '../../constants/routes';
describe('Container-component render test', () => {
  it('snapshot', () => {
    const tree = renderer
      .create(
        <StateProvider>
          <BrowserRouter>
            <Routes>
              <Route
                element={
                  <AuthRoute baseUrl={DictionaryRoutes.HOME}>
                    <></>
                  </AuthRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </StateProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
