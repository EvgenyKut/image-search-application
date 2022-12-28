import { useEffect } from 'react';

const useKeyListener = (
  key: string,
  callback: () => void,
  disableFlag?: boolean,
) => {
  useEffect(() => {
    if (disableFlag) return;
    const listener = (event: any) => {
      if (event.code === key) {
        event.preventDefault();
        callback();
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, [callback, key, disableFlag]);
};

export default useKeyListener;
