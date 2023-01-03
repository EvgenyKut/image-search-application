import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './index';
import { IImage } from '../models/IImage';
import { imageAPI } from '../services/ImageService';
import {
  setErrorNotification,
  setInfoNotification,
} from '../store/reducers/NotificationsSlice';
import { changeImagePage } from '../store/reducers/PaginationSlice';

const useGetImages = (searchValue: string) => {
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.paginationReducer);

  const {
    data: randomData,
    isLoading: isRandomImagesLoading,
    error: isRandomDataError,
  } = imageAPI.useFetchRandomPostsQuery(null);

  const {
    data,
    isLoading: isImagesLoading,
    error,
    isFetching,
  } = imageAPI.useFetchAllImagesQuery(
    {
      page: page,
      query: searchValue,
    },
    { skip: !searchValue },
  );

  const loading = isRandomImagesLoading || isImagesLoading || isFetching;

  const [imagesData, setImagesData] = useState<IImage[]>([]);

  useEffect(() => {
    if (!randomData?.images) return;
    setImagesData(randomData?.images);
  }, [randomData]);

  useEffect(() => {
    if (!data?.images) return;
    setImagesData(data.images);
  }, [data]);

  useEffect(() => {
    dispatch(
      changeImagePage({
        page: 1,
      }),
    );
  }, [dispatch, searchValue]);

  useEffect(() => {
    if (data?.images.length === 0) {
      dispatch(
        setInfoNotification(`No actual photos by search ${searchValue}`),
      );
    }
  }, [data, searchValue, dispatch]);

  useEffect(() => {
    const currentError = error || isRandomDataError;
    if (currentError) {
      const dataGetter = (error: any) => {
        return error?.data || 'Please, try later ...';
      };
      dispatch(setErrorNotification(dataGetter(currentError)));
    }
  }, [error, isRandomDataError, dispatch]);

  const totalPages = data?.total_pages;

  return { imagesData, loading, totalPages };
};
export default useGetImages;
