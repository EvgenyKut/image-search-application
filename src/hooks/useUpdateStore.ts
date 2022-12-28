import { useEffect } from 'react';
import { addName } from '../store/reducers/AuthSlice';
import { useAppDispatch } from './redux';
import { useNavigate } from 'react-router-dom';

const useUpdateStore = (navigateUrl?: string) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const dataFromLS = JSON.parse(
      window.localStorage.getItem('search-app-auth') || '',
    );
    console.log('dataFromLS', dataFromLS);
    if (dataFromLS.auth) {
      dispatch(addName({ name: dataFromLS.name }));
      if (navigateUrl) {
        navigate(navigateUrl);
      }
    }
  }, [dispatch, navigate, navigateUrl]);
};

export default useUpdateStore;
