import { useState } from 'react';
import Button from '@mui/material/Button';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import Spinner from '../components/Spinner';
import useGetImages from '../hooks/useGetImages';
import { onBlur } from '../store/reducers/SearchFocusSlice';
import { CustomPagination, Input, Form, Container } from '../components';
import { Dictionary } from '../constants/dictionary';
import ImagesGrid from '../components/ImagesGrid';

const ImagesSearch = () => {
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.paginationReducer);

  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = () => {
    setSearchValue(inputValue);
    dispatch(onBlur());
  };

  const { imagesData, loading, totalPages } = useGetImages(searchValue);

  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <Container>
          <Form onSubmit={handleSubmit}>
            <Input
              value={inputValue}
              onChange={(e: any) => setInputValue(e.target.value)}
              label={Dictionary.SEARCH_BTN}
            />
            <Button
              onClick={handleSubmit}
              variant="outlined"
              color="primary"
              type="submit"
              size="medium"
            >
              {Dictionary.SEARCH_BTN}
            </Button>
          </Form>
          <ImagesGrid imagesData={imagesData} searchValue={searchValue} />
          {!!totalPages && (
            <CustomPagination totalPages={totalPages} page={page} />
          )}
        </Container>
      )}
    </>
  );
};

export default ImagesSearch;
