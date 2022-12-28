import Notification from '../components/Notification';
import RouterProvider from './RouterProvider';
import StateProvider from './StateProvider';

const AppProvider = () => (
  <StateProvider>
    <>
      <Notification />
      <RouterProvider />
    </>
  </StateProvider>
);

export default AppProvider;
